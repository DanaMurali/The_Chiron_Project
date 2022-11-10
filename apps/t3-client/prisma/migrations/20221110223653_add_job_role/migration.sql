/*
  Warnings:

  - You are about to drop the column `jobRole` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Example` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Relationships` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Requests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Relationships` DROP FOREIGN KEY `Relationships_menteeId_fkey`;

-- DropForeignKey
ALTER TABLE `Relationships` DROP FOREIGN KEY `Relationships_mentorId_fkey`;

-- DropForeignKey
ALTER TABLE `Requests` DROP FOREIGN KEY `Requests_menteeId_fkey`;

-- DropForeignKey
ALTER TABLE `Requests` DROP FOREIGN KEY `Requests_mentorId_fkey`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `jobRole`,
    ADD COLUMN `jobRoleId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Example`;

-- DropTable
DROP TABLE `Relationships`;

-- DropTable
DROP TABLE `Requests`;

-- CreateTable
CREATE TABLE `JobRole` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Relationship` (
    `id` VARCHAR(191) NOT NULL,
    `mentorId` VARCHAR(191) NULL,
    `menteeId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Request` (
    `id` VARCHAR(191) NOT NULL,
    `mentorId` VARCHAR(191) NULL,
    `menteeId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_jobRoleId_fkey` FOREIGN KEY (`jobRoleId`) REFERENCES `JobRole`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relationship` ADD CONSTRAINT `Relationship_mentorId_fkey` FOREIGN KEY (`mentorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relationship` ADD CONSTRAINT `Relationship_menteeId_fkey` FOREIGN KEY (`menteeId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_mentorId_fkey` FOREIGN KEY (`mentorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_menteeId_fkey` FOREIGN KEY (`menteeId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
