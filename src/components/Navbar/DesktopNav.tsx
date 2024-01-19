import { navItems } from '@/helpers';
import { Box, Flex, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { AppLogo } from '../AppLogo';
import { Cart } from '../Cart/Cart';
import { Wishlist } from '../Wishlist/Wishlist';
import { Search } from '../Search/Search';
import { color } from 'framer-motion';

export function DesktopNav() {
  return (
    <Flex
      justify="space-between"
      alignItems="center"
      display={{ base: 'none', lg: 'flex' }}
      px="2rem"
      py="1rem"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Stack direction="row-reverse" spacing={2}>
        <Wishlist />
        <Cart />
      </Stack>

      <Search />

      <Stack direction="row-reverse" gap={6} alignItems="center">
        <Box mr="1rem">
          <AppLogo />
        </Box>

        {navItems.map((navItem) => (
          <Box key={navItem.label} _hover={{ color: 'brand.primary' }}>
            <Link href={navItem.href}>{navItem.label}</Link>
          </Box>
        ))}
      </Stack>

    </Flex>
  );
}
