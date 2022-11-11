import React from "react";
import {Outlet, useParams} from "react-router-dom";
import {CroppingYear} from "./CroppingYear";

export interface Crop {
    name: string
    image: URL
    croppingYearStart: CroppingYear
    croppingYearEnd: CroppingYear
}

export interface Crops {
    crops: Crop[]
}