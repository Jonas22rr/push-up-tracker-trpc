import Icon from "@mdi/react";
import { mdiCircle } from "@mdi/js";

interface Props {
  pushUps: string;
  duration: string;
  createdAt: Date;
}

export default function HistoryBox(props: Props) {
  return (
    <div className="rounded-md bg-[#363636] p-4 shadow-md">
      <div className="flex flex-row place-content-between place-items-center">
        <div>
          <span>Push Ups:&nbsp;</span>
          {props.pushUps}
        </div>
        <div className="flex flex-col">
          <div>Duration:&nbsp;{props.duration}</div>
          {props.createdAt.toLocaleString()}
        </div>
      </div>
    </div>
  );
}
