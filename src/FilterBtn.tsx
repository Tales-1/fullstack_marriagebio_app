import { FilterOptions } from "./App";

interface Props {
  name: string;
  active: string;
  setFilter: React.Dispatch<React.SetStateAction<FilterOptions>>;
}

const FilterBtn: React.FC<Props> = ({ setFilter, name, active }) => {
  function filterProfiles(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const { id } = e.target as HTMLButtonElement;
    switch (id) {
      case "All":
        setFilter(FilterOptions.NONE);
        break;
      case "Male":
        setFilter(FilterOptions.MALE);
        break;
      case "Female":
        setFilter(FilterOptions.FEMALE);
        break;
      case "Sent":
        setFilter(FilterOptions.SENT);
        break;
      case "Unsent":
        setFilter(FilterOptions.UNSENT);
    }
  }
  console.log(active)
  console.log(name)

  return (
    <button
      className={`p-2 border-[1px] text-xs lg:text-lg border-black dark:border-white ${
        active === name ? "bg-black text-white dark:bg-white dark:text-black" : "bg-inherit"
      } self-center w-full`}
      onClick={(e) => filterProfiles(e)}
      id={name}
    >
      {name}
    </button>
  );
};

export default FilterBtn;
