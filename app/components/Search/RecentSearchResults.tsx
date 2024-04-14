export const RecentSearchResults = ({
  searchResults,
  searchByCity,
}: {
  searchResults: string[];
  searchByCity: (city: string) => void;
}) => {
  return (
    <main className="mx-auto mt-6 grid w-full grid-cols-1 gap-3 px-3 md:max-w-[800px]">
      <h6>Recent searches</h6>
      <div className="flex flex-col gap-3 border-t border-white/10 py-4">
        {searchResults.map((search, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer text-base text-gray-300"
              onClick={() => searchByCity(search)}
            >
              {search}
            </div>
          );
        })}
      </div>
    </main>
  );
};
