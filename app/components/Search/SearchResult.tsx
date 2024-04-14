"use client";

import {useWeather} from "@/app/hooks/useWeather";
import {CircleX} from "lucide-react";
import {ErrorComponent} from "./ErrorComponent";
import {ForcastCard} from "./ForcastCard";
import {RecentSearchResults} from "./RecentSearchResults";
import {SearchForm} from "./SearchForm";

const SearchResult = () => {
  const {
    query,
    unit,
    handleChange,
    handleSubmit,
    handleChangeLocation,
    handleClose,
    isLoading,
    isError,
    data,
    open,
    handleToggleChange,
    error,
    searchResults,
    searchByCity
  } = useWeather();
  return (
    <>
      <main className="grid w-full items-center">
        {!open ? (
          <>
            <SearchForm
              isLoading={isLoading}
              isError={isError}
              onSubmit={handleSubmit}
              handleChange={handleChange}
              value={query}
              error={error}
            />
            {searchResults.length > 0 ? (
              <RecentSearchResults searchResults={searchResults} searchByCity={searchByCity} />
            ) : null}
          </>
        ) : (
          <>
            {data ? (
              <section className="relative col-span-full min-h-screen w-full bg-primary-800 px-3 py-24 md:py-[300px]">
                <button type="button" onClick={handleClose} className="absolute right-4 top-4">
                  <CircleX size={45} className="text-gray-400" />
                </button>

                <ForcastCard
                  unit={unit}
                  handleToggleChange={handleToggleChange}
                  isLoading={isLoading}
                  data={data}
                  handleChangeLocation={handleChangeLocation}
                />
              </section>
            ) : null}
          </>
        )}
      </main>
    </>
  );
};

export default SearchResult;
