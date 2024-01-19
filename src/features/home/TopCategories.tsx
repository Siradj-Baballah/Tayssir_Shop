'use client';
import {
  Box,
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react';
import { SectionHeading } from '@src/components/SectionHeading';
import { ICategory } from '@src/model';
import Image from 'next/image';
import Link from 'next/link';

interface TopCategoriesProps {
  categories: ICategory[];
}

export const TopCategories = ({ categories }: TopCategoriesProps) => {
  return (
    <Box dir="rtl" w={{ base: '100%', lg: '90%' }} mx="auto" py="3rem" px="2rem">
      <SectionHeading title="استكشف أفضل التصنيفات" />

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap="4"
      >
        {categories.map((category) => (
          <GridItem key={category.id}>
            <TopCategoryCard category={category} />
          </GridItem>
        ))}
      </Grid>

      <Link href="/categories">
        <Button
          bgColor="white"
          variant="outline"
          borderColor="brand.primary"
          color="brand.primary"
          rounded="full"
          my="1rem"
          p="1rem"
          _hover={{ bgColor: 'brand.primary' , color: 'white' }}
        >
           جميع التصنيفات
        </Button>
      </Link>
    </Box>
  );
};

interface TopCategoryCardProps {
  category: ICategory;
}

const TopCategoryCard = ({ category }: TopCategoryCardProps) => (
  <Link href={`/categories/${category.id}`}>
    <Card
      direction="row"
      align="center"
      overflow="hidden"
      variant="outline"
      w="100%"
      p="10px"
      h="100%"
      rounded="md"
      transition="transform 0.3s ease-out, box-shadow 0.3s ease-out" // Smooth transition
      _hover={{
        cursor: 'pointer',
        bgColor: 'gray.100',
        boxShadow: 'lg', // Adjust the shadow intensity
        transform: 'translateY(-5px)', // Move the card slightly on hover
      }}
    >
      <CardBody>
        <Heading size={{ base: 'sm', lg: 'md' }}>{category.name}</Heading>
      </CardBody>
      <Image
        src={category.image}
        alt={category.name}
        height={100}
        width={100}
      />

    </Card>
  </Link>
);
