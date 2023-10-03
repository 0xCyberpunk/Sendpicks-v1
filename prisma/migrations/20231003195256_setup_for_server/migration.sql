/*
  Warnings:

  - You are about to drop the column `gameTime` on the `Prediction` table. All the data in the column will be lost.
  - You are about to drop the column `weekOpponent` on the `Prediction` table. All the data in the column will be lost.
  - Added the required column `current_season` to the `Prediction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player_id` to the `Prediction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `week` to the `Prediction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Prediction" DROP COLUMN "gameTime",
DROP COLUMN "weekOpponent",
ADD COLUMN     "current_season" TEXT NOT NULL,
ADD COLUMN     "player_id" INTEGER NOT NULL,
ADD COLUMN     "week" INTEGER NOT NULL,
ALTER COLUMN "statType" DROP DEFAULT;
