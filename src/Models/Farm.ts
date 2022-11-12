import create from "zustand";
import {persist} from 'zustand/middleware'

export interface Farm {
    name: string,
    address: string,
    logo: string,
    setFarmName: (string) => void,
    setFarmAddress: (string) => void
    setFarmLogo: (string) => void
}

export const useFarmStore = create<Farm>()(persist((set) => ({
        name: '',
        address: '',
        logo: '',
        setFarmName: (event) => set((state) => ({name: event.target.value, address: state.address})),
        setFarmAddress: (event) => set((state) => ({name: state.name, address: event.target.value})),
        setFarmLogo: (path) => set(state => ({...state, logo: path}))
    }),
))
