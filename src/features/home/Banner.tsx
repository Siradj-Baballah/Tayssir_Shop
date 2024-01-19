'use client';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { BannerSlider } from './BannerSlider';

// bg = 'center / cover no-repeat url(/banner-img1.jpg)';

export const Banner = () => {
  return (
    <Box minH="500px">
      <Flex
        justify="center"
        align="center"
        gap="2"
        flexDir={{ base: 'column-reverse', lg: 'row' }}
        w={{ base: '100%', lg: '90%' }}
        mx="auto" 
        mt={{ base: '1.5rem', lg: '0' }}     
        >
        <Box w={{ base: '100%', lg: '50%' }}>
          <Box
            my="1rem"
            w={{ base: '300', lg: '500' }}
            h={{ base: '300px', lg: '500px' }}
            bg="center / cover no-repeat url(mockup.svg)"
          />
        </Box>

        <Box dir='rtl' w={{ base: '85%', lg: '50%' }}>
          <Heading
            size={{ base: '2xl', lg: '3xl' }}
            lineHeight="4rem"
            color="brand.primary"
            dir='rtl'
            mb={{ base: '0', lg: '1.5rem' }}
          >
            متجر تيسير <br /> <Text as="span" fontSize={{base: '2xl', lg: '3xl' }} >لمستلزمات المدارس و الأساتذة</Text>
          </Heading>
          <Text dir='rtl' fontSize={{ base: 'md', lg: 'xl' }} py="1rem" maxW={{base:"420px" ,lg:"600px"}}>
          استكشف تشكيلتنا الواسعة من مستلزمات المدارس و الاساتذة مع توفير أحدث التكنولوجيات التعليمية عالية الجودة. نحن هنا لجعل تجربة التعلم أكثر سهولة وإثراءً.
          </Text>
          <Link href="/products">
            <Button
              fontSize={{base: 'lg', lg: '2xl' }}
              borderRadius="16px"
              minW={{base: '10rem', lg: '12rem' }}
              minH={{base: '', lg: '3rem' }}
              bgColor="brand.primary"
              color="white"
              _hover={{ bgColor: 'brand.primaryDark' }}
              mt={{ base: '0', lg: '1.5rem' }}
              >
              تسوق الآن
            </Button>
          </Link>
        </Box>
        
      </Flex>
    </Box>
  );
};
