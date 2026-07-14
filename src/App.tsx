import { Routes, Route } from "react-router-dom";
import Root from "@/Root";
import HomePage from "@/routes/HomePage";
import BrandsPage from "@/routes/BrandsPage";
import CategoriesPage from "@/routes/CategoriesPage";
import CategoryPage from "@/routes/CategoryPage";
import PCategoryPage from "@/routes/PCategoryPage";
import ProductPage from "@/routes/ProductPage";
import SearchPage from "@/routes/SearchPage";
import BrandPage from "@/routes/BrandPage";
import BrandMcatPage from "@/routes/BrandMcatPage";
import BrandMcatPageV1 from "@/routes/BrandMcatPageV1";
import BrandMcatPageV2 from "@/routes/BrandMcatPageV2";
import BrandMcatPageV3 from "@/routes/BrandMcatPageV3";
import BrandMcatPageV4 from "@/routes/BrandMcatPageV4";
import BrandMcatPageV5 from "@/routes/BrandMcatPageV5";
import NotFound from "@/components/NotFound";

export default function App() {
  return (
    <Root>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/pcategory/:slug" element={<PCategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/brand/:slug" element={<BrandPage />} />
        <Route path="/brand/:slug/:category" element={<BrandMcatPage />} />
        <Route path="/brand/:slug/:category/v1" element={<BrandMcatPageV1 />} />
        <Route path="/brand/:slug/:category/v2" element={<BrandMcatPageV2 />} />
        <Route path="/brand/:slug/:category/v3" element={<BrandMcatPageV3 />} />
        <Route path="/brand/:slug/:category/v4" element={<BrandMcatPageV4 />} />
        <Route path="/brand/:slug/:category/v5" element={<BrandMcatPageV5 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Root>
  );
}
