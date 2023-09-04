import { PrismaClient } from "@prisma/client";
import { serverSupabaseUser } from "#supabase/server";
import prisma from "~/server/utils/prisma";

export default defineEventHandler(async (event) => {
  try {
    const user = await serverSupabaseUser(event);
    if (!user) {
      return {
        success: false,
        error: "User not found",
      };
    }
    await prisma.user.create({
      data: {
        id: user.id,
      },
    });
    return {
      success: true,
      error: null,
    };
  } catch (err: any) {
    return {
      success: false,
      error: err.message as string,
    };
  }
});
