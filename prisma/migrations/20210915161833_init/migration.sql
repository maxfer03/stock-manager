/*
  Warnings:

  - The primary key for the `branch` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "branch" DROP CONSTRAINT "branch_pkey",
ALTER COLUMN "name" SET DATA TYPE TEXT,
ADD CONSTRAINT "branch_pkey" PRIMARY KEY ("name");

-- CreateTable
CREATE TABLE "item" (
    "id" UUID NOT NULL,
    "stock" INTEGER,
    "brand" TEXT NOT NULL,
    "subbranch" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "branch_name" TEXT NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "item_id_key" ON "item"("id");

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_branch_name_fkey" FOREIGN KEY ("branch_name") REFERENCES "branch"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
