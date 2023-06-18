import { FilterOptions } from "./App";

interface Props {
  name: string;
  active: string | null;
  setFilter: (c: string) => void
}

const FilterBtn: React.FC<Props> = ({ setFilter, name, active }) => {
  function filterProfiles(b: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const { id } = b.target as HTMLButtonElement;
    switch (id) {
      case "All":
        setFilter("");
        break;
      case "Male":
        setFilter(`type=${FilterOptions.MALE}`);
        break;
      case "Female":
        setFilter(`type=${FilterOptions.FEMALE}`);
        break;
      case "Sent":
        setFilter(`type=${FilterOptions.SENT}`);
        break;
      case "Unsent":
        setFilter(`type=${FilterOptions.UNSENT}`);
    }
  }
 

  return (
    <button
      className={`p-2 border-[1px] text-xs lg:text-lg border-black dark:border-white ${
        active === name ? "bg-black text-white dark:bg-white dark:text-black" : "bg-inherit"
      } self-center w-full`}
      onClick={(d) => filterProfiles(d)}
      id={name}
    >
      {name}
    </button>
  );
};

export default FilterBtn;
