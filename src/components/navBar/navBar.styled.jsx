import styled from "styled-components";

export const Header =  styled.head`

    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background: #351B3F;
    align-itens: center;
    position: fixed;
    top: 0;

    div {
        margin: 0 10% 0 10%;
        display: flex;
        align-items: center;

            img {
                width: 60px;
                height: 60px;
                
            }

        div {
            display: flex;
            align-items: center;
            margin: 5px 20px 5px 20px;
            padding: 8px;
            color: #ddc41c;
            border-radius: 5px;
            cursor: pointer;
            position: relative;
            right: 10% -20px;
            
            :hover{
                background: #6c5077;
                } 

            @media (max-width: 950px) {
                display: none;
                }
  
            }
    }
`;

export const MenuToggle = styled.div`

    font-size: 55px;
    color: #ddc41c;
    position: relative;
    right: 5%;
    cursor: pointer;

    @media (min-width: 950px) {
        display: ${({ show }) => show ? 'block' : 'none'} !important; 
    }
    
    
`;
