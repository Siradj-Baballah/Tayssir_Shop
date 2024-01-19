import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import { AppContext } from '@src/context/AppContext';
import { useContext } from 'react';
import { BsHeart } from 'react-icons/bs';
import { WishlistItem } from './WishlistItem';

export const Wishlist = () => {
  const {
    state: { wishlist },
    resetItems,
  } = useContext(AppContext);

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          color="brand.primary"
          variant="ghost"
          _hover={{
            bgColor: 'transparent',
          }}
          pos="relative"
        >
          <BsHeart size="1rem" /> <Text mx="1" fontSize="0.9rem">العناصر المفضلة</Text>
          {wishlist.length !== 0 && (
            <Flex
              pos="absolute"
              top="0px"
              right="5px"
              bgColor="brand.primaryLight"
              boxSize="15px"
              rounded="full"
              color="white"
              fontSize="0.6rem"
              align="center"
              justify="center"
            >
              {wishlist.length}
            </Flex>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent minW="420px">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontSize="1rem" color="brand.primary" fontWeight="bold">
        العناصر المفضلة 
        </PopoverHeader>
        <PopoverBody p="1rem">
          {wishlist.length === 0 ? (
            <> قائمة العناصر المفضلة فارغة </>
          ) : (
            wishlist.map((item) => <WishlistItem key={item.id} item={item} />)
          )}
        </PopoverBody>
        <PopoverFooter>
          {wishlist.length !== 0 && (
            <Button
            fontSize='0.9rem'
              variant="outline"
              mr={3}
              onClick={() => resetItems('wishlist')}
            >
              امسح العناصر المفضلة
            </Button>
          )}
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
