"use client"
import { useState } from "react";


export default function Home() {
  const [name,setName]=useState("Next.js-14")
  const [age,setAge]=useState(2023)
  const increment=()=>{
    setName("Next.js-15")
    setAge(2024)
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 onClick={increment}>{name}</h1>
      <p >{age}</p>
    </div>
  );
}
