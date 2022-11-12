import React, {FC, useEffect, useState} from 'react';
import './IndexPage.scss';
import {useFarmStore} from "../../Models/Farm";
import {Link} from "react-router-dom";

interface IndexPageProps {
}

const IndexPage: FC<IndexPageProps> = () => {
    const farmName = useFarmStore(state => state.name)
    const farmAddress = useFarmStore(state => state.address)
    const farmLogo = useFarmStore(state => state.logo)
    const setFarmAddress = useFarmStore(state => state.setFarmAddress)
    const setFarmName = useFarmStore(state => state.setFarmName)
    const setFarmLogo = useFarmStore(state => state.setFarmLogo)
    const [goNext, setGoNext] = useState(false)
    useEffect(() => {
        if (farmName !== '' && farmAddress !== '') {
            setGoNext(true)
        } else setGoNext(false)
    })
    return (
        <div className="IndexPage">
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <form>
                    <label>
                        <p>Farm Name</p>
                        <input value={farmName} required style={{width: '100%'}}
                               placeholder="Please enter your Farm Name:"
                               onChange={setFarmName}></input>
                    </label>
                    <label>
                        Farm Address
                        <input value={farmAddress} required style={{width: '100%'}}
                               placeholder="Please enter your Farm Address:"
                               onChange={setFarmAddress}></input>
                    </label>
                    <br/>
                    <button><Link to={goNext ? "/authentication" : "#"}>Go Next</Link></button>
                </form>
                <img src={farmLogo} style={{width: '100px', height: '100px'}} alt="KMAF"/>
            </div>
            <h1 style={{textAlign: 'center', width: '100%', fontWeight: 'bold', fontSize: "2em"}}>KESAN DIARY</h1>
            <div style={{marginTop: "17em"}}>
                <p>Developed by <b>Adnan Ahmed Khan</b></p>
                <p>Arid # 2018-ARID-0957</p>
                <p>under supervision of <b>Mrs. Tayyaba</b></p>
                <p > Submitted to Barani Institute of Information Technology (BIIT) affliated with PMAS Arid Agriculture University, Rawalpindi Pakistan</p>
                <div style={{marginLeft: '30em'}}> &copy; Copyright Reserved 2022</div>
            </div>
        </div>)
}

export default IndexPage;