// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RevenueDistribution is Ownable {
    IERC20 public sendToken; // Address of the SEND ERC-20 token
    uint256 public accumulatedRevenue; // Accumulated revenue available for claim
    mapping(address => uint256) public lastClaimed; // Last claimed per address

    uint256 public minimumTokenForRevenue = 50000 * 10**18; // 50,000 SEND Tokens to be eligible

    event RevenueClaimed(address indexed holder, uint256 amount);
    event RevenueDistributed(uint256 amount);

    constructor(address _sendToken) {
        require(_sendToken != address(0), "Invalid SEND Token address");
        sendToken = IERC20(_sendToken); // Initialize the sendToken with the provided address
    }

    // Allows the owner to make the accumulated balance available for revenue distribution
    function distributeRevenue() external onlyOwner {
        require(address(this).balance > 0, "No revenue to distribute");
        accumulatedRevenue += address(this).balance;
        emit RevenueDistributed(address(this).balance);
    }

    // Allows SEND token holders to claim their share of revenue
    function claimRevenue() external {
        uint256 holderBalance = sendToken.balanceOf(msg.sender);
        require(holderBalance >= minimumTokenForRevenue, "Insufficient SEND tokens to claim revenue");

        uint256 lastClaim = lastClaimed[msg.sender];
        require(accumulatedRevenue > lastClaim, "No revenue to claim or already claimed");

        uint256 claimAmount = calculateClaimAmount(msg.sender);
        require(claimAmount > 0, "No revenue available to claim");

        lastClaimed[msg.sender] = accumulatedRevenue;
        payable(msg.sender).transfer(claimAmount); // Transfer the claim amount in ETH to the holder

        emit RevenueClaimed(msg.sender, claimAmount);
    }

    // Calculates the amount of revenue a holder can claim based on their SEND token balance
    function calculateClaimAmount(address holder) public view returns (uint256) {
        uint256 holderBalance = sendToken.balanceOf(holder);
        uint256 totalSupply = sendToken.totalSupply();
        
        // The unclaimed revenue is calculated and then multiplied by the holder’s percentage share of the total supply of SEND tokens
        uint256 unclaimedRevenue = accumulatedRevenue - lastClaimed[holder];
        return (unclaimedRevenue * holderBalance) / totalSupply;
    }

    // Allows the owner to withdraw any excess balance that is not part of the accumulatedRevenue
    function withdrawUnclaimedRevenue() external onlyOwner {
        require(accumulatedRevenue <= address(this).balance, "No unclaimed revenue to withdraw");
        payable(owner()).transfer(address(this).balance - accumulatedRevenue);
    }

    receive() external payable {}
}
