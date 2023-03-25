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

export function Slide() {
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
      <SwiperSlide>
        <Slider
          title='Europa'
          description='O continente mais antigo'
          image={europa}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slider
          title='Asia'
          description='O continente mais antigo'
          image={asia}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slider
          title='Améria'
          description='O continente mais antigo'
          image={america}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slider
          title='África'
          description='O continente mais antigo'
          image={africa}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slider
          title='Oceania'
          description='O continente mais antigo'
          image={oceania}
        />
      </SwiperSlide>
    </Swiper>
  );
}
