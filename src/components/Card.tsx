import { Tailwindest } from "tailwindest";

type TailwindPaddingY = Tailwindest["paddingY"];
type TailwindSpaceY = Tailwindest["spaceY"];

interface Props {
  children: React.ReactNode;
  paddingY?: TailwindPaddingY;
  spaceY?: TailwindSpaceY;
}

export default function Card(props: Props) {
  return (
    <div
      className={`flex w-full flex-col place-items-center ${
        props.spaceY ? props.spaceY : "space-y-14"
      } rounded-lg bg-primaryDark ${props.paddingY ? props.paddingY : "py-20"}`}
    >
      {props.children}
    </div>
  );
}
