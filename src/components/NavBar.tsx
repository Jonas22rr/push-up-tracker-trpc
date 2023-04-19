import { mdiHomeOutline, mdiAccountCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <div className="btm-nav bg-[#262626]">
      <button className="text-accent" onClick={() => router.push("/")}>
        <Icon path={mdiHomeOutline} size={1} />
      </button>
      <button className="text-accent" onClick={() => router.push("/account")}>
        <Icon path={mdiAccountCircleOutline} size={1} />
      </button>
    </div>
  );
}
