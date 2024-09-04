import { Link } from "react-router-dom"

export const Result = ({ prop }) => {
    return (
        <Link to={`/photo/${prop.id.toString()}`}>
            <img src={prop.urls.raw} className="rounded-lg h-64 w-full object-cover"/>
        </Link>
    )
}