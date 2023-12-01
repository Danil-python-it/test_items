import React from "react";
import HutBarr from "../Elements/HutBarr";
import ProductionBarr from "../Elements/newProductionBarr";


export default class MainList extends React.Component{

    render(){
        return(
            <main>
                <div className="ContainerMain">
                    <HutBarr/>
                    <ProductionBarr title="NewItems"/>
                </div>
            </main>
        );
    }
}