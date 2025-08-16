import {z} from "zod";


export type FormState = 
    | {
        title: string
        description?: string
        categoryId?: number
        startDay?: string
        startTime?: string
        endDay?: string
        endTime?: string
        errors?: {
          title?: string[]
          description?: string[]
          startDay?: string[]
          startTime?: string[]
          endDay?: string[]
          endTime?: string[]
        }
        message?: string
    }
    | undefined
    

export const TodoSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().optional(),
    categoryId: z.number().min(1, "Category is required"),
    startDay: z.string().min(1, "Start day is required"),
    startTime: z.string().min(1, "Start time is required"),
    endDay: z.string().min(1, "End day is required"),
    endTime: z.string().min(1, "End time is required"),
    });