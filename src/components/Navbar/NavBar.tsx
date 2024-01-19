import { Box } from '@chakra-ui/react';
import { Search } from '../Search/Search';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

export const Navbar = () => {
  return (
    <>
      <Box className="navbar-wrapper" h={{base:'110px' , lg:'82px' }}>
        <Box pos="fixed" w="100%" bgColor="white" zIndex={10}>
          <DesktopNav/>
          <MobileNav />
        </Box>
      </Box>
    </>
  );
};
