/**
 * Course card images from `public/courses/` (served as `/courses/...`).
 * Filenames must match files on disk (case-sensitive on Linux hosts).
 */
const c = (filename: string) => `/courses/${filename}`;

export const courseImages = {
  mba: c("mba_premium.jpg"),
  bba: c("bba_premium.jpg"),
  mca: c("mca_premium.jpg"),
  bca: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  mCom: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
  bCom: c("bcom_premium.jpg"),
  ma: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
  ba: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
} as const;

/** Home “Online Courses” strip — same assets as /courses catalog */
export const courseImageByHomeTitle: Record<string, string> = {
  "Master of Business Administration (MBA)": courseImages.mba,
  "Online MBA": courseImages.mba,
  "Online MCA": courseImages.mca,
  "Online BBA": courseImages.bba,
  "Online BCA": courseImages.bca,
  "Online B.Com": courseImages.bCom,
  "Online M.Com": courseImages.mCom,
  "Online BA": courseImages.ba,
  "Online MA": courseImages.ma,
};

/** Detail pages & any UI keyed by exact course title */
export function courseImageForTitle(title: string): string {
  return courseImageByHomeTitle[title] ?? courseImages.mba;
}
