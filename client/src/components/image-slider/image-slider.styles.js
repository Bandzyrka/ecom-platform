import styled from "styled-components";

export const SlidesContainer = styled.div`
    display: grid;
    perspective: 1000px;
    transform-style: preserve-3d;
    button {
    appearance: none;
    background: transparent;
    border: none;
    color: white;
    position: absolute;
    font-size: 5rem;
    width: 5rem;
    height: 5rem;
    top: 38%;
    transition: opacity 0.3s;
    opacity: 0.7;
    z-index: 5;

    &:hover {
      opacity: 1;
    }

    &:focus {
      outline: none;
    }

    &:first-child {
      left: -50%;
    }
    &:last-child {
      right: -0%;
    }
}
`
export const ImageSliderContainer = styled.div`
    margin: 4rem;
    
 
`
export const SlideContainer = styled.div`
    width: 35vw;
    height: 50vh;
    padding: 2rem;
    background-position: center center;
    grid-area: 1 / -1;
    background-image: url(${props => props.image});
    background-size: cover;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transition: 0.5s ease-in-out;
    transform: translateX( calc(100% * ${props => props.offset})) rotateY(calc(-25deg * ${props => props.direction}));
    align-content: center;
    margin-bottom: 5rem;
    cursor: pointer;
    ${({active}) => active && `
        :hover{
        transform: scale(1.1);

        }
        .slide-content{
            opacity: 1;
        
        }
    `}
    
    @media screen and (max-width: 800px){
        transform: translateX( calc(100% * ${props => props.offset})) rotateY(calc(-25deg * ${props => props.direction}));
        width: 100%;
        height: 300px;
        background-position:center center;
        box-shadow: unset;
    }
`
export const SlideContent = styled.div`
  transition: opacity 1.3s linear;
  text-shadow: 0 0.1rem 1rem #000;
  opacity: 0;
  color: white;
  h2{
    font-size: 3rem;
    font-weight: normal;
    letter-spacing: 0.2ch;
    text-transform: uppercase;
    margin: 0;
  }
  h3{
      font-size: 1.5rem;
  }
  h3::before{
    content: "— ";
  }
  p{
    margin: 0;
    font-size: 1rem;
    letter-spacing: 0.2ch;
  }
  @media screen and (max-width: 800px){
    h2{
        font-size: 30px;
    }
    h3{
        font-size: 15px;
    }
    p{
        font-size: 15px
    }
  }
`
