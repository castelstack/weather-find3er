export const ErrorComponent = ({
  error,
}: {
  error: {
    cod: number;
    message: string;
  };
}) => {
  return (
    <main className="w-max rounded-md border border-red-500 bg-red-500/5 px-4 py-2">
      <p className="text-xs text-red-500 md:text-lg ">{`Oops!, ${error.message} :(`}</p>
    </main>
  );
};
