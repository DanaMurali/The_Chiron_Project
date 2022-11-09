-- AlterTable
ALTER TABLE `User` ADD COLUMN `biography` TEXT NULL,
    ADD COLUMN `career` VARCHAR(191) NULL,
    ADD COLUMN `isMentee` BOOLEAN NULL,
    ADD COLUMN `isMentor` BOOLEAN NULL,
    ADD COLUMN `jobRole` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Relationships` (
    `id` VARCHAR(191) NOT NULL,
    `mentorId` VARCHAR(191) NULL,
    `menteeId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Requests` (
    `id` VARCHAR(191) NOT NULL,
    `mentorId` VARCHAR(191) NULL,
    `menteeId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Relationships` ADD CONSTRAINT `Relationships_mentorId_fkey` FOREIGN KEY (`mentorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relationships` ADD CONSTRAINT `Relationships_menteeId_fkey` FOREIGN KEY (`menteeId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Requests` ADD CONSTRAINT `Requests_mentorId_fkey` FOREIGN KEY (`mentorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Requests` ADD CONSTRAINT `Requests_menteeId_fkey` FOREIGN KEY (`menteeId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
