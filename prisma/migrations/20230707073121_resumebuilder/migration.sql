-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Resume" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "basicsId" INTEGER NOT NULL,
    "skillsId" INTEGER NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Resume_basicsId_fkey" FOREIGN KEY ("basicsId") REFERENCES "Basics" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Resume_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "Skills" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Resume_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Basics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "relExp" TEXT NOT NULL,
    "totalExp" TEXT NOT NULL,
    "objective" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Language" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "basicsId" INTEGER,
    CONSTRAINT "Language_basicsId_fkey" FOREIGN KEY ("basicsId") REFERENCES "Basics" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "network" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "basicsId" INTEGER,
    CONSTRAINT "Profile_basicsId_fkey" FOREIGN KEY ("basicsId") REFERENCES "Basics" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Work" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "isWorkingHere" BOOLEAN NOT NULL,
    "endDate" TEXT,
    "summary" TEXT NOT NULL,
    "years" TEXT NOT NULL,
    "resumeId" INTEGER,
    CONSTRAINT "Work_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Education" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "institution" TEXT NOT NULL,
    "studyType" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "isStudyingHere" BOOLEAN NOT NULL,
    "endDate" TEXT,
    "description" TEXT NOT NULL,
    "resumeId" INTEGER,
    CONSTRAINT "Education_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Award" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "awarder" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "resumeId" INTEGER,
    CONSTRAINT "Award_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Volunteer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "organization" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "isVolunteeringNow" BOOLEAN NOT NULL,
    "resumeId" INTEGER,
    CONSTRAINT "Volunteer_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Skills" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "LanguageSkill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "skillsId" INTEGER,
    CONSTRAINT "LanguageSkill_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "Skills" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Framework" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "skillsId" INTEGER,
    CONSTRAINT "Framework_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "Skills" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Technology" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "skillsId" INTEGER,
    CONSTRAINT "Technology_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "Skills" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tool" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "skillsId" INTEGER,
    CONSTRAINT "Tool_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "Skills" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
