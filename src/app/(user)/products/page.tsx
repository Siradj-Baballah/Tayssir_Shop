import { Hero } from '@src/components/Hero/Hero';
import { AllProducts } from '@src/features/products';
import { IProduct } from '@src/model';
import { client } from '@utils/sanity.client';
import { groq } from 'next-sanity';

const getAllProductsQueries: string = `
    *[_type == "product"] {
        "id": _id,
        name,
        description,
        price,   
        rating,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
    }
`;

const getProductsAsync = () => {
  return client.fetch(groq`${getAllProductsQueries}`);
};

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function ProductsPage() {
  const products: IProduct[] = await getProductsAsync();

  return (
    <>
      <Hero
        heading="أفضل المنتجات بجودة عالية"
        description="نقدم لكم منتجات بأسعار مناسبة مع خدمة توصيل سريعة لكل الولايات . تم توفير هذه المنتجات خصيصًا لتسهيل إدارة المدارس، وتقديم أفضل وسائل الراحة لطلابها. بالإضافة إلى ذلك، تلعب هذه المنتجات دورًا في تعزيز مكانة المدارس  وظهورها بشكل لائق عبر منصات التواصل الاجتماعي ."
        imageUrl="modern-stationary-collection-arrangement.jpg"
        btnLabel="عرض كل التصنيفات"
        btnLink="/categories"
      />
      <AllProducts products={products} />
    </>
  );
}
