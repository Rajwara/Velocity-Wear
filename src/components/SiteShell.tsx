import Footer from "@/components/Footer";
import Header, { type HeaderVariant } from "@/components/Header";
import WebflowPage, { type WebflowPageProps } from "@/components/WebflowPage";

/** Standard page frame: header, page content and footer. */
export default function SiteShell({
  headerVariant = "base",
  children,
  ...page
}: WebflowPageProps & { headerVariant?: HeaderVariant }) {
  return (
    <WebflowPage {...page}>
      <div className="page-wrapper">
        <Header variant={headerVariant} />
        {children}
        <Footer pageId={page.pageId} />
      </div>
    </WebflowPage>
  );
}
