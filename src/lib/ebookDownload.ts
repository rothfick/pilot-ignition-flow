export const EBOOK_PDF_URL = "/ebook/15-brutalnych-zasad-budowania-dochodowego-studia.pdf";
export const EBOOK_DOWNLOAD_PAGE_URL = "/ebook/download.html";
export const EBOOK_FILE_NAME = "15-brutalnych-zasad-budowania-dochodowego-studia.pdf";
export const EBOOK_PREVIEW_PAGES = Array.from(
  { length: 10 },
  (_, index) => `/ebook/preview/page-${String(index + 1).padStart(2, "0")}.jpg`,
);

type DownloadEvent = {
  preventDefault?: () => void;
  stopPropagation?: () => void;
};

export const downloadEbook = (event?: DownloadEvent) => {
  event?.preventDefault?.();
  event?.stopPropagation?.();

  if (typeof window === "undefined") return;

  const downloadPageUrl = new URL(EBOOK_DOWNLOAD_PAGE_URL, window.location.origin).toString();
  const popup = window.open(downloadPageUrl, "_blank", "noopener,noreferrer");

  if (!popup) {
    window.location.href = EBOOK_DOWNLOAD_PAGE_URL;
  }
};