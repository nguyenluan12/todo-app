import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET: Lấy tất cả category
export async function GET() {
  const categories = await prisma.category.findMany({
    include: { tasks: true },
    orderBy: { id: "asc" },
  });
  return NextResponse.json(categories);
}

// POST: Tạo category mới
export async function POST(req: Request) {
  const { name, color } = await req.json();
  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  const newCategory = await prisma.category.create({
    data: { name, color },
  });

  return NextResponse.json(newCategory);
}
