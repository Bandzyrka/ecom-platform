import React, { useReducer } from 'react'
import { slidesData } from './slides-data'
import { SlidesContainer, ImageSliderContainer, SlideContainer } from './image-slider.styles'
const initialState = {
    slideIndex: 0,
}

const slidesReducer = (state, action) => {
    switch (action.type) {
        case "NEXT_SLIDE":
            return{ 
                ...state, 
                slideIndex: (state.slideIndex + 1) % slidesData.length
            }
        case "PREV_SLIDE":
            return{ 
                ...state, 
                slideIndex: state.slideIndex === 0
                ? slidesData.length - 1
                : state.slideIndex - 1
            }
        default:
            return state;
    }
}

const Slide = ({slideData: {title, image}, offset}) => {
    
    return (
        <SlideContainer offset={offset} image={image}>  
        {title}
        {offset}
        </SlideContainer>
    )
}


const ImageSlider = () => {
  const [state, dispatch] = useReducer(slidesReducer, initialState)
  const {slideIndex} = state
  return (
    <ImageSliderContainer>
        <SlidesContainer>
        {
            slidesData.map((slide, i) => {
                return(
                    <Slide slideData={slide} offset={slideIndex -i}/>
                    )
                })
            }
        </SlidesContainer>
        <button onClick={() => dispatch({ type: "NEXT_SLIDE" })}> NEXT </button>
        <button onClick={() => dispatch({ type: "PREV_SLIDE" })}> PREV </button>
    </ImageSliderContainer>
  )
}

export default ImageSlider

