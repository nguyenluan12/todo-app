import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET: Lấy task theo id
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const task = await prisma.task.findUnique({
    where: { id: Number(params.id) },
  });
  return NextResponse.json(task);
}

// PUT: Cập nhật task
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { title, note, start, end, isDone, categoryId } = await req.json();

  const updatedTask = await prisma.task.update({
    where: { id: Number(params.id) },
    data: {
      title,
      note,
      start: start ? new Date(start) : null,
      end: end ? new Date(end) : null,
      isDone,
      categoryId,
    },
  });

  return NextResponse.json(updatedTask);
}

// DELETE: Xóa task
export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.task.delete({
    where: { id: Number(params.id) },
  });
  return NextResponse.json({ message: "Task deleted" });
}
