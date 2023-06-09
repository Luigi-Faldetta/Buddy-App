/*
  Warnings:

  - Added the required column `buddyDescription` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `budget` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `looking` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `matched` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownDescription` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `radius` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomType` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "buddyDescription" TEXT NOT NULL,
ADD COLUMN     "budget" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "looking" BOOLEAN NOT NULL,
ADD COLUMN     "matched" BOOLEAN NOT NULL,
ADD COLUMN     "ownDescription" TEXT NOT NULL,
ADD COLUMN     "radius" INTEGER NOT NULL,
ADD COLUMN     "roomType" TEXT NOT NULL,
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;
