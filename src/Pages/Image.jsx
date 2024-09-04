import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { SearchComponent } from "../Components/Search"
import axios from "axios"

export const ImagePage = () => { 
    const { id } = useParams()

    const [ data, setData ] = useState()

    const getImageData = (id) => {
        axios.get(`https://api.unsplash.com/photos/${id}`, {
            params: {
                client_id: import.meta.env.VITE_ACCESS_KEY
            }
        })
        .then(res => {
            setData(res.data)
        })
    }

    useEffect(()=>{
        getImageData(id)
    },[])


    return (
        <div className="flex flex-col gap-8 p-5">
            <SearchComponent  orientation={'row'}/>

            { data && 
            
                <div className="bg-[#11182722] rounded-lg backdrop-blur-md flex gap-5 p-8">
                    <img src={data.urls.full} className="rounded-lg h-[40rem] w-full object-cover flex-1"/>
                    <div className="">
                        <h1 className="text-white font-medium w-96"><b>Clicked by:</b> {data.user.name}</h1>
                        <h1 className="text-white font-medium w-96"><b>Description:</b> {data.description}</h1>
                        <h1 className="text-white font-medium w-96">
                            <a href={data.links.html} className="flex hover:text-gray-500">
                                <h1>Link to photo</h1>
                                <span class="material-symbols-outlined text-sm pt-1">arrow_forward</span>
                            </a>
                        </h1>
                    </div>
                </div>
            }
        </div>
    )
}