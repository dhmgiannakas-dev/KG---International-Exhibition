
import { useEffect, useState } from "react";

/**
 * Reusable exhibition gallery.
 *
 * mode="main"       -> Large selected image.
 * mode="thumbnails" -> Clickable thumbnail grid.
 */
export default function ExhibitionGallery({
  images = [],
  title = "Exhibition stand",
  projectId,
  selectedIndex = 0,
  onSelect = () => {},
  mode = "main",
}) {
  const [failedImages, setFailedImages] = useState([]);

  // Reset failed images when project changes.
  useEffect(() => {
    setFailedImages([]);
  }, [projectId]);

  const validImages = (Array.isArray(images) ? images : [])
    .map((url, index) => ({ url, index }))
    .filter(
      ({ url }) =>
        typeof url === "string" &&
        url.trim() !== ""
    );

  const availableImages = validImages.filter(
    ({ url }) => !failedImages.includes(url)
  );

  const selectedImage =
    availableImages.find(
      ({ index }) => index === selectedIndex
    ) ?? availableImages[0];

  const handleImageError = (url) => {
    setFailedImages((previous) =>
      previous.includes(url)
        ? previous
        : [...previous, url]
    );
  };

  if (!availableImages.length) {
    return (
      <div
        className="kg-exhibition-gallery__empty"
        role="status"
      >
        Project images are currently unavailable.
      </div>
    );
  }

  // ======================================
  // THUMBNAIL GRID
  // ======================================
  if (mode === "thumbnails") {
    return (
      <div className="kg-exhibition-gallery__below">

        <div className="kg-exhibition-gallery__heading">
          <h3>Project gallery</h3>
        </div>

        <div
          className="kg-exhibition-gallery__grid"
          aria-label="Project photos"
        >
          {availableImages.map(({ url, index }) => (
            <button
              key={`${projectId}-${url}`}
              type="button"
              className={
                `kg-exhibition-gallery__thumb ${
                  selectedImage?.index === index
                    ? "is-active"
                    : ""
                }`
              }
              onClick={() => onSelect(index)}
              aria-label={`Show photo ${index + 1} of ${title}`}
              aria-pressed={selectedImage?.index === index}
            >
              <img
                src={url}
                alt={`${title} thumbnail ${index + 1}`}
                loading="lazy"
                onError={() => handleImageError(url)}
              />
            </button>
          ))}
        </div>

      </div>
    );
  }

  // ======================================
  // MAIN PROJECT IMAGE
  // ======================================
  return (
    <div className="kg-exhibition-gallery">

      <div className="kg-exhibition-gallery__main">
        <img
          key={selectedImage.url}
          src={selectedImage.url}
          alt={`${title} exhibition stand — image ${
            selectedImage.index + 1
          }`}
          onError={() => handleImageError(selectedImage.url)}
        />
      </div>

    </div>
  );
}
