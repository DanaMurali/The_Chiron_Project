/*
  Warnings:

  - You are about to drop the column `menteeId` on the `Request` table. All the data in the column will be lost.
  - You are about to drop the column `mentorId` on the `Request` table. All the data in the column will be lost.
  - Made the column `mentorId` on table `Relationship` required. This step will fail if there are existing NULL values in that column.
  - Made the column `menteeId` on table `Relationship` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `requesteeId` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requesterId` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Relationship` DROP FOREIGN KEY `Relationship_menteeId_fkey`;

-- DropForeignKey
ALTER TABLE `Relationship` DROP FOREIGN KEY `Relationship_mentorId_fkey`;

-- DropForeignKey
ALTER TABLE `Request` DROP FOREIGN KEY `Request_menteeId_fkey`;

-- DropForeignKey
ALTER TABLE `Request` DROP FOREIGN KEY `Request_mentorId_fkey`;

-- AlterTable
ALTER TABLE `Relationship` MODIFY `mentorId` VARCHAR(191) NOT NULL,
    MODIFY `menteeId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Request` DROP COLUMN `menteeId`,
    DROP COLUMN `mentorId`,
    ADD COLUMN `requesteeId` VARCHAR(191) NOT NULL,
    ADD COLUMN `requesterId` VARCHAR(191) NOT NULL,
    ADD COLUMN `type` ENUM('MENTOR', 'MENTEE') NOT NULL;

-- AddForeignKey
ALTER TABLE `Relationship` ADD CONSTRAINT `Relationship_mentorId_fkey` FOREIGN KEY (`mentorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relationship` ADD CONSTRAINT `Relationship_menteeId_fkey` FOREIGN KEY (`menteeId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_requesterId_fkey` FOREIGN KEY (`requesterId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_requesteeId_fkey` FOREIGN KEY (`requesteeId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
