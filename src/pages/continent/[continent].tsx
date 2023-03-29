import { InfoOutlineIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';

interface ContinentProps {
  continent: string;
}

interface Continent {
  id: number;
  title: string;
  description: string;
  banner: string;
  info: {
    total_countries: number;
    languages: number;
    most_visited_cities: {
      total: number;
      cities: {
        id: number;
        city: string;
        country: string;
        flag: string;
        picture_url: string;
      }[];
    };
  };
}

export default function Continent({ continent }: ContinentProps) {
  const [continentData, setContinentData] = useState({} as Continent);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3333/continents?title=${continent}`)
      .then((response) => response.json())
      .then((data) => {
        setContinentData(data[0]);
      });
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return (
      <Flex flex='1' justifyContent='center' alignItems='center'>
        <Spinner color='yellow.400' size='xl' />
      </Flex>
    );
  }

  return (
    <>
      <Box
        backgroundImage={continentData.banner}
        bgPosition='bottom'
        w='100%'
        h='md'
        bgRepeat='no-repeat'
        objectFit='cover'
        bgSize='cover'
        paddingX='20'
        paddingY='8'
      >
        <Flex h='100%' alignItems='flex-end' maxW={1240} mx='auto' my={0}>
          <Heading color='white' textShadow='2xl'>
            {continentData.title}
          </Heading>
        </Flex>
      </Box>

      <Box w='100%' paddingX='20'>
        <Grid templateColumns='repeat(2, 1fr)' maxW={1240} mx='auto' my='20'>
          <Text fontSize='2xl' lineHeight='9' textAlign='justify'>
            {continentData.description}
          </Text>
          <Flex
            justifyContent='center'
            alignItems='center'
            flexWrap='wrap'
            gap={20}
            padding={10}
          >
            <Flex alignItems='center' flexDirection='column'>
              <Heading color='yellow.400'>
                {continentData.info?.total_countries}
              </Heading>
              <Heading as='h2' fontSize='xl' fontWeight='bold' color='gray.700'>
                países
              </Heading>
            </Flex>
            <Flex alignItems='center' flexDirection='column'>
              <Heading color='yellow.400'>
                {continentData.info?.languages}
              </Heading>
              <Heading as='h2' fontSize='xl' fontWeight='bold' color='gray.700'>
                línguas
              </Heading>
            </Flex>
            <Flex alignItems='center' flexDirection='column'>
              <Heading color='yellow.400'>
                {continentData.info?.most_visited_cities.total}
              </Heading>
              <Heading
                as='h2'
                fontSize='xl'
                fontWeight='bold'
                color='gray.700'
                display='flex'
                alignItems='center'
                gap='2'
              >
                cidades +100{' '}
                <Tooltip
                  label='As cidades +100 são as cidades que aquele continente possui que estão entre as 100 cidades mais visitadas do mundo.'
                  placement='bottom-end'
                  hasArrow
                  bg='white'
                  color='gray.700'
                  padding='3.5'
                  boxShadow='lg'
                >
                  <InfoOutlineIcon fontSize='sm' />
                </Tooltip>
              </Heading>
            </Flex>
          </Flex>
        </Grid>

        <Box maxW={1240} mx='auto' my='20'>
          <Heading color='blackAlpha.800' marginBottom='16'>
            Cidades +100
          </Heading>

          <Grid templateColumns='repeat(4, 1fr)' gap='20'>
            {continentData.info?.most_visited_cities.cities.map((city) => (
              <Card
                w='100%'
                h='auto'
                overflow='hidden'
                borderColor='yellow.400'
                borderWidth='1px'
              >
                <CardHeader h='44' bgImage={city.picture_url} bgSize='cover' />
                <CardBody>
                  <Flex justifyContent='space-between'>
                    <Box>
                      <Heading fontSize='md'>{city.city}</Heading>
                      <Text mt='5' fontSize='sm'>{city.country}</Text>
                    </Box>
                    <Avatar name='word trip' src={city.flag} bg='yellow.500'/>
                  </Flex>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: 'blocking',
    paths: [],
  };
};

export const getStaticProps: GetStaticProps = (ctx) => {
  const param = ctx.params?.continent;

  return {
    props: {
      continent: param,
    },
    revalidate: 60 * 30, //30 minutes
  };
};
