"use client";

import {ForcastCardProps} from "@/app/types";
import {
  CloudFog,
  CloudRainWind,
  Loader,
  Sunrise,
  Sunset,
  ThermometerSnowflake,
  ThermometerSun,
  Waves,
} from "lucide-react";
import {Button} from "../Button";
import {formatTime} from "../../libs/formatTimeHelper";
import WeatherIcon from "./GenerateIconByTemp";

export const ForcastCard = ({
  data,
  unit,
  handleChangeLocation,
  handleToggleChange,
  isLoading,
}: ForcastCardProps) => {
  const weatherCards = [
    {
      title: "Cloudiness",
      items: [
        {
          icon: <CloudFog strokeWidth={2.5} />,
          label: "Clouds",
          value: `${data.cloudiness}%`,
        },
      ],
    },
    {
      title: "Daylight hours",
      items: [
        {
          icon: <Sunrise strokeWidth={2.5} />,
          label: "Sunrise",
          value: formatTime(data.sunrise),
        },
        {
          icon: <Sunset strokeWidth={2.5} />,
          label: "Sunset",
          value: formatTime(data.sunset),
        },
      ],
    },
    {
      title: "Temperature",
      items: [
        {
          icon: <ThermometerSnowflake strokeWidth={2.5} />,
          label: "Min",
          value: `${data.min}°${unit === "imperial" ? "F" : "C"}`,
        },
        {
          icon: <ThermometerSun strokeWidth={2.5} />,
          label: "Max",
          value: `${data.max}°${unit === "imperial" ? "F" : "C"}`,
        },
      ],
    },
    {
      title: "Wind",
      items: [
        {
          icon: <CloudRainWind strokeWidth={2.5} />,
          label: "Direction",
          value: `${data.windDirection}°`,
        },
        {
          icon: <Waves strokeWidth={2.5} />,
          label: "Speed",
          value: `${data.windSpeed}m/s`,
        },
      ],
    },
  ];

  return (
    <main className="mx-auto grid w-full max-w-full grid-cols-1 md:max-w-[1000px] md:grid-cols-[max-content_1fr]">
      <section className=" card-bg flex  min-h-[400px] w-full flex-col justify-between rounded-t-3xl px-3 py-4 md:min-h-[566px] md:w-[350px] md:rounded-3xl md:px-6 md:py-12 lg:w-[450px]">
        <div className="flex flex-col gap-2">
          <h1>
            {data.city}, {data.country}
          </h1>
          <p>{data.date}</p>
          <p className="text-sm capitalize text-gray-200">{data.description}</p>
        </div>

        <div className="flex items-end justify-between max-md:mt-20">
          <div className="flex flex-col gap-2 justify-self-end">
            {isLoading ? (
              <Loader className="animate-bounce text-white/50" size={80} />
            ) : (
              <>
                <WeatherIcon temp={data.temp} unit={unit === "imperial" ? "F" : "C"} />
                <h1>
                  {data.temp}°{unit === "imperial" ? "F" : "C"}
                </h1>
              </>
            )}

            <p className="font-medium">{data.weatherStatus}</p>
          </div>

          <div className="flex flex-col gap-2">
            {isLoading && <Loader className="animate-spin" />}
            <span>Switch unit </span>
            <div className=" flex w-max items-center rounded-xl shadow-md">
              <button
                type="button"
                onClick={() => handleToggleChange("imperial")}
                className={`rounded-l-xl px-6 py-3 font-extrabold ${
                  unit === "imperial" ? "bg-primary-700" : "bg-primary-700/30"
                }`}
              >
                °F
              </button>
              <button
                type="button"
                onClick={() => handleToggleChange("metric")}
                className={`rounded-r-xl px-6  py-3 font-extrabold ${
                  unit === "metric" ? "bg-primary-700" : "bg-primary-700/30"
                }`}
              >
                °C
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex min-h-[507px] flex-col gap-4 self-center bg-primary-500 p-3 max-md:rounded-b-3xl md:rounded-r-3xl md:p-6">
        <div className="mb-4 grid grid-cols-[1fr_80px] items-center gap-4 border-b border-white/5 pb-4 font-bold">
          <p>HUMIDITY</p>
          <p>{data.humidity}%</p>
          <p>PRESSURE</p>
          <p>{data.pressure}hPa</p>
        </div>
        <section className="flex flex-wrap gap-8">
          {weatherCards.map((card, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h6>{card.title}</h6>
              <div className="flex flex-wrap gap-2">
                {card.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="card-sm">
                    {item.icon}
                    <span className="text-xs">{item.label}</span>
                    <p className="font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
        <Button
          onClick={handleChangeLocation}
          className="mx-auto w-full place-content-center rounded-lg bg-gradient-to-r from-primary-700 to-primary-600 text-primary-800"
        >
          Change City
        </Button>
      </section>
    </main>
  );
};
