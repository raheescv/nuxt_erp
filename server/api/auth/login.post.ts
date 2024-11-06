import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  const response = await fetch(process.env.API_BASE_URL + "/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    return data.message;
  }

  const token = data.token;
  return { token };
});
