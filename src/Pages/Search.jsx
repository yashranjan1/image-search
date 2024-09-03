import { useSearchParams } from "react-router-dom"

export const SearchPage = () => {

    const [searchParams] = useSearchParams();
    const imageQuery = searchParams.get('param');

    return (
        <>
            Search Page { imageQuery }
        </>
    )
}