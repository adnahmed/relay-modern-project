import {LandUnit} from "./LandUnit";

export default interface Land {
    type: string | 'total'
    quantity?: LandQuantity
}

interface LandQuantity {
    value: number
    unit: LandUnit
}

