import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CallBackendApi } from "../../api";


// DataBarr == ProductionBarr

function ProductionBarr(props){
    
    const [DataBarr, SetDataBarr] = useState([]);

    useEffect(() => {
        if(props.data === undefined){
            CallBackendApi("/Production", SetDataBarr)
        } else {
            SetDataBarr(props.data)
        }
    }, [ props.data ])
    
     

    return(
    <>
        {DataBarr.length > 0 
            && <div className="ContainerArticleThree">
                <div className="SecondaryLogo">{props.title}</div>
                <ul className="ContainerProductBarr">
                    {DataBarr.map((i) => 
                        <Link to={`/Production/${i["id"]}`} className="CardsProduct">
                            <div className="Image"><img className="Image" src="/Images/Product.jpg" alt="."/></div>
                            <div className="TextInfo"><span><p>{i["title"]}</p></span><span><p>{i["price"] + i["price_current"]}</p></span></div>
                        </Link>
                    )}
                </ul>
                {props.data === undefined &&
                    <Link to="/Category/Новинки" className="ButtonMainContainer" href=".">
                        <div className="ButtonSecondaryContainer">
                            ПОСМОТРЕТЬ ВСЕ НОВИНИК
                        </div>  
                    </Link>
                }
            </div>
            
        }
    </>
    );   
}

export default ProductionBarr