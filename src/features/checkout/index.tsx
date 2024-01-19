'use client';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import { AppContext } from '@src/context/AppContext';
import { calculateItemsTotal, formatPrice, getSubstring } from '@src/helpers';
import React, { useContext, useEffect, useState } from 'react';

export const Checkout = () => {
  const [subTotal, setSubTotal] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);

  const {
    state: { checkout },
  } = useContext(AppContext);

  useEffect(() => {
    const subTotal = calculateItemsTotal(checkout);
    const tax = 0.1 * subTotal;
    setSubTotal(subTotal);
    setTax(tax);
  }, [checkout]);
  return (
    <Flex
      w={{ base: '100%', lg: '90%' }}
      mx="auto"
      flexDir={{ base: 'column', lg: 'row-reverse' }}
      gap="2rem"
    >
      <Stack spacing={10} w={{ base: '100%', lg: '60%' }} dir="rtl">
        <Card borderWidth="1px" borderColor="gray.200" shadow="none">
          <CardHeader>
            <Heading size="md">مراجعة المنتجات</Heading>
          </CardHeader>

          <CardBody>
            <Stack spacing="2rem">
              {checkout.map((item) => (
                <Flex key={item.id} align="center" justify="space-between">
                  <Flex align="center">
                    <Image
                      src={item.mainImage}
                      boxSize="100px"
                      bgSize="contain"
                    />
                    <Box mx="1rem">
                      <Text
                        fontWeight="bold"
                        fontSize={{ base: 'sm', lg: 'lg' }}
                        maxW="500px"
                      >
                        {item.name}
                      </Text>
                      <Text color="gray.500">
                        {getSubstring(item.description, 50)}
                      </Text>
                    </Box>
                  </Flex>
                  <Box textAlign="right">
                    <Text fontWeight="bold" fontSize={{ base: 'md', lg: 'lg' }}>
                      {formatPrice(item.price)} DA
                    </Text>
                    <Text fontSize={{ base: 'sm', lg: 'md' }}>
                      العدد: {item.count}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Stack>
          </CardBody>
        </Card>

        <Card borderWidth="1px" borderColor="gray.200" shadow="none" >
          <CardHeader>
            <Heading size="md">ادخل المعلومات الخاصة بك :</Heading>
          </CardHeader>

          <CardBody>
            <Stack spacing="2rem">
              <Box>
                <FormLabel>الإسم الكامل</FormLabel>
                <Input type="text" placeholder="الاسم الكامل" />
              </Box>

              <Box>
                <FormLabel>رقم الهاتف</FormLabel>
                <Input type="number" placeholder="رقم الهاتف" />
              </Box>

              <Box>
                <FormLabel>الولاية</FormLabel>
                <Input type="text" placeholder="الولاية" />
              </Box>

              <Box>
                <FormLabel>العنوان</FormLabel>
                <Input type="text" placeholder="العنوان" />
              </Box>

            </Stack>
          </CardBody>
        </Card>
        
      </Stack>

      <Box w={{ base: '100%', lg: '40%' }}>
        <Card borderWidth="1px" borderColor="gray.200" shadow="none" p="2rem">
          <CardHeader>
            <Heading dir="rtl" size="md">معلومات الدفع</Heading>
          </CardHeader>

          <CardBody>
            <Stack spacing="2rem">
              <Flex dir='rtl'>
                <Input
                  type="text"
                  placeholder="ادخل كوبون كود"
                  borderRightRadius="full"
                />
                <Button
                  bgColor="brand.primary"
                  color="white"
                  borderLeftRadius="full"
                  ml="-40px"
                  px="2rem"
                  _hover={{
                    bgColor: 'brand.primaryDark',
                  }}
                  _active={{
                    bgColor: 'brand.primaryDark',
                  }}
                >
                  تطبيق الكوبون
                </Button>
              </Flex >
              <Divider mt="1rem" />

              <Box dir='rtl'>
                <Heading size="xs" my="1rem">
                  طرق الدفع
                </Heading>
                  <Radio mb="1rem" value="cashOnDelivery" defaultChecked >الدفع عند الاستلام</Radio>
              </Box>
            </Stack>
            <Divider mt="1rem" />

            <Box dir='rtl'>
              <Flex justify="space-between" align="center" my="1rem">
                <Text fontWeight="bold">المجموع :</Text>
                <Text fontWeight="bold">{formatPrice(subTotal)} DA</Text>
              </Flex>

              {/* <Flex justify="space-between" align="center" my="1rem">
                <Text fontWeight="bold">Tax(10%)</Text>
                <Text fontWeight="bold">{formatPrice(tax)} DA</Text>
              </Flex> */}

              {/* <Flex justify="space-between" align="center" my="1rem">
                <Text fontWeight="bold">Coupon Discount</Text>
                <Text fontWeight="bold">-{formatPrice(tax)} DA</Text>
              </Flex> */}

              <Flex justify="space-between" align="center" my="1rem">
                <Text fontWeight="bold">تكاليف التوصيل</Text>
                <Text fontWeight="bold">أزيد من 400 DA</Text>
              </Flex>
              <Divider />
            </Box>

            <Button
              bgColor="brand.primary"
              color="white"
              w="100%"
              rounded="full"
              _hover={{
                bgColor: 'brand.primaryDark',
              }}
              _active={{
                bgColor: 'brand.primaryDark',
              }}
            >
              تأكيد الطلب
            </Button>
          </CardBody>
        </Card>
      </Box>
    </Flex>
  );
};
