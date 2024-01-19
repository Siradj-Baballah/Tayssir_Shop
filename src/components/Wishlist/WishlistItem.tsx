import { Button, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { AppContext } from '@src/context/AppContext';
import { getSubstring } from '@src/helpers';
import { IItem } from '@src/model';
import Link from 'next/link';
import { useContext } from 'react';
import { BsCart, BsCart4, BsCartX, BsTrash } from 'react-icons/bs';

interface WishlistItemProps {
  item: IItem;
}

export const WishlistItem = ({ item }: WishlistItemProps) => {
  const { addItem, removeItem, isAdded } = useContext(AppContext);

  return (
    <Grid
      alignItems="center"
      templateColumns="repeat(8, 1fr)"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      my="2"
      py="1"
    >
      <GridItem colSpan={1} textAlign="center">
        <Link href={item.slug}>
          <Image
            textAlign="center"
            src={item.mainImage}
            boxSize="25px"
            // rounded="full"
            borderWidth="1px"
            borderColor="gray.300"
          />
        </Link>
      </GridItem >
      <GridItem colSpan={3} textAlign="center">
        <Link href={item.slug}>
          <Text fontSize="md" title={item.name}>
            {getSubstring(item.name, 12)}
          </Text>
        </Link>
      </GridItem >

      <GridItem colSpan={2} textAlign="center">
        <Text fontWeight="bold" fontSize="sm">
          {item.price} DA
        </Text>
      </GridItem>

      <GridItem textAlign="center" colSpan={1}>
        {isAdded('cart', item.id) ? (
          <Button
            size="xs"
            bgColor="white"
            borderWidth="1px"
            borderColor="gray.300"
            color="gray.500"
            title="Remove from Cart"
            onClick={() => removeItem('cart', item.id)}
          >
            <BsCart4 />
          </Button>
        ) : (
          <Button
            size="xs"
            bgColor="white"
            borderWidth="1px"
            borderColor="brand.primary"
            color="brand.primary"
            title="Add to Cart"
            onClick={() => addItem('cart', item)}
            _hover={{
              color:'white',
              bgColor:"brand.primary"
            }}
          >
            <BsCart4 />
          </Button>
        )}
      </GridItem>

      <GridItem textAlign="center" colSpan={1}>
        <Button
          variant="ghost"
          colorScheme="red"
          size="xs"
          onClick={() => removeItem('wishlist', item.id)}
        >
          <BsTrash />
        </Button>
      </GridItem>
    </Grid>
  );
};
