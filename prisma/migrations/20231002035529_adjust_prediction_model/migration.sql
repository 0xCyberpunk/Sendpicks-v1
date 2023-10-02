/*
  Warnings:

  - You are about to drop the column `revenue` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Prediction" ALTER COLUMN "statType" SET DEFAULT 'passing_yards',
ALTER COLUMN "statValue" DROP NOT NULL,
ALTER COLUMN "statValue" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "weekOpponent" DROP NOT NULL,
ALTER COLUMN "gameTime" DROP NOT NULL,
ALTER COLUMN "predictionOn" SET DEFAULT true;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "revenue";
