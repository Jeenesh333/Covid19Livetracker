import React, {useEffect, useState} from 'react'

const Covid19 = () => {
    const [display_data,setData] = useState([]);

    const extract_data = async ()=>{
        try {
            const data = await fetch('https://api.rootnet.in/covid19-in/stats/latest.json');
            const data_in_format = await data.json();
            console.log(data_in_format.lastRefreshed);
            setData(data_in_format.data.summary);
        } catch (error) {
            console.log("Opps!");
        }
    }

    useEffect(() => {
        extract_data();
    }, [])
    return (
        <>
        <section>
        <div className = "heading">
        <h1 className= "live">🔴Live🔴</h1>
        <h2 className = "covid">Covid19 LiveTracker</h2>
        </div>
        
        <ul className="no_bullets">
        <li className="card-container">
            <div className="card cards">
                <div className="card-inner">
                    <h2>COUNTRY</h2>
                    <p className="card_detail">
                    INDIA
                    </p>
                    <div className="card_content">
                    </div>
                </div>
            </div>
        </li>
        <li className="card-container">
            <div className="card cards" >
                <div className="card-inner">
                    <h2>TOTAL CASES</h2>
                    <p className="card_detail">
                    </p>
                    <div className="card_content" >
                        {display_data.total}
                    </div>
                </div>
            </div>
        </li>
        <li className="card-container">
            <div className="card cards">
                <div className="card-inner">
                    <h2>RECOVERED CASES</h2>
                    <p className="card_detail">
                    </p>
                    <div className="card_content">
                        {display_data.discharged}
                    </div>
                </div>
            </div>
        </li>
        <li className="card-container">
            <div className="card cards">
                <div className="card-inner">
                    <h2>INDIAN CASES</h2>
                    <p className="card_detail">
                    </p>
                    <div className="card_content">
                        {display_data.confirmedCasesIndian}
                    </div>
                </div>
            </div>
        </li>
        <li className="card-container">
            <div className="card cards">
                <div className="card-inner">
                    <h2>FOREIGN CASES</h2>
                    <p className="card_detail">
                    </p>
                    <div className="card_content">
                        {display_data.confirmedCasesForeign}
                    </div>
                </div>
            </div>
        </li>
        <li className="card-container">
            <div className="card cards">
                <div className="card-inner">
                    <h2>TOTAL DEATHS</h2>
                    <p className="card_detail">
                    </p>
                    <div className="card_content">
                        {display_data.deaths}
                    </div>
                </div>
            </div>
        </li>
        
        </ul>
        </section>
        </>
    )
}
export default Covid19;
