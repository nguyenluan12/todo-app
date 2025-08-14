'use client '
import React from "react";
// import { useState, useEffect } from "react";
// export async function getData(topic:string){
//     const data= await fetch("/api/task?category=10")
//     .then((res) => res.json())
//     .catch((err) => console.error("Error fetching data:", err));
//     console.log("Data fetched:", data);
//    return data;
//   }
type dataType = {
    id: number;
    title: string;
    note: string;
    start: string;
    end: string;
    categoryId: number;
};
function deleteTask(id: number,setReload: React.Dispatch<React.SetStateAction<boolean>>) {
    fetch(`/api/task/${id}`, {
        method: "DELETE",
    })
    .then((res) => res.json())
    .then((data) => {
        console.log("Task deleted:", data);
    })
    .catch((err) => console.error("Error deleting task:", err));
    setReload((prev) => !prev);
}
export default function MainContent({data, setReload}: {data: dataType[], setReload: React.Dispatch<React.SetStateAction<boolean>>}) {
    // const [data,setData] = useState<any[]>([]);
    // useEffect(() => {
    //     getData(topic).then((fetchedData) => {
    //         setData(fetchedData);
    //     });
    // }, [topic]);
    console.log("Data in MainContent:", data);
    return (
        <div className="w-full h-full flex flex-col justify-center">
          <h1 className="text-3xl font-bold">Welcome to the Todo App </h1>
          <div >
            {
               data.length !=0 ? data.map((item:any, index:number) => (
                    <div key={index} className="p-4 border-b flex flex-row justify-between items-center">
                        <div className="p-4 border-b ">
                            <h2 className="text-xl font-semibold">{item.title}</h2>
                            <p className="text-gray-600">{item.note}</p>
                            <p className="text-sm text-gray-500">Start: {new Date(item.start).toLocaleDateString()}</p>
                        </div>
                        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => deleteTask(item.id, setReload)}>
                            Delete
                        </button>
                    </div>
                )) : <p className="text-gray-500">No tasks available</p>
            }
          </div>
        </div>
      );
}


