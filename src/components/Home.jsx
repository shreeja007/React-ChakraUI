import { Box, Container, Heading, Image, Stack, Text, color } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
  pos:"absolute",
  left:"50%",
  top:"50%",
  transform:"translate(-50%, -50%)",
  textTrasform:"uppercase",
  padding:"4",
  size:"4xl",
}

const Home = () => {
  return <Box>
    <MyCarousel />
    <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
      <Heading textTransform={"uppercase"} py={"2"} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>Services</Heading>

      <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']}>
        <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40','400']}/>

        <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolores tempora, facilis velit culpa, temporibus illo voluptate, nostrum impedit ex cum laboriosam. Vel odit, dolorum dolor aliquid reprehenderit dolore dicta error a!
        </Text>
      </Stack>
    </Container>
  </Box>
};

const MyCarousel = () =>(
  <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>

    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bg={'blackAlpha.600'} color={"white"} {...headingOptions}>Watch The Future</Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bg={'whiteAlpha.900'} color={"black"} {...headingOptions}>Future is gaming</Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bg={'whiteAlpha.600'} color={"black"} {...headingOptions}>Gaming on console</Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bg={'whiteAlpha.600'} color={"black"} {...headingOptions}>Night life is cool</Heading>
    </Box>

  </Carousel>
);

export default Home