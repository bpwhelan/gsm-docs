import React, {useEffect, useState} from 'react';

const PLACEHOLDER_SRC = '/img/placeholder.jpg';

interface ImageFrameProps {
  src: string;
  alt: string;
  caption?: string;
  width?: string | number;
}

export default function ImageFrame({ src, alt, caption, width }: ImageFrameProps): React.ReactElement {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <figure style={{ textAlign: 'center', margin: '1.5rem 0' }}>
      <img
        src={currentSrc}
        alt={alt}
        onError={() => {
          if (currentSrc !== PLACEHOLDER_SRC) {
            setCurrentSrc(PLACEHOLDER_SRC);
          }
        }}
        style={{
          maxWidth: width || '100%',
          borderRadius: '8px',
          border: '1px solid var(--ifm-color-emphasis-300)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
        }}
        loading="lazy"
      />
      {caption && (
        <figcaption
          style={{
            marginTop: '0.5rem',
            fontSize: '0.9rem',
            color: 'var(--ifm-color-emphasis-600)',
            fontStyle: 'italic',
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
