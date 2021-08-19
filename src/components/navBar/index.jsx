import { useState } from "react";
import  { Buttons, Header, MenuToggle }  from "./navBar.styled"
import { IoMdMenu } from "react-icons/io";

export default function NavBar () {

    const [show, setShow] = useState(false);

    const ToggleMenu = () => setShow(!show);

    return (
        <Header>
           <div>
               <img src="/logo.svg" alt="logo" />
           </div>
           <div show= {show}>
                <div>Início</div>
                <div>Cartomancia</div>
                <div>Historia na cartomancia</div>
                <div>Baralhos</div>
                <div>Preços</div>
            </div>
        
            <MenuToggle onClick={ToggleMenu}>
                <IoMdMenu/>
            </MenuToggle>
                
            

        </Header>
    )
}
