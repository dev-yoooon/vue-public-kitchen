

export const getImage = ($url) => {
    return new URL($url, import.meta.url).href;
}