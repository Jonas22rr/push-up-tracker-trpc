import { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiPlusCircle, mdiClose, mdiPlay, mdiPause, mdiPlus } from "@mdi/js";
import { useStopwatch } from "react-timer-hook";
import DropDown from "./DropDown";
import { api } from "~/utils/api";
import { uuid } from "uuidv4";

interface Props {
    closePopup: () => void;
}

export default function AddPopup(props: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [select, setSelect] = useState("Push-ups");
    const [counter, setCounter] = useState(0);
    const [startedAt, setStartedAt] = useState(new Date());
    const [started, setStarted] = useState(false);
    const { seconds, minutes, hours, start, pause, reset, isRunning } =
        useStopwatch({
            autoStart: false,
        });

    const ctx = api.useContext();
    const { mutate } = api.pushUps.create.useMutation({
        onMutate: async (pushUp) => {
            return pushUp;
        },
        onError: (err) => {
            console.log(err);
        },
        onSettled: () => {
            ctx.pushUps.getAll.invalidate();
        },
    });

    const handleAddPushUpCounts = () => {
        if (select !== "Push-ups") {
            setCounter(counter + Number(select));
        } else {
            alert("Please select a number of push-ups");
        }
    };

    const handleAddPushups = async () => {
        pause();
        const pushUp = {
            id: uuid(),
            pushUps: counter.toString(),
            createdAt: startedAt,
            stoppedAt: new Date(),
            time: `${hours.toString().padStart(2, "0")}:
                  ${minutes.toString().padStart(2, "0")}:
                  ${seconds.toString().padStart(2, "0")}`,
        };
        if (seconds !== 0 && counter !== 0) {
            mutate(pushUp);
            resetDialog();
        }
    };

    const resetDialog = () => {
        setCounter(0);
        handleClosePopup();
        reset();
    };

    const handleClosePopup = () => {
        setIsOpen(false);
        setTimeout(() => {
            props.closePopup();
        }, 400);
    };

    useEffect(() => {
        setIsOpen(true);
    }, []);

    return (
        <>
            <div className="fixed  left-0 -top-10 z-10 flex h-screen w-screen items-center justify-center bg-[#000000] bg-opacity-50">
                <div
                    className={`w-5/6 rounded-xl bg-[#303030] py-16 px-10 transition-all  duration-500 ${
                        isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                >
                    <div className="flex h-10 w-full items-center justify-between pb-10">
                        <span className="text-2xl">Add Push-ups</span>
                        <button
                            onClick={handleClosePopup}
                            className="text-2xl font-semibold"
                        >
                            <Icon path={mdiClose} size={1.3} />
                        </button>
                    </div>
                    <div className="flex w-full flex-col  space-y-5">
                        <div className=" flex flex-row place-items-center space-x-3">
                            <div className="float-left w-1/2">
                                {isRunning ? (
                                    <button
                                        className="btn-accent btn-lg  btn"
                                        onClick={() => {
                                            setStartedAt(
                                                started == true
                                                    ? startedAt
                                                    : new Date()
                                            );
                                            if (started == false) {
                                                setStarted(true);
                                            }
                                            pause();
                                        }}
                                    >
                                        <Icon path={mdiPause} size={2} />
                                    </button>
                                ) : (
                                    <button
                                        className="btn-accent btn-lg  btn"
                                        onClick={start}
                                    >
                                        <Icon path={mdiPlay} size={2} />
                                    </button>
                                )}
                            </div>
                            <div className="float-right w-1/2">
                                <span className="rounded-lg bg-primaryDark px-5 py-1 text-xl">
                                    {hours.toString().padStart(2, "0")}:
                                    {minutes.toString().padStart(2, "0")}:
                                    {seconds.toString().padStart(2, "0")}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row place-items-center space-x-3">
                            <div className="w-1/2">
                                <button
                                    className="btn-accent btn-lg  btn"
                                    onClick={handleAddPushUpCounts}
                                >
                                    <Icon path={mdiPlus} size={2} />
                                </button>
                            </div>
                            <div className="w-1/2">
                                <DropDown
                                    selection={select}
                                    setSelect={setSelect}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row place-items-center space-x-3">
                            <span>Sum of push-ups:</span>
                            <span className="rounded-lg bg-primaryDark px-5 py-1 text-xl">
                                {counter}
                            </span>
                        </div>
                        <button
                            className="btn-lg btn flex  items-center rounded-md bg-accent px-4 py-2 hover:opacity-75"
                            onClick={handleAddPushups}
                        >
                            <span className="text-[#ffffff]">Add Push-Ups</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
