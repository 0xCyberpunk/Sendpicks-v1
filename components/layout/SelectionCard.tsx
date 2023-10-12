/* eslint-disable tailwindcss/no-custom-classname */
import React, { useEffect, useState } from "react"

import { Button, buttonVariants } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Player } from "./predictions"

interface SelectedCardProps {
  player: Player
  onDeselect: (deselectedPlayer: Player) => void
}

export const SelectedCard: React.FC<SelectedCardProps> = ({
  player,
  onDeselect,
}) => {
  const [prediction, setPrediction] = useState<"more" | "less" | null>(null)

  return (
    <Card className="relative mb-4 max-h-60 p-3 px-1">
      <button
        onClick={() => onDeselect(player)}
        className="absolute right-2 top-1 p-0 text-xl"
      >
        ✖️
      </button>
      <CardHeader className="flex items-start justify-start space-y-1.5 p-1">
        <div className="flex items-start">
          <img
            className="ml-1 mr-4 rounded-full"
            src={player.imageUrl}
            alt={player.name}
            style={{ width: "90px", height: "90px" }}
          />
          <div>
            <CardTitle>{player.name}</CardTitle>
            <CardDescription className="mb-2 pt-1 text-sm">
              {player.team} - {player.position}
              <br />
              {player.opponent}
            </CardDescription>
            <div className="mt-2 flex w-44 items-center justify-between rounded-lg bg-slate-500/20 p-1 shadow-lg">
              <span className="pl-2 text-sm font-semibold text-green-400">
                {player.statValue}
              </span>
              <span className="text-stone-400">|</span>
              <span className="font-base pr-2 text-xs">{player.statType}</span>
            </div>
            <div className="mb-1.5 mt-4 flex space-x-4">
              <Button
                className={`w-full ${
                  prediction === "more" ? "bg-green-400" : "bg-gray-300"
                }`}
                onClick={() => setPrediction("more")}
              >
                More
              </Button>
              <Button
                className={`w-full ${
                  prediction === "less" ? "bg-green-400" : "bg-gray-300"
                }`}
                onClick={() => setPrediction("less")}
              >
                Less
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

export default SelectedCard
