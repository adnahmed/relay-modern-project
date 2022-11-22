import {FC, useEffect} from 'react';
import './IndexPage.scss';
import {Link} from "react-router-dom";
import logo from './diary.webp'
import {useFarmStore} from "../../Models/useFarmStore";
import TopBar from "../../Components/TopBar/TopBar";

export interface IndexPageProps {}

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
        <div className="IndexPage">
            <TopBar/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <form style={{flex: '1'}}>
                    <label style={{borderRadius: '1em', marginBottom: '1em'}}>
                        <p>Farm Name</p>
                        <input value={farmName} style={{
                            width: '100%',
                            background: 'lightseagreen',
                            color: 'white',
                            fontSize: 'xx-large'
                        }}
                               placeholder="Please enter your Farm Name:"
                               onChange={setFarmName}></input>
                    </label>
                    <label style={{borderRadius: '1em'}}>
                        Farm Address
                        <input value={farmAddress}
                               style={{width: '100%', background: 'lightseagreen', color: 'white'}}
                               placeholder="Please enter your Farm Address:"
                               onChange={setFarmAddress}></input>
                    </label>
                    <br/>
                    <button style={{color: 'blue', borderWidth: '2px', borderRadius: '1em', padding: '15px'}}><Link
                        to={"/authentication"}>Go Next</Link></button>
                </form>
            </div>
            <h1 style={{textAlign: 'center', width: '100%', fontWeight: 'bold', fontSize: "2em"}}>KESAN DIARY</h1>
            <div style={{display: 'flex'}}/>
            <img src={logo} style={{height: '50%', width: '50%', float: 'left'}} alt="KMAF"/>
            <div style={{marginTop: "7em", clear: 'left'}}>
                <p>Developed by <b>Adnan Ahmed Khan</b></p>
                <p>Arid # 2018-ARID-0957</p>
                <p>under supervision of <b>Mrs. Tayyaba</b></p>
                <p> Submitted to Barani Institute of Information Technology (BIIT) affliated with PMAS Arid Agriculture
                    University, Rawalpindi Pakistan</p>
                <div style={{marginRight: '-1em'}}> &copy; Copyright Reserved 2022</div>
            </div>
        </div>)
}

export default IndexPage;