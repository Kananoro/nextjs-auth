/**
 *An array of routes that are accesible to the public
 *This routes do not require authentication
 *@type {string[]}
 */
export const publicRoutes = ["/"];

/**
 *An array of routes that are used for authentication
 *This routes will redirect logged in user to /settings
 *@type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 *The prefix for API authentication routes
 *Routes that start with this prefixes aru used for API authentication purposes
 *@type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logged in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
