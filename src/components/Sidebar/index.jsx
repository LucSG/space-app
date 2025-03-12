import styled from "styled-components";
import NavigationItem from "./NavigationItem";


const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;

`

const Sidebar = () => {
    return(
        <aside>
            <nav>
                <StyledList>
                    <NavigationItem activeIcon="/icones/home-ativo.png" 
                    inactiveIcon="/icones/home-inativo.png" 
                    text="Início" 
                    active= {true}
                    />
                    <NavigationItem activeIcon="/icones/mais-vistas-ativo.png" 
                    inactiveIcon="/icones/mais-vistas-inativo.png" 
                    text="Mais Vistas" 
                    />
                    <NavigationItem activeIcon="/icones/mais-curtidas-ativo.png" 
                    inactiveIcon="/icones/mais-curtidas-inativo.png" 
                    text="Mais curtidas" 
                    />
                    <NavigationItem activeIcon="/icones/novas-ativo.png" 
                    inactiveIcon="/icones/novas-inativo.png" 
                    text="Novas" 
                    />
                    <NavigationItem activeIcon="/icones/surpreenda-me-ativo.png" 
                    inactiveIcon="/icones/surpreenda-me-inativo.png" 
                    text="Surpreenda-me" 
                    />
                </StyledList>
            </nav>
        </aside>
    )
}


export default Sidebar;