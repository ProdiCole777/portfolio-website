import { useEffect, useState } from "react";

interface WeatherData {
  main: { temp: number };
  weather: { icon: string; description: string }[];
}

const API_KEY = "2dff933958bce6fefdcee616f0bfb6ea";
const DEFAULT_CITY = "Richmond";
const UNITS = "imperial";

const WeatherWidgetMini: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeather = async (lat?: number, lon?: number) => {
      try {
        const url =
          lat && lon
            ? `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${UNITS}&appid=${API_KEY}`
            : `https://api.openweathermap.org/data/2.5/weather?q=${DEFAULT_CITY}&units=${UNITS}&appid=${API_KEY}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch weather");
        const data: WeatherData = await res.json();
        setWeather(data);
      } catch (err) {
        console.error("Weather fetch error:", err);
        setWeather(null);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
        () => fetchWeather()
      );
    } else {
      fetchWeather();
    }
  }, []);

  if (!weather) return <div className="text-white text-xs">Loading...</div>;

  return (
    <div className="flex items-center space-x-1 text-white">
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].description}
        className="w-6 h-6"
      />
      <span className="text-sm font-semibold">
        {Math.round(weather.main.temp)}&deg;{UNITS === "imperial" ? "F" : "C"}
      </span>
    </div>
  );
};

export default WeatherWidgetMini;
