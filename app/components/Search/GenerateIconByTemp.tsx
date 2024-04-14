import {Cloud, Cloudy, Sun} from "lucide-react";
import {ReactNode} from "react";

type Props = {
  temp: number;
  unit: "C" | "F";
};

const WeatherIcon = ({temp, unit}: Props): ReactNode => {
  const generateIconByTemp = (temp: number, unit: "C" | "F"): ReactNode => {
    if (unit === "C") {
      if (temp < 10) {
        return <Cloudy size={70} />;
      } else if (temp <= 25) {
        return <Cloud size={70} />;
      } else {
        return <Sun size={70} />;
      }
    } else {
      if (temp < 50) {
        return <Cloudy size={70} />;
      } else if (temp <= 77) {
        return <Cloud size={70} />;
      } else {
        return <Sun size={70} />;
      }
    }
  };

  return generateIconByTemp(temp, unit);
};

export default WeatherIcon;
