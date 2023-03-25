import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import logo from '../../public/logo.svg';

export function Header() {
  const { asPath } = useRouter();

  const hasBackButton = ['/continent'].includes(asPath);

  return (
    <Flex
      columnGap={2}
      w='100%'
      h={100}
      alignItems='center'
      justifyContent='center'
      position='relative'
      paddingX='20'
    >
      <Flex
        w='100%'
        maxW={1240}
        my={0}
        mx='auto'
        alignItems='center'
        justifyContent='center'
      >
        <Box flex={0.5}>
          {hasBackButton && (
            <ChevronLeftIcon fontSize='3xl' />
          )}  
        </Box>

        <Flex flex={1} justifyContent='center'>
          <Image src={logo} alt='WorldTrip logo' />
        </Flex>

        <Box flex={0.5}/>
      </Flex>
    </Flex>
  );
}
