import React, { useReducer } from 'react'
import { slidesData } from './slides-data'
import { SlideContent, SlidesContainer, ImageSliderContainer, SlideContainer } from './image-slider.styles'
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

const Slide = ({slideData: {title, subtitle, description, image}, offset}) => {
    const active = offset === 0 ? true: null;
    const direction = offset === 0 ? 0 : (offset > 0 ? 1 : -1)
    return (
        <SlideContainer 
            offset={offset} 
            image={image} 
            active={active} 
            direction={direction}
            >
            <SlideContent className="slide-content">
                <h2> {title} </h2>
                <h3> {subtitle} </h3>
                <p> {description} </p> 
            </SlideContent>
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
            [...slidesData, ...slidesData, ...slidesData].map((slide, i) => {
                let offset = slidesData.length + (slideIndex - i);
                return(
                    <Slide 
                        slideData={slide} 
                        offset={offset}
                        />
                    )
                })
            }
            <button onClick={() => dispatch({ type: "NEXT_SLIDE" })}> ‹ </button>
            <button onClick={() => dispatch({ type: "PREV_SLIDE" })}> › </button>
        </SlidesContainer>
    </ImageSliderContainer>
  )
}

export default ImageSlider

