import { useRecoilState, useRecoilValue } from "recoil";
import Card from "./Card";
import { PushUp } from "@prisma/client";
import { api } from "~/utils/api";

interface Props {
  data: PushUp[] | undefined;
}

export default function Sum(props: Props) {
  const { data: pushUps, isLoading, isError } = api.pushUps.getAll.useQuery();

  const getSum = () => {
    let sum = 0;
    pushUps?.map((pushUp) => {
      sum += Number(pushUp.pushUps);
    });
    return sum;
  };
  return (
    <Card paddingY="py-4">
      <span className="text-xl">Push-up Sum: {getSum()}</span>
    </Card>
  );
}
