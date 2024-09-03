export const SearchComponent = () => {
    // const 
    return (
        <>
            <form className="flex flex-col gap-5 w-full" action="/search">
                <h1 className="text-5xl text-center font-semibold">Image Search</h1>
                <div className="flex flex-1 flex-row sm:w-96 w-11/12 m-auto">
                    <input type="text" placeholder="Search for an image ..." 
                        className="text-start border-2 border-e-0 border-slate-600 w-full px-3 rounded-s-3xl outline-none" name='param'/>
                    <button type="submit" className="border-2 border-s-0 border-slate-600 pl-5 rounded-e-3xl text-slate-600">
                        <span class="material-symbols-outlined pt-1 pr-2">
                            search
                        </span>
                    </button>
                </div>
            </form>
        </>
    )
}