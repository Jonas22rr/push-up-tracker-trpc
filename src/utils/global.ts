import { atom } from "recoil";
import { PushUp } from "@prisma/client";

export const pushUpState = atom<PushUp[]>({
  key: "pushUpState",
  default: [],
});
