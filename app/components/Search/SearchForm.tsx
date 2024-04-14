"use client";

import {Loader, Search} from "lucide-react";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {Button} from "../Button";
import Input from "../Input";
import {ErrorComponent} from "./ErrorComponent";

export interface FormProps {
  value: string;
  isLoading: boolean;
  isError: boolean;
  error: {
    cod: number;
    message: string;
  };
  onSubmit: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchForm = ({
  isLoading,
  value,
  onSubmit,
  handleChange,
  isError,
  error,
}: FormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [errorVisible, setErrorVisible] = useState<boolean>(false);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  useEffect(() => {
    if (isError) {
      setErrorVisible(true);
      const timer = setTimeout(() => {
        setErrorVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isError]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <section className="mx-auto mt-[250px] grid w-full grid-cols-1 gap-8 p-4 md:max-w-[800px]">
        <div className="flex flex-col gap-2">
          <h3 className="font-extrabold uppercase max-md:text-center ">Check weather</h3>
          <p className="text-sm text-gray-300 max-md:text-center md:text-lg">
            Enter the name of your city to check the current weather conditions.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-row  gap-2 md:gap-6 ">
          <Input
            inputRef={inputRef}
            placeholder="Enter your city..."
            value={value}
            onChange={handleChange}
          />
          <Button
            type="submit"
            disabled={value ? isLoading : true}
            className="mx-auto place-content-center rounded-lg bg-gradient-to-r from-primary-700 to-primary-600"
          >
            {isLoading ? <Loader className="animate-spin" /> : <Search />}
          </Button>
        </form>
        {errorVisible && isError && <ErrorComponent error={error} />}
      </section>
    </>
  );
};
