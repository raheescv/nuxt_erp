import { defineEventHandler, getHeader } from "h3";

export default defineEventHandler(async (event) => {
  const token = getHeader(event, "Authorization")?.replace("Bearer ", "");
  if (!token) {
    throw new Error("Unauthorized");
  }

  const response = await fetch(`${process.env.API_BASE_URL}/api/v1/user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  try {
    if (!response.ok) {
      throw new Error("something went wrong!");
    }
    const data = await response.json();
    return data.user;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
});
