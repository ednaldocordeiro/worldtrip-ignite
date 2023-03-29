import { Box, Center, Divider, Heading, useBreakpointValue } from '@chakra-ui/react';

import banner from '/public/banner.svg';
import { TravelTypes } from '@/components/TravelTypes';
import { Banner } from '@/components/Banner';
import { Slide } from '@/components/Slide';
import { useEffect, useState } from 'react';

interface Slide {
  id: number;
  title: string;
  description: string;
  picture_url: string;
}

export default function Home() {
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/slides')
      .then((res) => res.json())
      .then((data) => setSlides(data))
  }, [])

  return (
    <>
      <Box
        backgroundImage={`url('${banner.src}')`}
        bgPosition='center'
        w='100%'
        height='auto'
        bgRepeat='no-repeat'
        objectFit='cover'
        bgSize='cover'
        paddingX='20'
        paddingY='8'
      >
        <Banner />
      </Box>
      <Box paddingX='20'>
        <Box maxW={1240} mt='28' mb='10' mx='auto' alignItems='center'>
          <TravelTypes />
          <Center mt={20} mb={14}>
            <Divider w='24' borderBottomWidth={3} borderColor='dark' />
          </Center>
          <Heading textAlign='center' mb='14'>
            Vamos nessa? <br /> Então escolha seu continente
          </Heading>
          <Slide slides={slides}/>
        </Box>
      </Box>
    </>
  );
}
