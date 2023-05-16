import { Link } from "react-router-dom";

export default function MenuItem ({ title, path }) {
    return(
        <li className="font-mono text-lg font-bold ml-8 py-2 cursor-pointer hover:text-yellow duration-200">
            <Link to={`/${path}`}>{title}</Link>
        </li>
    )
}