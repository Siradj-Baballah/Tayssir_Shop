import { Hero } from '@src/components/Hero/Hero';
import { AllCategories } from '@src/features/categories';
import { ICategory } from '@src/model';
import { client } from '@utils/sanity.client';
import { groq } from 'next-sanity';

const getAllCategoriesQueries = `
    *[_type == "category"] {
        "id": _id,
        name,
        "slug": slug.current,
        "image": image.asset->url 
    }
`;

const getCategoriesAsync = () => {
  return client.fetch(groq`${getAllCategoriesQueries}`);
};

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function AllCategoriesPage() {
  const categories: ICategory[] = await getCategoriesAsync();

  return (
    <>
      <Hero
        heading="الجودة والتنوع في مكان واحد"
        description="تصفح مجموعتنا المتنوعة من المنتجات  المناسبة و المفضلة لديك لتجد الجودة والتنوع في مكان واحد"
        imageUrl="/modern-stationary.jpg"
        btnLabel="عرض كل المنتجات"
        btnLink="/products"
      />
      <AllCategories categories={categories} />
    </>
  );
}
