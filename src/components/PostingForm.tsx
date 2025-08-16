'use client'
import { createTask } from "@/app/actions/auth";
import { useActionState, useState } from "react";

type categoriesType = {
    id: number;
    name: string;
    color: string;
    createdAt: string;
    tasks: dataType[];
  };
  type dataType = {
    id: number;
    title: string;
    note: string;
    start: string;
    end: string;
    categoryId: number;
  };
export default function PostingForm({categories}: {categories: categoriesType[]}) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        categoryId: categories[0]?.id || 0,
        startDay: '',
        startTime: '',
        endDay: '',
        endTime: ''
    });
    const [state, action, pending] = useActionState(createTask,undefined);
    return (
        <div className="flex items-center justify-center w-full h-full">
      <form action={action} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        


        <div className="flex flex-col justify-between py-1">
          <label className="font-semibold" htmlFor="name">Title</label>
          <input
            className="border-2 rounded-lg p-2"
            id="title"
            name="title"
            placeholder="what is your task?"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          {state?.errors?.title && <p className="text-red-500 text-xs">{state.errors.title}</p>}
       
        </div>

        <div className="flex flex-col justify-between py-1">
          <label className="font-semibold" htmlFor="email">Description</label>
          <input
            className="border-2 rounded-lg p-2"
            id="description"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <div className="flex flex-col justify-between py-1">
          <label className="font-semibold" htmlFor="name">Category</label>
          <select
            className="border-2 rounded-lg p-2"
            id="categoryId"
            name="categoryId"
            value={formData.categoryId}
            onChange={(e) => setFormData({ ...formData, categoryId: parseInt(e.target.value) })}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
            {state?.errors?.categoryId && <p className="text-red-500 text-xs">{state.errors.categoryId}</p>}
       
        </div>
          
            </div>
        <div className="flex flex-col justify-between py-1">
          <label className="font-semibold" htmlFor="date">Start Day</label>
          <input
            className="border-2 rounded-lg p-2"
            id="startDay"
            name="startDay"
            type="date"
            placeholder="Start Day"
            value={formData.startDay}
            onChange={(e) => setFormData({ ...formData, startDay: e.target.value })}
          />
            {state?.errors?.startDay && <p className="text-red-500 text-xs">{state.errors.startDay}</p>}
          </div>
        <div className="flex flex-col justify-between py-1">
          <label className="font-semibold" htmlFor="date">Start Time</label>
          <input
            className="border-2 rounded-lg p-2"
            id="startTime"
            name="startTime"
            type="time"
            placeholder="Start Time"
            value={formData.startTime}
            onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
          />
          {state?.errors?.startTime && <p className="text-red-500 text-xs">{state.errors.startTime}</p>}
        </div>
        
        <div className="flex flex-col justify-between py-1">
          <label className="font-semibold" htmlFor="date">End Day</label>
          <input
            className="border-2 rounded-lg p-2"
            id="endDay"
            name="endDay"
            type="date"
            placeholder="End Day"
            value={formData.endDay}
            onChange={(e) => setFormData({ ...formData, endDay: e.target.value })}
          />
           {state?.errors?.endDay && <p className="text-red-500 text-xs">{state.errors.endDay}</p>}
          
        </div>
          <div className="flex flex-col justify-between py-1">
          <label className="font-semibold" htmlFor="date">End Time</label>
          <input
            className="border-2 rounded-lg p-2"
            id="endTime"
            name="endTime"
            type="time"
            placeholder="Time end task"
            value={formData.endTime}
            onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
          />
          {state?.errors?.endTime && <p className="text-red-500 text-xs">{state.errors.endTime}</p>}
        </div>
        
        <button
          type="submit"
          className="w-full p-1 my-2 border-2 border-blue-500 rounded-xl bg-blue-500 text-white font-semibold text-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          aria-disabled={pending}
        >
          {pending ? 'Submitting...' : 'Submit'}
          
        </button>
      
      </form>
      

    </div>
    )
}