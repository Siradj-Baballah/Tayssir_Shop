import {
  Stack,
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { navItems } from '@src/helpers';
import Link from 'next/link';
import React, { useRef } from 'react';
import { VscListFlat } from 'react-icons/vsc';
import { AppLogo } from '../AppLogo';

export const NavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <VscListFlat />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader >
            <AppLogo/>
            <DrawerCloseButton left={4} top={4}/>            
          </DrawerHeader>
          
          
          
          <Divider />

          <DrawerBody dir='rtl'>
            {navItems.map((navItem) => (
              <Link href={navItem.href} key={navItem.label}>
                <Box
                  p="0.5rem"
                  _hover={{ bgColor: 'brand.primaryLight', color: 'white' }}
                >
                  {navItem.label}
                </Box>
              </Link>
            ))}
          </DrawerBody>

          <DrawerFooter justifyContent="flex-start">
            <Button variant="outline" mr={3} onClick={onClose}>
              إغلاق
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
