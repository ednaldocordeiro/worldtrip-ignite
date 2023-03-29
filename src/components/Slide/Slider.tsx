import {
  Box,
  BoxProps,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';

interface SwiperSlideProps extends BoxProps {
  title: string;
  description: string;
  image: string;
}

export function Slider({
  title,
  description,
  image,
  ...rest
}: SwiperSlideProps) {
  const {push} = useRouter();
  return (
    <Box
      w='auto'
      h='100%'
      bgImage={image}
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
          onClick={() => push(`/continent/${title}`)}
          _hover={{color: 'yellow.400', cursor: 'pointer'}}
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
