export const UseReplace = (query, value) => {
  let url = new URL(window.location.href);
  // console.log(url, 'url');
  url.searchParams.set(query, value);
  if (!value && value !== 0) {
    url.searchParams.delete(query);
  }

  return url.search;
};