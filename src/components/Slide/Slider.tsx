import {
  Box,
  BoxProps,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { StaticImageData } from 'next/image';

interface SwiperSlideProps extends BoxProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export function Slider({
  title,
  description,
  image,
  ...rest
}: SwiperSlideProps) {
  return (
    <Box
      w='auto'
      h='100%'
      bgImage={`url('${image.src}')`}
      bgSize='cover'
      bgPosition='center'
      {...rest}
    >
      <Flex
        width='100%'
        height='100%'
        background='#0007'
        bgSize='cover'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
      >
        <Heading
          color='whiteAlpha.900'
          fontWeight='extrabold'
          fontSize={['2xl', '3xl', '4xl', '5xl']}
          mb='4'
        >
          {title}
        </Heading>
        <Text
          color='whiteAlpha.900'
          fontSize={['sm', 'md', 'lg', '2xl']}
          fontWeight='extrabold'
        >
          {description}
        </Text>
      </Flex>
    </Box>
  );
}
