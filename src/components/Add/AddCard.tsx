import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import Card from "../Card";
import { useEffect, useState } from "react";
import AddPopup from "./AddPopup";

export default function AddCard() {
  const [showAddPopup, setShowAddPopup] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const handleAddCategory = () => {
    setShowAddPopup(true);
  };

  return (
    <>
      <Card paddingY="py-10" spaceY="space-y-10">
        <div className="text-center">
          <span className="text-white text-3xl">Add Push-ups</span>
        </div>
        <button className="btn-accent btn-lg  btn" onClick={handleAddCategory}>
          <Icon path={mdiPlus} size={2} />
        </button>
      </Card>
      {showAddPopup && <AddPopup closePopup={() => setShowAddPopup(false)} />}
    </>
  );
}
