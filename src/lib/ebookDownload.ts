export const EBOOK_PDF_URL = "/ebook/15-brutalnych-zasad-budowania-dochodowego-studia.pdf";
export const EBOOK_DOWNLOAD_PAGE_URL = "/ebook/download.html";
export const EBOOK_FILE_NAME = "15-brutalnych-zasad-budowania-dochodowego-studia.pdf";

type DownloadEvent = {
  preventDefault?: () => void;
  stopPropagation?: () => void;
};

export const downloadEbook = (event?: DownloadEvent) => {
  event?.preventDefault?.();
  event?.stopPropagation?.();

  if (typeof window === "undefined") return;

  const link = document.createElement("a");
  link.href = EBOOK_PDF_URL;
  link.download = EBOOK_FILE_NAME;
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  link.remove();
};