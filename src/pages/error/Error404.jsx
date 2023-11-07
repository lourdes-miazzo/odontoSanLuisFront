import { Link } from "react-router-dom"
import "./error.css"

const Error404= ()=>{
    return(
        <>
            <div className="backColor3">
                <h3>Error 404, página no encontrada</h3>
                <Link to="/"><button className='buttonError'>Vuelve a la página principal</button></Link>
            </div>
        </>
    )
}

export default Error404