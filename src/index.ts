export const greeting = (name?: string) => {
  return `Hello, ${name ? name : "world"}!`;
};
