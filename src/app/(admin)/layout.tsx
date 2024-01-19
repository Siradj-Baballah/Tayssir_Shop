'use client';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Tayssir Shop</title>
        <meta title="description" content="اكتشف مستلزمات المدارس عالية الجودة بأسعار مميزة. من لوازم الدراسة والكتب إلى التقنيات التعليمية. اطلب اليوم لتجربة تسوق ممتازة وتوصيل سريع."  />
      </head>
      <body>{children}</body>
    </html>
  );
}
