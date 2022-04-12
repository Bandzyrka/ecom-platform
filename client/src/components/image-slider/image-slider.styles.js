import styled from "styled-components";

export const SlidesContainer = styled.div`
display: grid;
`
export const ImageSliderContainer = styled.div`
`
export const SlideContainer = styled.div`
    width: 30vw;
    height: 40vw;
    outline: 1px solid black;
    grid-area: 1 / -1;
    transform: translateX( calc(100% * ${props => props.offset}));
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center center;
`