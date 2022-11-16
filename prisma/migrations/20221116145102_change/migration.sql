/*
  Warnings:

  - You are about to drop the `Genre` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_bookmark_genres` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_bookmark_genres" DROP CONSTRAINT "_bookmark_genres_A_fkey";

-- DropForeignKey
ALTER TABLE "_bookmark_genres" DROP CONSTRAINT "_bookmark_genres_B_fkey";

-- DropTable
DROP TABLE "Genre";

-- DropTable
DROP TABLE "_bookmark_genres";

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_bookmark_categories" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_bookmark_categories_AB_unique" ON "_bookmark_categories"("A", "B");

-- CreateIndex
CREATE INDEX "_bookmark_categories_B_index" ON "_bookmark_categories"("B");

-- AddForeignKey
ALTER TABLE "_bookmark_categories" ADD CONSTRAINT "_bookmark_categories_A_fkey" FOREIGN KEY ("A") REFERENCES "Bookmark"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bookmark_categories" ADD CONSTRAINT "_bookmark_categories_B_fkey" FOREIGN KEY ("B") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
