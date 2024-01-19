'use client';
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { AddToWishlistButton } from '@src/components/AddToWishlistButton';
import { AddToCartButton } from '@src/components/Cart/AddToCartButton';
import { CustomBreadcrumb } from '@src/components/CustomBreadcrumb';
import { Quantity } from '@src/components/Quantity/Quantity';
import { Rating } from '@src/components/Rating';
import { AppContext } from '@src/context/AppContext';
import { getSubstring } from '@src/helpers';
import { IBreadcrumbItem, IProduct } from '@src/model';
import React, { useContext, useState } from 'react';

interface ProductDetailsProps {
  product: IProduct;
}

const items: IBreadcrumbItem[] = [
  {
    name: 'Products',
    link: '/products',
  },
  {
    name: 'Categories',
    link: '/categories',
  },
];

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);
  const { isAdded, addItem, resetItems } = useContext(AppContext);
   // Add a check for product.category
   const categoryName = product.category ? product.category.name : 'Unknown Category';
   const categoryId = product.category ? product.category.id : 'unknown';
 
  return (
    <>
      <CustomBreadcrumb
       items={[
        ...items,
        {
          name: categoryName,
          link: `/categories/${categoryId}`,
        },
        {
          name: getSubstring(product.name, 20),
          link: `/products/${product.slug}`,
        },
        ]}
      />
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        w={{ base: '100%', lg: '90%' }}
        mx="auto"
        p="2rem"
        gap="20"
      >
        <GridItem p="1rem" pos="relative">
          <AddToWishlistButton product={product} />
          <Image 
          src={product?.mainImage} 
          alt={product.name} 
          mx="auto" 
          boxSize={{ base: '80%', lg: '80%' }} // Adjust the dimensions as needed
          maxW={{ base: '100%', lg: 'none' }} // Disable max width for large screens
          objectFit="contain" // Choose the appropriate value based on your design
          />
          {/* TODO: fix product gallery */}
          <Flex justify="end" >
            {product.gallery?.length !== 0 &&
              product.gallery?.map((image, i) => (
                <Image
                  key={i}
                  src={image}
                  alt={product.name}
                  mx="auto"
                  boxSize="70px"
                  rounded="md"
                  shadow="sm"
                  borderWidth="1px"
                  borderColor="gray.100"
                />
              ))}
          </Flex>
        </GridItem>
        <GridItem p="1rem" dir='rtl'>
          <Heading>{product.name}</Heading>
          <Text my="1rem">{product.description}</Text>
          <Rating rating={product.rating} />

          <Text fontWeight="bold" fontSize="2rem">
            ${product.price}
          </Text>
          <Divider my="1rem" />
          <Quantity
            setQuantity={(_valueAsString, valueAsNumber) =>
              setQuantity(valueAsNumber)
            }
            disabled={isAdded('cart', product.id)}
          />
          <Divider my="1rem" />
          <Box>
            <Link href="/checkout">
              <Button
                variant="outline"
                bgColor="brand.primary"
                color="white"
                borderRadius="50px"
                size="sm"
                w="160px"
                ml="1rem"
                my="0.5rem"
                _hover={{ bgColor: "brand.primaryDark" }}
                onClick={() => {
                  resetItems('checkout');
                  addItem('checkout', product, quantity);
                }}
              >
                أطلب الآن
              </Button>
            </Link>
            <AddToCartButton product={product} count={quantity} />
          </Box>

          <Stack py="2rem">
            <Box borderWidth={1} borderColor="gray.100" p="1rem">
              <Text fontWeight="bold">التوصيل متوفر لكل الولايات</Text>
              <Text color="gray.500">
                الأسعار تختلف من ولاية لأخرى
              </Text>
            </Box>

            {/* <Box borderWidth={1} borderColor="gray.100" p="1rem">
              <Text fontWeight="bold">Return Delivery</Text>
              <Text color="gray.500">
                Free 30 Days Delivery Returns
              </Text>
            </Box> */}
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};
