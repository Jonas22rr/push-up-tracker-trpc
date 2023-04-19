import type { inferRouterOutputs } from "@trpc/server";
import { z } from "zod";
import type { AppRouter } from "../server/api/root";

type RouterOutput = inferRouterOutputs<AppRouter>;
type AllPushUpsOutput = RouterOutput["pushUps"]["getAll"];

export type PushUps = AllPushUpsOutput;

export const PushUp = z.object({
  id: z.any(),
  createdAt: z.date(),
  stoppedAt: z.date(),
  time: z.string(),
  pushUps: z.string(),
});
