import type { Filter } from "../types";

const filterOptions: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "todo", label: "To do" },
  { value: "done", label: "Done" },
];

type FilterBarProps = {
  filter: Filter;
  onChange: (filter: Filter) => void;
};

function FilterBar({ filter, onChange }: FilterBarProps) {
  return (
    <div className="flex gap-2">
      {filterOptions.map((option) => (
        <button
          key={option.value}
          className={`btn btn-sm rounded-lg ${filter === option.value ? "btn-accent" : "btn-ghost"}`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
