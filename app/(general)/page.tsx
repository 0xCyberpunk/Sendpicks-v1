"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Predictions from "@/components/layout/predictions"

const HomePage: React.FC = () => {
  const [showConsentModal, setShowConsentModal] = useState(false)

  useEffect(() => {
    const userHasGivenConsent = localStorage.getItem("userConsent")
    if (!userHasGivenConsent) {
      setShowConsentModal(true)
    }
  }, [])

  const handleConsentConfirmation = () => {
    localStorage.setItem("userConsent", "true")
    setShowConsentModal(false)
  }

  return (
    <>
      <div className="container mx-auto px-1">
        <div className="ml-auto flex items-center space-x-4"></div>

        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-start space-y-2">
            <h2 className="pr-8 text-2xl font-bold tracking-tight">
              Daily Picks
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
            <Card className="border-green-800 bg-green-300/10">
              <CardHeader className="my-auto space-y-0">
                <CardTitle className="text-base font-semibold">
                  <span className="pr-3 text-xl"> ✅ </span>
                  <span className="text-base text-green-400 ">
                    {" "}
                    Choose 2 players. Pick whether you think they will get MORE
                    or LESS than their projection.
                  </span>
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
          <Predictions />
        </div>
      </div>
    </>
  )
}

export default HomePage
