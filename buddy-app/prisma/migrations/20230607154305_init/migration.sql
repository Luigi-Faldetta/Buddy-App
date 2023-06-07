-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "ownDescription" TEXT NOT NULL,
    "buddyDescription" TEXT NOT NULL,
    "budget" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "roomType" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "radius" INTEGER NOT NULL,
    "tags" TEXT[],
    "looking" BOOLEAN NOT NULL,
    "matched" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
