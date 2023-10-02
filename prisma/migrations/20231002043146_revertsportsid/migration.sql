/*
  Warnings:

  - You are about to drop the column `locked` on the `Prediction` table. All the data in the column will be lost.
  - You are about to drop the column `predictionOn` on the `Prediction` table. All the data in the column will be lost.
  - You are about to drop the column `sportId` on the `Prediction` table. All the data in the column will be lost.
  - You are about to drop the `Sport` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StatOutcome` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Prediction" DROP CONSTRAINT "Prediction_sportId_fkey";

-- DropForeignKey
ALTER TABLE "StatOutcome" DROP CONSTRAINT "StatOutcome_predictionId_fkey";

-- DropForeignKey
ALTER TABLE "StatOutcome" DROP CONSTRAINT "StatOutcome_wagerId_fkey";

-- DropForeignKey
ALTER TABLE "Wager" DROP CONSTRAINT "Wager_sportId_fkey";

-- AlterTable
ALTER TABLE "Prediction" DROP COLUMN "locked",
DROP COLUMN "predictionOn",
DROP COLUMN "sportId";

-- DropTable
DROP TABLE "Sport";

-- DropTable
DROP TABLE "StatOutcome";
