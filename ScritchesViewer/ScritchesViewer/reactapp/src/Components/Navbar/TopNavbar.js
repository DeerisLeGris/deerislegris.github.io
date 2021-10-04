//Libraries
import styled, { keyframes } from 'styled-components';

function TopNavbar({onSearch, onCancel, showMode, currentSelection}) {
    return(
        <MainDiv>
            <ImageDiv image={image}/>
            <SecondDiv>
                <Title>{title}</Title>
                <Line/>
            </SecondDiv>
        </MainDiv>
    )
}

export default TopNavbar;