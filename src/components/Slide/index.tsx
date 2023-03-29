import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Pagination,
  Mousewheel,
  Keyboard,
  Navigation,
  Controller,
} from 'swiper';
import { Slider } from './Slider';

import asia from '/public/asia.jpg';
import africa from '/public/africa.jpg';
import america from '/public/america.jpg';
import oceania from '/public/oceania.jpg';
import europa from '/public/europa.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/controller';

interface Slide {
  id: number;
  title: string;
  description: string;
  picture_url: string;
}
interface SlideProps {
  slides: Slide[];
}


export function Slide({slides}: SlideProps) {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      loop={true}
      modules={[Navigation, Mousewheel, Keyboard, Pagination, Controller]}
      className='mySwiper'
      style={{ height: 500, borderRadius: 3 }}
    >
      {slides.map(slide => (
        <SwiperSlide key={slide.id}>
          <Slider
            title={slide.title}
            description={slide.description}
            image={slide.picture_url}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
