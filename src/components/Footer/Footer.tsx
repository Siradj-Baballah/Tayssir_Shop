import {
  Box,
  chakra,
  Container,
  IconButton,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BiMailSend } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { AppLogo } from '../AppLogo';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg="blackAlpha.100"
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        color:'white',
        bg: 'brand.primary',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box bg="blue.50" color="gray.700" mt="2rem" dir='rtl'>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr' }}
          spacing={12} // Increase spacing
        >
          <Stack spacing={4}>
            <Box>
              <AppLogo />
            </Box>
            <Text fontSize="sm" fontWeight="bold" >© كل الحقوق محفوظة 2024</Text>
          </Stack>

          <Stack align="flex-start">
            <ListHeader> 
              <Text fontSize='lg' dir='rtl' color="brand.darkBlue" fontWeight="bold">
                TAYSSIR{' '}
                <Text as="span" color='brand.primary'>
                   DZ
                </Text> 
                </Text>
              </ListHeader>
            <Stack spacing={3.8}> {/* Increase spacing */}
              <Link href={'#'} fontSize="sm" fontWeight="bold"_hover={{color:'brand.primary'}}>الصفحة الرئيسية للشركة</Link>
            </Stack>
          </Stack>

          <Stack  align="flex-start"> 
          <ListHeader>وسائل التواصل الاجتماعي</ListHeader>
              <Stack direction='row' spacing={4}>
              <SocialButton label="Instagram" href={'#'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label="Facebook" href={'#'}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label="Whatsapp" href={'#'}>
                <FaWhatsapp />
              </SocialButton>
              </Stack>
          </Stack>

          {/* <Stack align="flex-start">
            <ListHeader>احصل على افضل الصفقات</ListHeader>
            <Stack direction={'row'} spacing={6}>
              <Input
                placeholder="البريد الاكتروني "
                bg="blackAlpha.100"
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg="brand.primary"
                color="white"
                _hover={{
                  bg: 'brand.primaryDark',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack> */}

          

        </SimpleGrid>
      </Container>
    </Box>
  );
};
