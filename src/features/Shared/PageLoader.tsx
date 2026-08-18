import LoadingModel from "@/components/Loaders/LoadingModel";
import { usePageLoader } from "@/hooks/usePageLoader";
import { createPortal } from "react-dom";

function PageLoader({ message = "Loading..." }: { message?: string }) {
  const { showLoader, hideLoader } = usePageLoader();

  if (!showLoader) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-9999 transition-opacity duration-600 ${
        hideLoader ? "opacity-0" : "opacity-100"
      }`}
    >
      <LoadingModel message={message} />
    </div>,
    document.body,
  );
}

export default PageLoader;
