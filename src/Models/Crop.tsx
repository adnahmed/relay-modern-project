export interface Crop {
    id: string
    name: string
    landOccupied?: number
}

export interface Crops {
    crops: Crop[]
}