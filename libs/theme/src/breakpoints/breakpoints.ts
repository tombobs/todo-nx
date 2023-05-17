export interface PictureBreakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}


export const breakpoints: PictureBreakpoints = {
  xs: 400,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560,
};


export const makeFilename = (baseUrl: string) => (breakpoint: number, src?: string): string => {
  if (!src) {
    return '';
  }
  const parts = src.split('.');
  const extension = parts.pop()!;
  const nameWithoutExtension = parts.join('.');
  return `${baseUrl}/${src}/${nameWithoutExtension}_${breakpoint}.${extension}`;
}
