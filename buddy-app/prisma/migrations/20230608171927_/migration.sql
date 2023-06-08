/*
  Warnings:

  - You are about to drop the column `buddyDescription` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `budget` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `looking` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `matched` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `ownDescription` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `radius` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `roomType` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "buddyDescription",
DROP COLUMN "budget",
DROP COLUMN "createdAt",
DROP COLUMN "date",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "location",
DROP COLUMN "looking",
DROP COLUMN "matched",
DROP COLUMN "ownDescription",
DROP COLUMN "radius",
DROP COLUMN "roomType",
DROP COLUMN "tags",
DROP COLUMN "updateAt";
