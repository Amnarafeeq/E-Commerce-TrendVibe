import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

export const getProductBySlug = async (slug: string) => {
  const PRODUCT_BY_SLUG_QUERY = defineQuery(
    `*[_type =="product" && slug.current == $slug] | order(name asc)[0] `
  );
  try {
    const product = await sanityFetch({
      query: PRODUCT_BY_SLUG_QUERY,
      params: { slug },
    });
    return product.data || null;
  } catch (error) {
    console.error("Error fetching product by slug", error);
  }
};

export const getAllCategories = async () => {
  const CATEGORIES_QUERY = defineQuery(
    `*[_type == "category"] | order(name asc)`
  );
  try {
    const categories = await sanityFetch({
      query: CATEGORIES_QUERY,
    });
    return categories.data || [];
  } catch (error) {
    console.error("Error fetching categories", error);
    return [];
  }
};

export const getMyOrders = async (userId: string) => {
  if (!userId) {
    throw new Error("User ID is required");
  }

  const MY_ORDERS_QUERY =
    defineQuery(`*[_type == "order" && clerkUserId == $userId] 
        | order(orderData desc) {
            ...,
            products[]{
                ...,product->
            }
        } 
    `);

  try {
    const orders = await sanityFetch({
      query: MY_ORDERS_QUERY,
      params: { userId },
    });

    if (!orders?.data || orders.data.length === 0) {
      console.log("No orders found for the user.");
      return [];
    }

    console.log("Fetched orders:", orders.data);

    return orders.data;
  } catch (error) {
    console.error("Error fetching orders:", (error as Error)?.message || error);
    return [];
  }
};
