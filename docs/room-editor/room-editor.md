import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Reviews, reviewAmount} from './room-editor-reviews';

# Room Editor Overview

## Intro

## Testimonials

<CarouselProvider
    totalSlides={reviewAmount()}
    step={1}
    naturalSlideWith={400}
    naturalSlideHeight={500}
    isIntrinsicHeight
>
<Slider>
    <Reviews/>
</Slider>
<ButtonBack>Back</ButtonBack>
<ButtonNext>Next</ButtonNext>
</CarouselProvider>