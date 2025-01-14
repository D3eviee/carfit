-- CreateTable
CREATE TABLE `Business` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `userPassword` VARCHAR(191) NOT NULL,
    `businessCategory` VARCHAR(191) NOT NULL,
    `businessName` VARCHAR(191) NOT NULL,
    `OwnerName` VARCHAR(191) NOT NULL,
    `businessNumber` VARCHAR(191) NOT NULL,
    `businessPolicyAgreements` BOOLEAN NOT NULL,
    `businessAddressStree` VARCHAR(191) NOT NULL,
    `businessAddressCity` VARCHAR(191) NOT NULL,
    `businessAddresZipcode` VARCHAR(191) NOT NULL,
    `teamSize` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Business_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
