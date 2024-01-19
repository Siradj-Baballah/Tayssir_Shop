import { Text,Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { theme } from '@chakra-ui/react';
export const AppLogo = () => {
  return (
    <Link href="/">
      <Flex flexDirection={{ base: 'column', lg: 'row' }} alignItems="center">
        <Text fontSize={{ base: 'md', lg: 'lg' }} dir="rtl" color="brand.darkBlue" fontWeight="bold">
          TAYSSIR{' '}
          <Text as="span" color="brand.primary">
            SHOP
          </Text>
        </Text>
      </Flex>
    </Link>
  );
};
