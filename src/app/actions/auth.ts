'use server'
import { FormState, TodoSchema } from "@/lib/definitions";
export async function createTask(state:FormState ,data: FormData) {
    const parsedData = TodoSchema.safeParse({
        title: String(data.get("title") ?? ""),
        description: String(data.get("description") ?? ""),
        categoryId: Number(data.get("categoryId") ?? 0),
        startDay: String(data.get("startDay") ?? ""),
        startTime: String(data.get("startTime") ?? ""),
        endDay: String(data.get("endDay") ?? ""),
        endTime: String(data.get("endTime") ?? ""),
    });
    console.log('FormData:',parsedData);
    if(!parsedData.success){
        console.log('Validation errors:', parsedData.error.flatten().fieldErrors);
        return {
            errors: parsedData.error.flatten().fieldErrors,
            message: "Please check your input"
        }
    }
    const { title, description, categoryId, startDay, startTime, endDay, endTime } = parsedData.data;
    // fetch("/api/task", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         title,
    //         note: description,
    //         start: startDay ? new Date(`${startDay}T${startTime}`) : null,
    //         end: endDay ? new Date(`${endDay}T${endTime}`) : null,
    //         categoryId: 1 // Assuming a default category ID, adjust as needed
    //     }),
    // })
    // .then((res) => res.json())
    // .then((data) => {
    //     console.log("Task created:", data);
    // })
    // .catch((err) => console.error("Error creating task:", err));
    // return {
    //     message: "Task created successfully",
    //     errors: undefined
    // };
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/task`, {  
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            note: description,
            start: startDay ? new Date(`${startDay}T${startTime}`) : null,
            end: endDay ? new Date(`${endDay}T${endTime}`) : null,
            categoryId: categoryId,
        }),
    });
    if (!response.ok) {
        const errorData = await response.json();
        console.error("Error creating task:", errorData);
        return {
            message: "Failed to create task",
            errors: { title: ["Failed to create task"] }
        };
    }
    const newdata = await response.json();
    console.log("Task created:", data);
    return {
        message: "Task created successfully",
        errors: undefined
    };
}