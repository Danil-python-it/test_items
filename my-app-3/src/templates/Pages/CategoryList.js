import ProductionBarr from "../Elements/newProductionBarr";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { CallBackendApi } from "../../api";
import { useState, useEffect } from "react";

function CategoryList(){
    const {id} = useParams();
    const [data, SetData] = useState({});

    useEffect(() => {
        CallBackendApi(`/Category/getAllproduction?id=${id}`, SetData)
    }, [ id ])

    return (
        <main>
            {data.length > 0 &&
            <>
                <div className="ContainerMain">
                    <ProductionBarr title={data[0]["title"]} data={data[1]["production"]}/>
                    <Link to={'/'}>
                        <div className="ContainerButton">
                            <div>
                                Вернуться на главную
                            </div>
                        </div>
                    </Link>
                </div>
            </>
            }
            
        </main>

    )
}

export default CategoryList