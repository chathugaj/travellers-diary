const formatToReadableDate = (date) => {
  const d = new Date(date).toLocaleDateString();
  return d;
};

const getCookie = (name) => {
  if (!document.cookie) {
    return null;
  }

  const xsrfCookies = document.cookie
    .split(";")
    .map((c) => c.trim())
    .filter((c) => c.startsWith(name + "="));

  if (xsrfCookies.length === 0) {
    return null;
  }
  return decodeURIComponent(xsrfCookies[0].split("=")[1]);
};

const parseCookieString = (cookie) => {
  return decodeURIComponent(cookie.split("=")[1]);
};

export { formatToReadableDate, getCookie, parseCookieString };
