-- CreateTable
CREATE TABLE "answers" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "answer" INTEGER[],

    CONSTRAINT "answers_pkey" PRIMARY KEY ("id")
);
