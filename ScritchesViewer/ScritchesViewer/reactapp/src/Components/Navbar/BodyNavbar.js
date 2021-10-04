//Libraries
import styled, { keyframes } from 'styled-components';

function TopNavbar({onSelectedFursuit, onSelectedImage, showMode, search}) {
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