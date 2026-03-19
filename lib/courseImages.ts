/**
 * Course card images from `public/courses/` (served as `/courses/...`).
 * Filenames must match files on disk (case-sensitive on Linux hosts).
 */
const c = (filename: string) => `/courses/${filename}`;

export const courseImages = {
  mba: c("MBA.webp"),
  bba: c("BBA.webp"),
  mca: c("MCA.jpeg"),
  bca: c("BCA.webp"),
  mCom: c("mcom.png"),
  bCom: c("bcom.jpeg"),
  ma: c("MA.jpeg"),
  ba: c("BA.jpeg"),
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
