import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import logo from '../../public/logo.svg';

export function Header() {
  const { asPath, back } = useRouter();

  const hasBackButton =
    ['/continent'].includes(asPath) || asPath.startsWith('/continent');

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
        <Box flex={0.5} _hover={{cursor: 'pointer'}}>
          {hasBackButton && <ChevronLeftIcon fontSize='3xl' onClick={back} />}
        </Box>

        <Flex flex={1} justifyContent='center'>
          <Image src={logo} alt='WorldTrip logo' priority />
        </Flex>

        <Box flex={0.5} />
      </Flex>
    </Flex>
  );
}
