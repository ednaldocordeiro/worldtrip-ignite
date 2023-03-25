import { Box, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ListItemProps {
  name: string;
  image: ReactNode;
}

export function ListItem({ name, image }: ListItemProps) {
  return (
    <Box display='flex' flexDir='column' alignItems='center' justifyContent='center' m='5'>
      {image}
      <Text textAlign='center' fontSize='2xl' fontWeight='bold' marginTop='6'>
        {name}
      </Text>
    </Box>
  );
}
