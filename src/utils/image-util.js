function getImageURL(img) {
  return new URL(`../assets/images/${img}`, import.meta.url).href;
}

export {getImageURL};