-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "about" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "options" TEXT[],
    "plan" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
