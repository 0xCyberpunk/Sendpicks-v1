import React, { useEffect, useState } from "react"
import axios from "axios"

import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import { Input } from "../ui/input"
import SelectedCard from "./SelectionCard"

export type Player = {
  name: string
  team: string
  position: string
  opponent: string
  statValue: number
  statType: string
  imageUrl: string
}

const Predictions: React.FC = () => {
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([])
  const [players, setPlayers] = useState<Player[]>([])
  const [betAmount, setBetAmount] = useState<string>("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/fetchAndSavePredictions")
        if (response.status === 200) setPlayers(response.data)
      } catch (error) {
        console.error("Error occurred while fetching predictions:", error)
      }
    }
    void fetchData()
  }, [])

  const handleDeselect = (deselectedPlayer: Player) => {
    setSelectedPlayers((prev) =>
      prev.filter((player) => player !== deselectedPlayer)
    )
  }

  const handleCardSelect = (player: Player) => {
    setSelectedPlayers((prev) => {
      if (prev.includes(player)) {
        return prev.filter((p) => p !== player)
      } else {
        return [...prev, player]
      }
    })
  }

  const canPlaceBet = selectedPlayers.length === 2

  return (
    <div className="flex">
      <div className="grid w-2/3 grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {players.map((player, index) => (
          <PredictionCard
            key={index}
            player={player}
            onCardSelect={handleCardSelect}
            selectedPlayers={selectedPlayers}
          />
        ))}
      </div>
      <div className="w-1/3 pl-4">
        <Card className="mb-3 p-3">
          {selectedPlayers.length ? (
            <>
              <h2 className="mb-3 text-left text-base font-semibold">
                My Selections
              </h2>
              {selectedPlayers.map((player, index) => (
                <SelectedCard
                  key={index}
                  player={player}
                  onDeselect={() => handleDeselect(player)}
                />
              ))}
            </>
          ) : (
            <>
              <h2 className="mt-4 text-center text-xl font-semibold">
                No Players Selected
              </h2>
              <img
                className="m-auto my-8 p-2"
                src="/empty.webp"
                alt="Empty state"
                style={{ width: "220px", height: "220px" }}
              />
            </>
          )}
          <div className="mb-5 mt-4 flex space-x-4">
            <Input
              placeholder="Bet amount"
              value={`${betAmount}`}
              onChange={(e) =>
                setBetAmount(e.target.value.replace(/[^0-9]/g, ""))
              }
              className="w-1/2 rounded border border-slate-600 bg-slate-950 p-3 py-6"
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
                canPlaceBet
                  ? "cursor-pointer"
                  : "cursor-not-allowed bg-gray-300"
              }`}
              disabled={!canPlaceBet}
            >
              Place Bet
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

const PredictionCard: React.FC<{
  player: Player
  onCardSelect: (player: Player) => void
  selectedPlayers: Player[]
}> = ({ player, onCardSelect, selectedPlayers }) => {
  const [isChecked, setChecked] = useState(false)

  const handleCardClick = () => {
    if (selectedPlayers.includes(player)) {
      setChecked(false)
      onCardSelect(player)
    } else if (selectedPlayers.length < 2) {
      setChecked(true)
      onCardSelect(player)
    }
  }

  return (
    <Card
      onClick={handleCardClick}
      className="relative flex cursor-pointer flex-col items-center justify-center p-1 shadow-lg shadow-slate-600/20"
    >
      <div className="absolute right-4 top-3">
        <Checkbox checked={isChecked} onChange={handleCardClick} />
      </div>
      <img
        className="mt-3 rounded-full"
        src={player.imageUrl}
        alt={player.name}
        style={{ width: "110px", height: "110px" }}
      />
      <CardHeader className="flex w-full flex-col items-center justify-center pb-3 text-center">
        <CardTitle className="text-lg font-bold">{player.name}</CardTitle>
        <CardDescription>
          {`${player.team} - ${player.position}`}
          <br />
          {player.opponent}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-1 flex w-full justify-center">
        <div className="flex w-52 items-center justify-between rounded-lg bg-slate-600/20 p-2">
          <div className="text-xs font-semibold">{player.statType}</div>
          <div className="text-xl font-semibold">{player.statValue}</div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Predictions
