'use client';
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { getSubstring } from '@src/helpers';
import { IProduct } from '@src/model';
import Link from 'next/link';
import { AddToWishlistButton } from './AddToWishlistButton';
import { AddToCartButton } from './Cart/AddToCartButton';
import { Rating } from './Rating';

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card w="xs"
    pos="relative"
    m="0.5rem"
    borderRadius="12px"
    boxShadow="md" // Add a medium shadow
    borderWidth="1px" // Add a border
    borderColor="gray.200" // Set border color
    bgColor="white" // Set background color
    overflow="hidden" // Hide overflowing content
    transition="box-shadow 0.3s ease-out, border-color 0.3s ease-out, transform 0.4s ease-out" // Add transition for smooth effects
    _hover={{
      boxShadow: '0 12px 24px rgba(60, 100, 200, 0.1), 0 6px 20px rgba(60, 100, 200, 0.15)', // Adjust the color and intensity
      cursor: 'pointer',
      transform: 'translateY(-5px) scale(1.02)', // Move the card slightly and scale on hover
    }}
    dir='rtl'
    >
      <AddToWishlistButton product={product} />
      <CardBody>
        <Link href={`/products/${product.slug}`}>
          <Box
            bg={`center / contain no-repeat url(${product.mainImage})`}
            borderRadius="lg"
            boxSize="200px"
            mx="auto"
          />
        </Link>
        <Stack mt="6" spacing="3">
          <Flex justify="space-between" align="center">
            <Link href={`/products/${product.slug}`}>
              <Heading size="sm">{getSubstring(product.name, 20)}</Heading>
            </Link>
            <Flex color="brand.primaryDark" fontWeight="bold">
              <Text fontSize="md">DA </Text>
              <Text fontSize="lg">{product.price}</Text>
            </Flex>
          </Flex>
          <Text fontSize="sm"> {getSubstring(product.description, 30)} </Text>
          <Rating rating={product.rating} />

          <AddToCartButton product={product} />
        </Stack>
      </CardBody>
    </Card>
  );
};
