import {useState, useEffect} from 'react';
import './App.css';
import create from 'zustand';
interface User {
    name: string
    id: string // UUID type
}
const useUserStore = create<User>((set) => ({
    name: "", 
    id: "",
    fetch: async () => {    
       const response = await fetch(process.env.REACT_APP_SERVER + "/user/");
       set({ ...await response.json() })
    },
    isLoggedIn: true,
    login: () => set((state) => ({ ...state, isLoggedIn: true })),
    logout: () => set((state) => ({...state, isLoggedIn: false }))
}));
interface Farm {
    address: string
    name: string
}

function App() {
        const fetchUser = useUserStore((state) => state.fetch);
        useEffect(() => {
            fetchUser();
        })

        return (
        <div className="App">
            <div className="Banner">
                <button className="BannerName"> Farms</button>
                <div className="BannerGap"></div>
                <img className="BannerImage" src={process.env.REACT_APP_SERVER! + "/farm/1/flag"} alt="flag"/>
            </div>
            <MainBanner />
            <div className="AppName">
                Kesan Diary
            </div>

        </div>
    );
}


function MainBanner() {
    var [farm, setFarm] = useState<Farm>();
    useEffect(() => {
        fetch("http://localhost:3000/farm/")
            .then(res => res.json())
            .then(res => setFarm(res))
    }, []);
    return (<><div className="MainName">{farm?.name}</div>
    <div className="BannerAddress">{farm?.address}</div></>);
}

export default App;
