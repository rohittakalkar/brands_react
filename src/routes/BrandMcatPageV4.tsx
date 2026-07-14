import { useParams } from "react-router-dom";
import { loadBrandMcatContext } from "@/lib/brandMcatContext";
import { useTitle } from "@/lib/useTitle";
import NotFound from "@/components/NotFound";
import BrandMcatPageBody from "@/components/BrandMcatPageBody";
import ProductCardV4 from "@/components/ProductCardV4";

export default function BrandMcatPageV4() {
  const { slug = "", category = "" } = useParams<{ slug: string; category: string }>();
  const ctx = loadBrandMcatContext(slug, category);
  useTitle(ctx ? `${ctx.line.name} — ${ctx.cat.name} | Brands` : "Brand Catalog — Brands");
  if (!ctx) return <NotFound />;
  return <BrandMcatPageBody slug={slug} category={category} active={4} CardComponent={ProductCardV4} />;
}
