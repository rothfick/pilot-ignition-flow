export const EBOOK_PDF_URL = "/ebook/czarny-zeszyt.pdf";
export const EBOOK_DOWNLOAD_PAGE_URL = "/ebook/download.html";
export const EBOOK_FILE_NAME = "Czarny-Zeszyt.pdf";

type DownloadEvent = {
  preventDefault?: () => void;
  stopPropagation?: () => void;
};

const isInsideFrame = () => {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
};

export const downloadEbook = (event?: DownloadEvent) => {
  event?.preventDefault?.();
  event?.stopPropagation?.();

  if (typeof window === "undefined") return;

  if (isInsideFrame()) {
    const popup = window.open(EBOOK_DOWNLOAD_PAGE_URL, "_blank", "noopener,noreferrer");
    if (popup) return;
  }

  const link = document.createElement("a");
  link.href = EBOOK_PDF_URL;
  link.download = EBOOK_FILE_NAME;
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  link.remove();
};