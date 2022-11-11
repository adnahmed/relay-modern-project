import create from "zustand";
import {persist} from "zustand/middleware";
import {Crops} from "./Crop";

export default create<Crops>()(persist((set) => ({
    crops: [],
})))