import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditServices() {
  const[name , setName] = useState("")
    const[description , setDescription] = useState("")
    const[price , setPrice] = useState("")
    const {id} =useParams()
    const navigate = useNavigate()
    
    useEffect(()=>{
      axios.get(`http://localhost:3001/services/getPerticulerServices/${id}`)
      .then(res=>{
        setName(res.data.name)
        setDescription(res.data.description)
        setPrice(res.data.price)
      })
    },[])

      const handleUpdateServices=async(e)=>{
        e.preventDefault()
        await axios.put(`http://localhost:3001/services/updateServices/${id}` , {name , description , price})
        .then(res=>{
          console.log(res)
          alert("update your services")
          navigate("/")
        }).catch(err=>{
          console.log(err);         
        })
      }
  return (
    <div className="bg-gray-800 h-screen text-white">
      <div className="flex justify-around py-20">
      <div className="py-16">
        <div className="flex flex-col justify-center border-2 rounded-xl p-6">
          <div className="text-2xl font-semibold text-blue-300 flex justify-center ">
            <h1>Edit Health Services</h1>
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
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="flex justify-around items-center py-4 gap-2">
                <label className="text-lg font-semibold w-28">Price :- </label>
                <input
                  type="text"
                  placeholder="enter price..!"
                  className="rounded px-4 py-1 text-black font-semibold"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div className="flex justify-center items-center pt-2">
                <button
                  className="bg-blue-600 px-4 py-1 rounded"
                  onClick={handleUpdateServices}
                >
                  Update Services
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default EditServices;
