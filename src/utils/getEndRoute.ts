const getEndRoute: () => string = () => {
  const path = window.location.pathname; // Get the current path
  const segments = path.split("/"); // Split by '/'
  const endRoute = segments[segments.length - 1]; // Get the last segment
  return endRoute || "home"; // Return 'home' if the path is root
};

export { getEndRoute };
