import { Box, Center, Divider, Heading, useBreakpointValue } from '@chakra-ui/react';

import banner from '/public/banner.svg';
import { TravelTypes } from '@/components/TravelTypes';
import { Banner } from '@/components/Banner';
import { Slide } from '@/components/Slide';

export default function Home() {
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
          <Slide />
        </Box>
      </Box>
    </>
  );
}
