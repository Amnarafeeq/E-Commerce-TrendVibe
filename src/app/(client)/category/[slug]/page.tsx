import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";
import { getAllCategories } from "@/sanity/helpers/queries";
import React from "react";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const categories = await getAllCategories();
  return (
    <Container className="my-10">
      <h2 className="mt-8 text-center">
        Products by Category{" "}
        <span className="text-textColor2 font-semibold capitalize">{slug}</span>
      </h2>
      <CategoryProducts categories={categories} slug={slug} />
    </Container>
  );
};

export default CategoryPage;
