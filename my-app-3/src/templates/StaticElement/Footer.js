import React from "react";

function CardsUser(props){
    return (
        <div className="MainContainerInfo">
            <div className="SecondaryContainerInfo">
                <span>{props.User}</span>
                <span>{props.TelNumber}</span>
                <span>{props.NameUser}</span>
            </div>
        </div>
    ) 
}
function CardsSocialButton(props){
    return(
        <div className="MainContainerButton"> 
            <div className="SecondaryContainerButton">
                {props.title}
            </div>
        </div>
    )
}


function Footer(){
    return(
        <footer>
            <div className="FooterBox">
                <div className="ContainerContacts">
                    <div className="Title">Контакты</div>
                    <CardsUser User="Руководитель" TelNumber="+7 915 267 29 48" NameUser="Роман Адвакатов"/>
                    <CardsUser User="Администрато" TelNumber="+7 965 967 89 48" NameUser="Алексей Вербер"/>
                    <CardsUser User="Программист" TelNumber="+7 915 280 19 94" NameUser="Данила Волков"/>
                </div>
                <div className="ContainerSocialButton">
                    <div className="Title">Мы в интернете</div>
                    <ul>
                        <li><CardsSocialButton/></li>
                        <li><CardsSocialButton/></li>
                        <li><CardsSocialButton/></li>
                        <li><CardsSocialButton/></li>
                    </ul>
                </div>
            </div>
        </footer>             
    );
    
} 

export default Footer