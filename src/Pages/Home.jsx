import { SearchComponent } from "../Components/Search"

export const HomePage = () => {
    return (
        <div className="flex flex-row min-h-screen justify-center items-center">
            <div className="py-32 bg-[#11182722] px-20 rounded-lg backdrop-blur-md">
                <SearchComponent orientation={'col'} />
            </div>
        </div>
    )
}