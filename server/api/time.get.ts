export default defineEventHandler(async () => {
  const now = new Date().toISOString();
  return {
    message: `Hello from Cloudflare Workers! The current time is ${now}`,
  };
});
