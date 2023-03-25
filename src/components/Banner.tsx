import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

import airplane from '/public/Airplane.svg';

export function Banner() {
  const [isBiggerThan700] = useMediaQuery('(min-width: 700px)');
  return (
    <Flex
    maxW={1240}
    my={0}
    mx='auto'
    alignItems='center'
    h='100%'
    position='relative'
    justifyContent='space-between'
  >
    <Box>
      <Heading
        color='whiteAlpha.900'
        fontWeight='normal'
        wordBreak='break-word'
        fontSize={'4xl'}
        mb='4'
      >
        5 continentes,<br/>infinitas possibilidades
      </Heading>
      <Text color='whiteAlpha.900'>
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
    </Box>

    {isBiggerThan700 && <Flex position='relative' top={20}>
      <Image src={airplane} alt='Avião' />
    </Flex>}
  </Flex>
  )
}