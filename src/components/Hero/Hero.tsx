'use client';
import { Box, Button, Card, Heading, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface IHeroProps {
  heading: string;
  description: string;
  imageUrl: string;
  btnLabel: string;
  btnLink: string;
}

export const Hero = ({
  heading,
  description,
  imageUrl,
  btnLabel,
  btnLink,
}: IHeroProps) => {
  return (
    <Card
      direction={{ base: 'column', md: 'row-reverse' }}
      align="center"
      justify="space-between"
      overflow="hidden"
      variant="outline"
      w={{ base: '100%', lg: '90%' }}
      mx="auto"
      shadow="sm"
      p="2rem"
      mb="2rem"
    >
      <Box dir="rtl" mx="2rem" w={{ base: '100%', md: '50%' }} >
        <Heading size="2xl">{heading}</Heading>
        <Text py="1rem" w="80%">{description}</Text>

        <Link href={btnLink}>
          <Button variant="outline">{btnLabel}</Button>
        </Link>
      </Box>
      <Box mx="2rem" w={{ base: '100%', md: '40%' }} mt="1rem"  color="blue.100">
        <Image
          display={{ base: 'none', lg: 'block' }}
          src={imageUrl}
          alt={heading}
          objectFit="cover"
          maxW={{ base: '100%' }}
          rounded="md"
          mx="auto"
        />
      </Box>
    </Card>
  );
};
