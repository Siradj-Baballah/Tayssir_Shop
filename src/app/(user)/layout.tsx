'use client';

import 'swiper/swiper.min.css';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from '@/components/Navbar/NavBar';
import { theme } from '@/theme';
import AppContextProvider from '@src/context/AppContext';
import { Footer } from '@src/components/Footer/Footer';
import './styles.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Tayssir Shop</title>
        <meta title="description" content="اكتشف مستلزمات المدارس عالية الجودة بأسعار مميزة. من لوازم الدراسة والكتب إلى التقنيات التعليمية. اطلب اليوم لتجربة تسوق ممتازة وتوصيل سريع." />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="shopping_cart.png"
        />
      </head>
      <body style={{fontSize:'16px'}}>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <AppContextProvider>
              <Navbar />
              {children}
              <Footer />
            </AppContextProvider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
