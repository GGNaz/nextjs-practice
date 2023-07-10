"use server";

import { cookies } from "next/headers";

export async function create() {
  cookies().set("name", "lee");
  const cookieStore = cookies();
  const theme = cookieStore.get("name");
  return console.log("theme", theme);
}
