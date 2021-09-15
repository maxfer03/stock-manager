/*
  Warnings:

  - You are about to drop the `Branch` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Branch";

-- CreateTable
CREATE TABLE "branch" (
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "branch_pkey" PRIMARY KEY ("name")
);

-- CreateIndex
CREATE UNIQUE INDEX "branch_name_key" ON "branch"("name");
