
import React from "react";
import PhotoAlbum from "react-photo-album";
export default function Gallery({photos}) {
  
    return <PhotoAlbum layout="columns" photos={photos}  renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
        <a href={photo.href} style={wrapperStyle} target="_blank" rel="noreferrer noopener">
            {renderDefaultPhoto({ wrapped: true })}
        </a>
    )}
    sizes={{
        size: "800px",
        sizes: [
            { viewport: "(max-width: 767px)", size: "calc(100vw - 32px)" },
            { viewport: "(max-width: 1279px)", size: "calc(100vw - 288px)" },
        ],
    }}
  
    />;
}