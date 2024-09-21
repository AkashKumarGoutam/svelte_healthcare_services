import React, { useEffect, useState } from "react";
import ServicesTable from "../components/All_Services_Table/ServicesTable";
import axios from "axios";

function Home() {
    const[name , setName] = useState("")
    const[description , setDescription] = useState("")
    const[price , setPrice] = useState("")

    const handleAddServices=async(e)=>{
        e.preventDefault()
        await axios.post("http://localhost:3001/services/addServices" , {name , description , price})
        .then(res=>{
            console.log(res);
            alert("add services successfull")      
        }).catch(err=>{
            console.log(err);            
        })
    }
  return (
    <div className="bg-gray-800 text-white">
      <div className="lg:flex lg:justify-around lg:py-20">
        <div className="py-16">
          <div className="flex flex-col justify-center border-2 rounded-xl p-6">
            <div className="text-2xl font-semibold text-blue-300 flex justify-center ">
              <h1>Add Health Services</h1>
            </div>
            <hr />
            <div className="py-6">
              <form>
                <div className="flex justify-around items-center py-4 gap-2">
                  <label className="text-lg font-semibold w-28">Name :- </label>
                  <input
                    type="text"
                    placeholder="enter name..!"
                    className="rounded px-4 py-1 text-black font-semibold"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>
                <div className="flex justify-around items-center py-4 gap-2">
                  <label className="text-lg font-semibold w-28">
                    Description :-{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="enter description..!"
                    className="rounded px-4 py-1 text-black font-semibold"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                  />
                </div>
                <div className="flex justify-around items-center py-4 gap-2">
                  <label className="text-lg font-semibold w-28">
                    Price :-{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="enter price..!"
                    className="rounded px-4 py-1 text-black font-semibold"
                    value={price}
                    onChange={(e)=>{setPrice(e.target.value)}}
                  />
                </div>
                <div className="flex justify-center items-center pt-2">
                  <button className="bg-blue-600 px-4 py-1 rounded" onClick={handleAddServices}>
                    Submit Services
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center text-xl font-semibold">
            <h1>All Health Services</h1>
          </div>
          <ServicesTable />
        </div>
      </div>
    </div>
  );
}

export default Home;
