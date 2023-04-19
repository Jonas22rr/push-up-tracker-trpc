import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const accountRouter = createTRPCRouter({
    get: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.account.findFirst({
            where: {
                userId: ctx.session.user.id,
            },
        });
    }),
});
