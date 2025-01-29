
import Container from "@/components/Container";
import FeaturedPosts from "@/components/FeatuedPost";
import Fluid from "@/components/Fluid";
import HeroSection from "@/components/heroSection";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import ShopCards from "@/components/ShopCards";
import Summer from "@/components/Summer";

export default function Home() {
  return (
   <div>
    <HeroSection/>

   <Container className="py-10" >
    <ShopCards/>
    <HomeBanner/>
    <ProductGrid/>
   </Container>
   <Summer/>
   <Container className="">
          <Fluid/>
          <FeaturedPosts/>
   </Container>


   </div>
  );
}
