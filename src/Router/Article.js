import {Outlet} from "react-router-dom";

export default function Article() {
    return (
        <div>
            <p>article</p>
            <Outlet/>
        </div>
    )
}