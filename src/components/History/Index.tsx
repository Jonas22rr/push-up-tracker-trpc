import HistoryBox from "./HistoryBox";
import NoEntryBox from "./NoEntryBox";
import { PushUp } from "@prisma/client";

export default function HistoryIndex(props: { histories: PushUp[] }) {
    return (
        <div className="container mx-auto  pt-20 pb-20">
            <div className="mx-3">
                <div className="text-3xl ">History</div>
                <div className="space-y-5 pt-10">
                    {props.histories.map((history) => {
                        return (
                            <HistoryBox
                                key={history.id}
                                createdAt={history.createdAt}
                                duration={history.time}
                                pushUps={history.pushUps}
                            />
                        );
                    })}
                    <NoEntryBox />
                </div>
            </div>
        </div>
    );
}
