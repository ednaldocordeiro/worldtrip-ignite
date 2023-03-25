import { Box, Flex, List, useBreakpointValue} from "@chakra-ui/react";
import Image from "next/image";
import { ListItem } from "./ListItem";

import cocktail from '/public/cocktail.svg';
import building from '/public/building.svg';
import surf from '/public/surf.svg';
import museum from '/public/museum.svg';
import earth from '/public/earth.svg';

export function TravelTypes() {
  return (
    <Box display='flex' justifyContent={['center', 'space-evenly']} flexWrap='wrap' alignItems='center'>
      <ListItem
        name='vida noturna'
        image={<Image src={cocktail} alt='item' />}
      />
      <ListItem name='praia' image={<Image src={surf} alt='item' />} />
      <ListItem name='moderno' image={<Image src={building} alt='item' />} />
      <ListItem name='clássico' image={<Image src={museum} alt='item' />} />
      <ListItem name='e mais ...' image={<Image src={earth} alt='item' />} />
    </Box>
  );
}
