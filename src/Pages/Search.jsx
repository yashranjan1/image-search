import { useSearchParams } from "react-router-dom"
import { Result } from "../Components/Result";
import { useEffect, useState } from "react";
import axios from "axios";
import { SearchComponent } from "../Components/Search";
import { Link } from "react-router-dom";

export const SearchPage = () => {

    const [ searchParams ] = useSearchParams();
    const imageQuery = searchParams.get('query');
    const page = parseInt(searchParams.get('page'));

    const [ image, setImage ] = useState()

    const getImages = (query) => {
        axios.get('https://api.unsplash.com/search/photos/', {
            params: {
                query: query,
                client_id: import.meta.env.VITE_ACCESS_KEY,
                page: page,
            }
        })
        .then(res => {
            setImage(res.data)
        })
    }

    useEffect(()=>{
        getImages(imageQuery)
    },[])


    return (
        <div className="flex flex-col gap-8 p-5">
            <SearchComponent  orientation={'row'}/>

            <div className="bg-[#11182722] rounded-lg backdrop-blur-md flex flex-col gap-5 pb-8">

                <h1 className="text-2xl font-bold p-3 text-white">Search Results For { imageQuery }</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-5 pt-0 overflow-clip">
                { image &&
                    image.results.map(res => {
                        return (
                            <Result prop={res} />
                        )
                    })
                }
                </div>
                <div className="flex flex-row justify-center gap-10">
                    <Link to={`/search?query=${imageQuery.replace(' ', '+')}&page=${(page-1).toString()}`} className="text-white font-bold flex gap-1">
                        <span class="material-symbols-outlined text-sm pt-[2px]">arrow_back_ios</span>
                        <h1>
                        Back
                        </h1>
                    </Link>
                    
                    <Link to={`/search?query=${imageQuery.replace(' ', '+')}&page=${(page+1).toString()}`} className="text-white font-bold flex gap-1">
                        <h1>
                        Next
                        </h1>
                        <span class="material-symbols-outlined text-sm pt-[2px]">arrow_forward_ios</span>
                    </Link>

                </div>
            </div>
        </div>
    )
}