import { useState } from "react";

interface Props {
  selection: string;
  setSelect: (count: string) => void;
}

export default function Dropdown(props: Props) {
  const [selection, setSelection] = useState<string>(props.selection);

  const dropDownList = [
    { id: "1", name: "5" },
    { id: "2", name: "10" },
    { id: "3", name: "15" },
    { id: "4", name: "20" },
    { id: "5", name: "30" },
    { id: "6", name: "50" },
  ];

  const toggleDropdown = () => {
    const dropdown = document.getElementById("idTimeBoxDropdown")!;
    dropdown.classList.toggle("hidden");
  };

  const handleSelection = (selection: string) => {
    setSelection(selection);
    props.setSelect(selection);
    toggleDropdown();
  };

  return (
    <div>
      <button
        id="dropdownDefaultButton"
        onClick={() => toggleDropdown()}
        data-dropdown-toggle="dropdown"
        className="text-md inline-flex items-center rounded-lg bg-primaryDark px-4 py-2.5 text-center font-medium hover:bg-[#464646] focus:outline-none"
        type="button"
      >
        {selection}
        <svg
          className="ml-2 h-4 w-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="idTimeBoxDropdown"
        className="divide-gray-100 absolute z-10 mt-2 hidden w-44 divide-y rounded-lg border-2 border-[#303030] bg-primaryDark shadow"
      >
        <ul
          className="text-gray-700 dark:text-gray-200 py-2 text-sm"
          aria-labelledby="dropdownDefaultButton"
        >
          {dropDownList.map((item) => {
            if (item.id === "0") {
              return (
                <li key={item.id as string}>
                  <span className="block px-4 py-2">{item.name}</span>
                </li>
              );
            } else {
              return (
                <li
                  key={item.id as string}
                  onClick={() => handleSelection(item.name)}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-xl hover:bg-[#404040]"
                  >
                    {item.name}
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
