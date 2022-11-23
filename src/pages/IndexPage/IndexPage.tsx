import {FC, useEffect} from 'react';
import './IndexPage.scss';
import {Link} from "react-router-dom";
import logo from './diary.webp'
import {useFarmStore} from "../../Models/useFarmStore";
import TopBar from "../../Components/TopBar/TopBar";

export interface IndexPageProps {
}

const IndexPage: FC<IndexPageProps> = () => {
    const farmName = useFarmStore(state => state.name)
    const farmAddress = useFarmStore(state => state.address)
    const setFarmAddress = useFarmStore(state => state.setFarmAddress)
    const setFarmName = useFarmStore(state => state.setFarmName)
    useEffect(() => {
        setFarmName({target: {value: 'Kauser Model Agriculture Farm'}})
        setFarmAddress({target: {value: 'Jhambra Sharqi, Mianwali'}})
    })
    return (
        <div className='IndexPage'>
            <div className='TopBarWrapper'>
                <TopBar/>
            </div>
            <header>
                Kesan Diary
                <img src={logo}/>
            </header>
            <div className='ProfessionSelection'>
                <Link to="/registration?role=expert">
                    <div className='ProfessionCard'>Agriculture Expert</div>
                </Link>
                <Link to="/registration?role=farmer">
                    <div className='ProfessionCard'>Farmer</div>
                </Link>
            </div>
            <footer>
                <div className='ProjectDescription'>
                    <span>Developed by <strong>Adnan Ahmed Khan</strong></span>
                    <span>Arid # <strong>2018-ARID-0957</strong></span>
                    <span>Under Supervision of <strong>Mrs. Tayyaba</strong></span>
                    <span> Submitted to <strong>Barani Institute of Information Technology (BIIT)
                            affliated with PMAS Arid Agriculture University,
                            Rawalpindi Pakistan</strong>
                    </span>
                </div>
                <div className='Copyright'> &copy; Copyright Reserved 2022</div>
            </footer>
        </div>);
}

export default IndexPage;