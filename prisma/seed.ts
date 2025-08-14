import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      { name: "Work", color: "#f39c12" },
      { name: "Shopping", color: "#27ae60" },
      { name: "Travel", color: "#2980b9" },
    ],
  });
  console.log("✅ Seeded categories!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
