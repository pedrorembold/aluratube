import styled from "styled-components"

const StyledBanner = styled.div `
    width: 100vw;
    height: auto;
    display: block;
    
    img {
        width: 100vw;
        height: auto;
    }
`
export default function Banner() {
    return (
        <StyledBanner>
            <img src="../assets/img/banner.jpg"/>
        </StyledBanner>
    )
}

 