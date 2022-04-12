import styled from "styled-components";

export const SlidesContainer = styled.div`
display: grid;
    perspective: 800px;
    transform-style: preserve-3d;
`
export const ImageSliderContainer = styled.div`
`
export const SlideContainer = styled.div`
    width: 30vw;
    height: 40vw;
    grid-area: 1 / -1;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center center;
    
    
    transition: 0.5s ease-in-out;
    transform: translateX( calc(100% * ${props => props.offset})) rotateY(calc(-25deg * ${props => props.direction}));
    
    ${({active}) => active && `
        outline: 1px solid red;
    `}
`