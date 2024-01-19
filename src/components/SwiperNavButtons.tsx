import { IconButton, Box, color } from '@chakra-ui/react';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <Box m="1.5rem">
      <IconButton
        rounded="lg"
        icon={<FaChevronRight />}
        borderColor="brand.primary"
        borderWidth="1px"
        color="brand.primary"
        bgColor="white"
        aria-label="Next"
        onClick={() => swiper.slideNext()}
        mx="1"
        _hover={{
          color:'white',
          bgColor:"brand.primary",
        }} 
      />
      
      <IconButton
        rounded="lg"
        icon={<FaChevronLeft />}
        borderColor="brand.primary"
        borderWidth="1px"
        color="brand.primary"
        bgColor="white"
        aria-label="Prev"
        onClick={() => swiper.slidePrev()}
        mx="1"
        _hover={{
          color:'white',
          bgColor:"brand.primary",
        }} 
      />
      
    </Box>
  );
};
