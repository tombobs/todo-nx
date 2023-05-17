import { breakpoints, makeFilename } from '@todo-nx/theme';
import { CSSProperties, DetailedHTMLProps, ImgHTMLAttributes } from 'react';

const baseUrl = 'https://assets.tom-roberts.dev/images';
export const makeUrl = makeFilename(baseUrl);

export interface PictureProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
  alt?: string;
  styles?: CSSProperties;
}

export function Picture({ src, alt, styles, ...props }: PictureProps) {
  return (
    src && <picture style={{ width: '100%', height: '100%', ...styles }} {...props}>
      {Object.values(breakpoints).map((breakpoint: number) => (
        <source
          key={breakpoint}
          media={`(max-width: ${breakpoint}px)`}
          srcSet={makeUrl(breakpoint, src)}
        />
      ))}
      <img
        src={`${baseUrl}/${src}/${src}`}
        alt={alt}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </picture> || <></>
  );
}
