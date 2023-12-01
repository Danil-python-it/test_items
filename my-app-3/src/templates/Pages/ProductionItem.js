import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CallBackendApi } from "../../api";
//import Images from "./Product.jpg"



function ProductionItems(){
    const {id} = useParams();
    const [data, SetData] = useState({});

    useEffect(() => {
        CallBackendApi(`get?id=${id}`, SetData);
    }, [ id ])
  
    return (
        <main>
            <div className="ContainerMain">
                {data.length > 0 && 
                <>
                    <div className="SecondaryLogo">
                        {data[0]["title"]}
                    </div>
                    <div className="ContainerProductImage">
                        <img className="ContainerProductImage" src="/Images/Product.jpg"  alt="."/>
                    </div>
                    <div className="SecondaryLogo">
                        {data[0]["price"] + data[0]["price_current"]}
                    </div>
                    <Link to={'/'}>
                        <div className="ContainerButton">
                            <div>
                                Вернуться на главную
                            </div>
                        </div>
                    </Link>
                </>
                }
            </div>
        </main>

    )
}

export default ProductionItems