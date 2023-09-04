import { serverSupabaseUser } from "#supabase/server";
import { PrismaClient } from "@prisma/client";
import prisma from "~/server/utils/prisma";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  if (!id) {
    setResponseStatus(event, 300);
    return {
      success: false,
      error: "Id not supplied",
    };
  }
  const dbUser = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return {
    success: !!dbUser,
    data: dbUser,
  };
});
