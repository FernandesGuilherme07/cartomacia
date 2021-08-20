import { useState } from "react";
import  { Header, MenuToggle, NavBarToggle }  from "./navBar.styled"
import { IoMdMenu } from "react-icons/io";

export default function NavBar () {

    const [show, setShow] = useState(false)

    const ToggleMenu = () => {
        setShow(!show);
        
    }

    return (
        <>
    
        <Header>
           <div>
               <img src="/logo.svg" alt="logo" />
           </div>
           <div >
                <div>Início</div>
                <div>Cartomancia</div>
                <div>Historia na cartomancia</div>
                <div>Baralhos</div>
                <div>Preços</div>
            </div>
        
            <MenuToggle >
                <IoMdMenu onClick={ToggleMenu} />
            </MenuToggle>
                
                
            

        </Header>
      
        <NavBarToggle show={show}>
    
            <div>Início</div>
            <div>Cartomancia</div>
            <div>Historia na cartomancia</div>
            <div>Baralhos</div>
            <div>Preços</div>
        </NavBarToggle>

        </>
    )
}
