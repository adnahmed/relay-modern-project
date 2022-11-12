import {Outlet} from "react-router-dom";

export function HarvestDate() {
    return (
        <div>
            <p>
                Harvesting Date: {new Date().toLocaleDateString()}
            </p>
            <Outlet/>
        </div>
    )
}