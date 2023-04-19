export default function NoEntryBox() {
  return (
    <div className=" rounded-md border-2 border-dashed border-[#464646] p-4">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <span className="text-gray-500 text-2xl">
            No more tracked pushups here{" "}
          </span>
          <span className="text-gray-500 text-sm">
            Start tracking to see more information here.
          </span>
        </div>
      </div>
    </div>
  );
}
