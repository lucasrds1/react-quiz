"use client"

import { Card } from "@/components/Card";
import { Item } from "../app/types/Item";
import react, { FormEvent, useState } from "react";
const Page = () =>{
  const [itemInput, setItemInput] = useState('');
  const [list, setList] = useState<Item[]>([
    {id: 1, label: 'Acordar', checked: false},
    {id: 2, label: 'Tomar Café', checked: true}
  ]);

  const clickAdd = ()=>{
    if(itemInput !== ''){
      setList([
        ...list, //repito o array e adiciono
        {id: list.length+1, label: itemInput, checked: false}
      ])
    }
  }
  const clickDelete = (id:number)=>{
    setList(
      list.filter(item=>item.id !== id) //vai remover o index(id)
      )
  }
  const clickCheck = (id:number)=>{
    let newList = [...list];
    console.log(id);
    for(let i in newList){
      if(newList[i].id === id){
        newList[i].checked = !newList[i].checked //quando clicada, vai inverter o valor dela
      }
    }
    setList(newList);
  }

  return (
    <div className="min-h-screen p-5 bg-black text-white mx-auto">
    <p className="text-xl font-bold">Lista de Tarefas</p>
    Adicionar:
    <input
    type="text"
    className="border-2 text-black"
    value={itemInput}
    onChange={e=>setItemInput(e.target.value)}
    />
    <button className="ml-2 bg-white text-black p-2" onClick={clickAdd}>Adicionar</button>
    <br />
    <ul className="list-disc p-3">
      {list.map(item =>(
        <li key={item.id}>
          <input onClick={()=>clickCheck(item.id)} type="checkbox" className="w-3 h-3 mr-3" checked={item.checked}/>
          {item.label}  
        <button onClick={()=>clickDelete(item.id)} className="hover:underline">[ deletar ]</button></li>
      ))}
    </ul>
    </div>
  );
}
export default Page;