-- CreateTable
CREATE TABLE "User" (
    "_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "revenue" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Sport" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Sport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prediction" (
    "id" TEXT NOT NULL,
    "playerName" TEXT NOT NULL,
    "team" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "statType" TEXT NOT NULL,
    "statValue" INTEGER NOT NULL,
    "weekOpponent" TEXT NOT NULL,
    "gameTime" TIMESTAMP(3) NOT NULL,
    "predictionOn" BOOLEAN NOT NULL,
    "locked" BOOLEAN NOT NULL DEFAULT false,
    "sportId" TEXT NOT NULL,

    CONSTRAINT "Prediction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wager" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "multiplier" INTEGER NOT NULL,
    "playerName" TEXT NOT NULL,
    "statType" TEXT NOT NULL,
    "statValue" INTEGER NOT NULL,
    "gameTime" TIMESTAMP(3) NOT NULL,
    "more" BOOLEAN NOT NULL,
    "less" BOOLEAN NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "payoutTime" TIMESTAMP(3) NOT NULL,
    "sportId" TEXT NOT NULL,

    CONSTRAINT "Wager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transactions" (
    "id" TEXT NOT NULL,
    "wagerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatOutcome" (
    "id" TEXT NOT NULL,
    "predictionId" TEXT NOT NULL,
    "wagerId" TEXT NOT NULL,
    "outcomeType" TEXT NOT NULL,
    "outcomeValue" INTEGER NOT NULL,
    "multiplier" INTEGER NOT NULL,
    "payout" BOOLEAN NOT NULL,

    CONSTRAINT "StatOutcome_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LitProtocolMessage" (
    "_id" TEXT NOT NULL,
    "encryptedString" TEXT NOT NULL,
    "accessControlConditions" JSONB[],
    "encryptedSymmetricKey" TEXT NOT NULL,

    CONSTRAINT "LitProtocolMessage_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");

-- AddForeignKey
ALTER TABLE "Prediction" ADD CONSTRAINT "Prediction_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "Sport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wager" ADD CONSTRAINT "Wager_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wager" ADD CONSTRAINT "Wager_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "Sport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_wagerId_fkey" FOREIGN KEY ("wagerId") REFERENCES "Wager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatOutcome" ADD CONSTRAINT "StatOutcome_predictionId_fkey" FOREIGN KEY ("predictionId") REFERENCES "Prediction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatOutcome" ADD CONSTRAINT "StatOutcome_wagerId_fkey" FOREIGN KEY ("wagerId") REFERENCES "Wager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
