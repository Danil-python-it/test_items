import React from 'react';
import Manage from "./Manage.png";
import UserPhoto from "./UserProfile.png";


function Header(){
    


    return (
        <header>
            <div className='box'>
                <div className='LogoInfo'>
                    <span className='MainLogo'>Logo</span>
                    <span className='LogoDiscription'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    <br/><br/>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </span>
                </div>

                <div className='UserBox'>
                    <div className='Content'>
                        <img className='ImageUser' src={UserPhoto} alt="avatar_user"/>
                        <span className='UserName'>James Romanov</span>
                        <div className='FunctionMenu'>
                            <div className='Button'>
                                <img src={Manage} alt="PicteriMahageContent"/>
                                <span className='current'>10 999 р</span>
                            </div>
                            <div className='Button'>
                                <div className='ContentButton'>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </header>
        );
}

export default Header