import CvPage from "@/components/cv/CvPage";
import { buildCvMetadata } from "@/lib/seo";

export const metadata = buildCvMetadata("en");

export default function Cv() {
  return <CvPage locale="en" />;
}
