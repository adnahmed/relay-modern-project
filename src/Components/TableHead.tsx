import CommonCostTableHeader from "../pages/CommonCostTableHeader/CommonCostTableHeader";
import React from "react";

export default function TableHead(props) {
    return (<>
        <CommonCostTableHeader />
        {props.children}
    </>)
}
