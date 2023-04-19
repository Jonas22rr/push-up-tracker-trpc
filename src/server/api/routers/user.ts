import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    get: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.user.findUnique({
            where: {
                id: ctx.session.user.id,
            },
        });
    }),
});
