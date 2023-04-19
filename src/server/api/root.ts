import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { pushUpsRouter } from "~/server/api/routers/pushUps";
import { accountRouter } from "~/server/api/routers/account";
import { userRouter } from "~/server/api/routers/user";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    example: exampleRouter,
    pushUps: pushUpsRouter,
    account: accountRouter,
    user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
