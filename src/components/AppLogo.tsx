import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { theme } from '@chakra-ui/react';
export const AppLogo = () => {
  return (
    <Link href="/" >
      <Text fontSize={{base:'md', lg:"lg"}} dir='rtl' color="brand.darkBlue" fontWeight="bold">
        TAYSSIR{' '}
        <Text as="span" color="brand.primary">
          SHOP
        </Text>
      </Text>
    </Link>
  );
};
