import React from "react";

import Directory from "../../components/directory/directory.component"
import { HomePageContainer } from './homepage.styles.jsx'
import ImageSlider from '../../components/image-slider/image-slider.component'
export const HomePage = () =>
    (
    <HomePageContainer>
        <ImageSlider />
        <Directory />
    </HomePageContainer>
    )

export default HomePage;