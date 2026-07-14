import { useParams } from "react-router-dom";
import { loadBrandMcatContext } from "@/lib/brandMcatContext";
import { useTitle } from "@/lib/useTitle";
import NotFound from "@/components/NotFound";
import BrandMcatPageBody from "@/components/BrandMcatPageBody";
import ProductCardV3 from "@/components/ProductCardV3";

export default function BrandMcatPageV3() {
  const { slug = "", category = "" } = useParams<{ slug: string; category: string }>();
  const ctx = loadBrandMcatContext(slug, category);
  useTitle(ctx ? `${ctx.line.name} — ${ctx.cat.name} | Brands` : "Brand Catalog — Brands");
  if (!ctx) return <NotFound />;
  return <BrandMcatPageBody slug={slug} category={category} active={3} CardComponent={ProductCardV3} />;
}
