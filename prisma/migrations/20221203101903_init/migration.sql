/*
  Warnings:

  - You are about to drop the column `tagId` on the `Bookmark` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bookmark" DROP CONSTRAINT "Bookmark_tagId_fkey";

-- AlterTable
ALTER TABLE "Bookmark" DROP COLUMN "tagId";

-- CreateTable
CREATE TABLE "_bookmark_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_bookmark_tags_AB_unique" ON "_bookmark_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_bookmark_tags_B_index" ON "_bookmark_tags"("B");

-- AddForeignKey
ALTER TABLE "_bookmark_tags" ADD CONSTRAINT "_bookmark_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Bookmark"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bookmark_tags" ADD CONSTRAINT "_bookmark_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
