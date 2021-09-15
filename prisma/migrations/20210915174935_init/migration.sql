/*
  Warnings:

  - Added the required column `sub_branch_name` to the `item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "item" ADD COLUMN     "sub_branch_name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "sub_branch" (
    "name" TEXT NOT NULL,
    "branch_name" TEXT NOT NULL,

    CONSTRAINT "sub_branch_pkey" PRIMARY KEY ("name")
);

-- CreateIndex
CREATE UNIQUE INDEX "sub_branch_name_key" ON "sub_branch"("name");

-- AddForeignKey
ALTER TABLE "sub_branch" ADD CONSTRAINT "sub_branch_branch_name_fkey" FOREIGN KEY ("branch_name") REFERENCES "branch"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_branch_name_fkey" FOREIGN KEY ("branch_name") REFERENCES "sub_branch"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
