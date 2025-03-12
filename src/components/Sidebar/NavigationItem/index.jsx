import styled from "styled-components";



const StyledItemList = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$active ? '#7B78E5': '#D9D9D9 '};
    font-family: ${props => props.$active ? 'GandhiSansBold ': 'GandhiSansRegular' };
    display: flex;
    align-items: center;
    gap: 22px;
`

const NavigationItem = ({ activeIcon, inactiveIcon, text, active=false }) => {
  return <StyledItemList $active={active}>
      <img src={active ? activeIcon : inactiveIcon} alt ="" />
          {text} 
  </StyledItemList>
    
}

export default NavigationItem