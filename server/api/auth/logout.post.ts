import { defineEventHandler } from "h3";

export default defineEventHandler(() => {
  return { success: true, message: "Signed out successfully" };
});
