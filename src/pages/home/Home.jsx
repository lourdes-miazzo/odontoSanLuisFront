import "./home.css"
import { useState } from "react"
import { useEffect } from "react"
import RegisterZone from "../../components/registerZone/RegisterZone.jsx"
import Footer from "../../components/footer/Footer.jsx"
import MapCard from "../../components/mapCard/MapCard"
import { twoNewsRequest } from "../../api/auth"



const Home = ()=>{
    
    const [data, setData]= useState([])
    
    useEffect(() => {
        const fetchData= async()=>{
            try{
                const db= await twoNewsRequest()
                const dbArray= db.payload
                setData(dbArray)
            }
            catch(e){
                console.log(e)
            }
        }
       fetchData()
    }, [])
    

    return(
        <>
            <div className="backColor4">
                <div className="centerPiece">
                    <div className="aroundVideo">
                        <iframe className="video" src="https://www.youtube.com/embed/r7aJA575ni0" title="SOMOS EL CÍRCULO ARGENTINO DE ODONTOLOGÍA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <div className="row-card">
                        <MapCard data={data}/>
                        </div>
                    </div>
                    <div className="back-under">
                        <h4 className="name">Círculo Odontológico de San Luis</h4>
                    </div>
                </div>
                <div className="locationReg1">
                    <RegisterZone />
                </div>
            </div>
        <Footer/>
        </>
    )
}
export default Home