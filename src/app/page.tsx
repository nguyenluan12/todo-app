'use client';
import React, { useEffect } from "react";
import TodoItem from "@/components/TodoItem";
import { useState } from "react";
// import { todo } from "node:test";
import MainContent from "@/components/MainContent";
import TodoList from "@/components/TodoList";
import Name from "@/components/Author";
import TodoMenu from "@/components/TodoMenu";
import TimeBlock from "@/components/TimeBlock";
import PostingForm from "@/components/PostingForm";


type topicType = {
  id: number;
  name: string;
  color: string;
  createdAt: string;
}[]
type dataType = {
  id: number;
  title: string;
  note: string;
  start: string;
  end: string;
  categoryId: number;
};
type categoriesType = {
  id: number;
  name: string;
  color: string;
  createdAt: string;
  tasks: dataType[];
};
export async function getData(){
  const data= await fetch("/api/categories")
  .then((res) => res.json())
  .catch((err) => console.error("Error fetching data:", err));
  console.log("Data fetched:", data);
 return data;
}
// export async function addNewTask(title: string, done: boolean, id: number) {
//   await fetch("/api/task", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       title: "Viết báo cáo tuần",
//       note: "Gửi cho sếp vào thứ 6",
//       start: "2025-08-10T09:00:00Z",
//       categoryId: 1 // id của Work
//     }),
//   });
//   console.log("Task added:", { title, done, id });
// }
export default function Home() {
  

  const [id, setId] = useState(0);
  const [topic,setTopic] = useState<topicType>();
  const [data, setData] = useState<dataType[]>([]);
  const [categories, setCategories] = useState<categoriesType[]>([]);
  const [reload, setReload] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    getData().then((fetchedData) => {
      setCategories(fetchedData);
    });
  }, []);
  
  useEffect(() => {
    if (categories[id] && categories[id].tasks) {
      setData(categories[id].tasks);
      setTopic(categories.map((category) => ({
        id: category.id,
        name: category.name,
        color: category.color,
        createdAt: category.createdAt,
      })));
    } else {
      setData([]);
    }
  }, [categories, id]);
  useEffect(() => {
    if (reload) {
      getData().then((fetchedData) => {
        setCategories(fetchedData);
        setReload(false);
      });
    }
  }, [reload]);
  useEffect(() => {
    setIsPosting(false);
    setReload(!reload);
  },[id])
  return (
    <main className="size-full min-h-screen border-red-100 flex items-center ">
      <TodoMenu topic={topic || []} setId = {setId}/>
      {isPosting ? (
        <PostingForm categories={categories} />
      ) : categories.length !== 0 ? (
        <MainContent data={data} setReload={setReload} />
      ) : (
        <p>Loading...</p>
      )}      {/* <TodoList setTodos={setTodos} todos={todos} title={title} setTitle={setTitle} value={value} setValue={setValue} done={done} setDone={setDone} id={id} setId={setId}/> */}
      {/* <MainContent /> */}
      <TimeBlock setIsPosting = {setIsPosting} />
      <Name />
    </main>
  );
}
