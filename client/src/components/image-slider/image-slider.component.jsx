import React, { useReducer } from 'react'
import { slidesData } from './slides-data'

const initialState = {
    slidesIndex: 0,
}

const slidesReducer = (state, action) => {
    switch (action.type) {
        case "NEXT_SLIDE":
            return{ 
                ...state, 
                slideIndex: state.slideIndex + 1 % slidesData.length}
        case "PREV_SLIDE":
            return{ 
                ...state, 
                slideIndex: state.slideIndex - 1 % slidesData.length
            }
        default:
            return state;
    }
}

const ImageSlider = () => {
  const [state, dispatch] = useReducer(slidesReducer, initialState)
  return (
    <div>
        {
            slidesData.map(slide => {
                return(
                    <div className = "slide">
                        {slide.title}
                    </div>
                )
            })
        }
        <button onClick={() => dispatch("NEXT_SLIDE") }> NEXT </button>
        <button onClick={() => dispatch("PREV_SLIDE") }> PREV </button>
    </div>
  )
}

export default ImageSlider

