-- CreateTable
CREATE TABLE "Branch" (
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("name")
);

-- CreateIndex
CREATE UNIQUE INDEX "Branch_name_key" ON "Branch"("name");
