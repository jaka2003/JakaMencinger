import CvPage from "@/components/cv/CvPage";
import { buildCvMetadata } from "@/lib/seo";

export const metadata = buildCvMetadata("sl");

export default function Cv() {
  return <CvPage locale="sl" />;
}
