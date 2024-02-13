// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Telecomunicaciones Blog";
export const SITE_DESCRIPTION =
  "Blog about telecommunications technology and news.";
export const TWITTER_HANDLE = "@angelmp";
export const MY_NAME = "Angel Padrino && Luis Ron";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
