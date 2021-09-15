/*
  Warnings:

  - The primary key for the `item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `item` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `item` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "item" DROP CONSTRAINT "item_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "item_pkey" PRIMARY KEY ("name");

-- CreateIndex
CREATE UNIQUE INDEX "item_name_key" ON "item"("name");
