import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CallBackendApi } from "../../api";

function HutBarr(){
    const [HutBarr, SetHutBarr] = useState([]);

    useEffect(() => {
        CallBackendApi('/Category', SetHutBarr)
    }, [])

    return(
        <>
            {HutBarr.length > 0 
                ?<div className="ContainerArticleTwo">
                    <div className="SecondaryLogo">Category</div>
                    <ul className="ContainerHutBarr">
                        {HutBarr.map((i) => 
                            <Link className="Cards" to={`/Category/getAllproduction/${i["id"]}`}>
                                <div className="ImageMenu"><img className="ImageMenu" src="/Images/LampOne.png" alt="."/></div>
                                <div className="TextInfoMenu"><p>{i["title"]}</p></div>
                            </Link>
                        )} 
                    </ul>
                </div>
                :   <div className="Loading">Loading...</div>
            }
        </>
        
        
    );
}

export default HutBarr;