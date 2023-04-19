import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { PushUp } from "~/utils/types";

export const pushUpsRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.pushUp.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),
  create: protectedProcedure.input(PushUp).mutation(({ ctx, input }) => {
    return ctx.prisma.pushUp.create({
      data: {
        userId: ctx.session.user.id,
        ...input,
      },
    });
  }),
});
