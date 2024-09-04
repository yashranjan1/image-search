import { Link } from "react-router-dom"

export const SearchComponent = ({ orientation }) => {
    return (
        <>
            <form className={`flex flex-${orientation} gap-5 w-full`} action="/search">
                <Link to='/'>
                    <h1 className="sm:text-5xl text-2xl text-center font-semibold text-white">Image Search</h1>
                </Link>
                <div className="flex flex-1 flex-row sm:w-96 w-11/12 m-auto">
                    <input type="text" placeholder="Search for an image ..." 
                        className="text-white text-start border-2 border-e-0 border-white w-full px-3 rounded-s-3xl outline-none bg-transparent
                        placeholder:text-white" name='query'/>
                    <input type="hidden" name='page' value='1'/>
                    <button type="submit" className="border-2 border-s-0 border-white pl-5 rounded-e-3xl text-white">
                        <span className="material-symbols-outlined pt-1 pr-2">
                            search
                        </span>
                    </button>
                </div>
            </form>
        </>
    )
}