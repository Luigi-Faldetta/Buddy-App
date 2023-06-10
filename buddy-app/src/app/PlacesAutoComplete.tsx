import { useState } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";

const PlacesAutocomplete = ({
  onAddressSelect,
}: {
  onAddressSelect?: (address: string) => void;
}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: { componentRestrictions: { country: "uk" } },
    debounce: 300,
    cache: 86400,
  });

  const [selectedSuggestionIndex, setSelectedSuggestionIndex] =
    useState<number>(-1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setSelectedSuggestionIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedSuggestionIndex((prevIndex) =>
        Math.min(prevIndex + 1, data.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedSuggestionIndex((prevIndex) => Math.max(prevIndex - 1, -1));
    } else if (e.key === "Enter" && selectedSuggestionIndex !== -1) {
      e.preventDefault();
      const selectedSuggestion = data[selectedSuggestionIndex];
      const { description } = selectedSuggestion;
      setValue(description, false);
      clearSuggestions();
      onAddressSelect && onAddressSelect(description);
    }
  };

  const renderSuggestions = () => {
    return data.map((suggestion: any, index: number) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
        description,
      } = suggestion;

      const isSelected = index === selectedSuggestionIndex;

      return (
        <li
          key={place_id}
          onClick={() => {
            setValue(description, false);
            clearSuggestions();
            onAddressSelect && onAddressSelect(description);
          }}
          className={
            isSelected ? "bg-cyan-400 cursor-pointer" : "cursor-pointer"
          }
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  };

  return (
    <div>
      {/* <input
        className="border-1 border-black !important"
        value={value}
        disabled={!ready}
        onChange={(e) => setValue(e.target.value)}
        placeholder="123 Stairway To Heaven"
      /> */}

      <input
        className="border-2 border-black rounded-md border-solid !important"
        value={value}
        disabled={!ready}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="10 Downing Street"
      />

      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};

export default PlacesAutocomplete;
