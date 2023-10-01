import React, { useState } from "react"

import { Button } from "../ui/button"
import { Input } from "../ui/input"

interface WagerContractProps {
  canPlaceBet: boolean
}

const WagerContract: React.FC<WagerContractProps> = ({ canPlaceBet }) => {
  const [betAmount, setBetAmount] = useState<string>("")

  return (
    <>
      <div className="mb-5 mt-4 flex space-x-4">
        <Input
          placeholder="Bet amount"
          value={`${betAmount}`}
          onChange={(e) => setBetAmount(e.target.value.replace(/[^0-9]/g, ""))}
          className="w-1/2 rounded border border-neutral-600 p-3 py-6"
        />
        <Input
          value={`To Win: $${Number(betAmount) * 2}`}
          readOnly
          className="w-1/2 cursor-not-allowed rounded border border-green-800 bg-green-300/10 p-3 py-6 font-semibold text-green-300"
        />
      </div>
      <div className="mb-2 mt-6">
        <Button
          className={`w-full rounded p-5 font-semibold ${
            canPlaceBet ? "cursor-pointer" : "cursor-not-allowed bg-gray-300"
          }`}
          disabled={!canPlaceBet}
        >
          Place Bet
        </Button>
      </div>
    </>
  )
}

export default WagerContract
