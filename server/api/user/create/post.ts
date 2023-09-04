import { PrismaClient } from "@prisma/client";
import { serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  try {
    const user = await serverSupabaseUser(event);
    if (!user) {
      return {
        success: false,
        error: "User not found",
      };
    }
    const prisma = new PrismaClient();
    await prisma.user.create({
      data: {
        id: user.id,
      },
    });
    return {
      success: true,
    };
  } catch (err: any) {
    return {
      success: false,
      error: err.message as string,
    };
  }
});
