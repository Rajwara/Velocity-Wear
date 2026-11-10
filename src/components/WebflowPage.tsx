import type { ReactNode } from "react";
import WebflowRuntime from "@/components/WebflowRuntime";
import type { Bundle } from "@/components/webflow-config";

export type WebflowPageProps = {
  /** Webflow page id; the interaction bundles use it to find their targets. */
  pageId: string;
  /** Which Webflow interaction bundle the page needs. */
  bundle: Bundle;
  /** Page specific CSS (hides animated elements until interactions are ready). */
  styles?: string;
  children: ReactNode;
};

/** A page without the site header/footer (log in, sign up, password pages). */
export default function WebflowPage({ pageId, bundle, styles, children }: WebflowPageProps) {
  return (
    <>
      {styles ? <style dangerouslySetInnerHTML={{ __html: styles }} /> : null}
      {children}
      <WebflowRuntime pageId={pageId} bundle={bundle} />
    </>
  );
}
