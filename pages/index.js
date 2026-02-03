import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([])
  async function btnHandller() {
    const res = await fetch('api/users')
    const data =await res.json()
    setUsers(data)
    console.log(data);


  }
  return (
    <>
      <button onClick={btnHandller}>clickme</button>
      <ul>
        {users.map(user => { return (<li>{user.name}</li>) })}
      </ul>
    </>
  );
}
