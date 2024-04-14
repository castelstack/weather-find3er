"use client";

import appServices from "@/app/services/appServices";
import {ChangeEvent, useState} from "react";
import {useMutation} from "react-query";
import {UnitType, WeatherInfo} from "../types";

export const useWeather = () => {
  const [temp, setTemp] = useState<WeatherInfo | null>();
  const [query, setQuery] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [unit, setUnit] = useState<UnitType>("metric");
  const [searches, setSearches] = useState<string[]>([]);

  const forcastCity = useMutation(
    ({city, unit}: {city: string; unit: string}) => {
      return appServices.getCityForcast({city, unit});
    },
    {
      onSettled(data, error) {
        if (data) {
          const responseData = data?.data;

          const weatherInfo: WeatherInfo = {
            city: responseData?.city?.name,
            country: responseData?.city?.country,
            description: responseData?.list[0]?.weather[0]?.description,
            weatherStatus: responseData?.list[0]?.weather[0]?.main,
            date: new Date(responseData?.list[0]?.dt_txt).toDateString(),
            temp: parseInt(responseData?.list[0]?.main.temp),
            max: responseData?.list[0]?.main.temp_max,
            min: responseData?.list[0]?.main.temp_min,
            sunrise: responseData?.city?.sunrise,
            sunset: responseData?.city?.sunset,
            humidity: responseData?.list[0]?.main.humidity,
            pressure: responseData?.list[0]?.main.pressure,
            windDirection: responseData?.list[0]?.wind.deg,
            windSpeed: responseData?.list[0]?.wind.speed,
            cloudiness: responseData?.list[0]?.clouds.all,
          };
          if (searches[0] !== weatherInfo.city) {
            setSearches((prev) => [weatherInfo.city, ...prev]);
          }
          setTemp(weatherInfo);
          setOpen(true);
        }
        if (error) {
          setTemp(null);
        }
      },
    }
  );

  const {mutate, isLoading, isError, isSuccess, error} = forcastCity;

  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeLocation = () => {
    setQuery("");
    setOpen(false);
  };

  const handleSubmit = () => {
    mutate({city: query.trim(), unit: "metric"});
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleToggleChange = (type: UnitType) => {
    if (type !== unit) {
      setUnit(type);
      mutate({city: query.trim(), unit: type});
    }
  };
  const searchByCity = (city: string) => {
    mutate({city, unit: "metric"});
  };

  return {
    query,
    setQuery,
    unit,
    handleChange,
    handleSubmit,
    handleChangeLocation,
    handleClose,
    isLoading,
    data: temp,
    open,
    setUnit,
    handleToggleChange,
    isError,
    isSuccess,
    error: (error as {response?: {data?: any}})?.response?.data,
    searchResults: searches.slice(0, 5),
    searchByCity
  };
};
