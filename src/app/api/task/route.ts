import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET: Lấy tất cả task
export async function GET() {
  const tasks = await prisma.task.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(tasks);
}

// POST: Tạo task mới
export async function POST(req: Request) {
  const { title, note, start, end, categoryId } = await req.json();
  if (!title || !categoryId) {
    return NextResponse.json(
      { error: "Title and categoryId are required" },
      { status: 400 }
    );
  }

  const newTask = await prisma.task.create({
    data: {
      title,
      note,
      start: start ? new Date(start) : null,
      end: end ? new Date(end) : null,
      categoryId,
    },
  });

  return NextResponse.json(newTask);
}
