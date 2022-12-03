/*
  Warnings:

  - You are about to drop the `_bookmark_tags` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tagId` to the `Bookmark` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_bookmark_tags" DROP CONSTRAINT "_bookmark_tags_A_fkey";

-- DropForeignKey
ALTER TABLE "_bookmark_tags" DROP CONSTRAINT "_bookmark_tags_B_fkey";

-- AlterTable
ALTER TABLE "Bookmark" ADD COLUMN     "tagId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_bookmark_tags";

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
