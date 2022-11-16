import { PrismaClient } from "@prisma/client";

import { genres } from "../src/server/db/seed/genre";

const prisma = new PrismaClient();

async function main() {
  await prisma.genre.createMany({
    data: genres,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
