import { useEffect, useState } from "react";

interface WeatherData {
  name: string;
  main: { temp: number };
  weather: { description: string; icon: string }[];
}

const API_KEY = "2dff933958bce6fefdcee616f0bfb6ea";
const DEFAULT_CITY = "Richmond";
const UNITS = "imperial";

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Whether to use geolocation
  const [useLocation, setUseLocation] = useState(false);

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
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    // By default on mount, load default city weather
    fetchWeather();
  }, []);

  // Fetch geolocation weather if user clicks button
  useEffect(() => {
    if (useLocation) {
      fetchWeather(); // fallback if permission denied
    }
  }, [useLocation]);

  if (error) return <div className="text-red-400">Error: {error}</div>;
  if (!weather) return <div className="text-gray-400">Loading weather...</div>;

  return (
    <div className="bg-slate-800 bg-opacity-70 p-2 rounded-lg shadow-md text-white flex flex-col items-center">
      <div className="flex items-center space-x-3">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="w-10 h-10"
        />
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{weather.name}</div>
          <div className="text-sm capitalize">
            {weather.weather[0].description}
          </div>
        </div>
        <div className="text-xl font-bold ml-2">
          {Math.round(weather.main.temp)}&deg;{UNITS === "imperial" ? "F" : "C"}
        </div>
      </div>

      {/* Geolocation button, only on medium+ screens */}
      <button
        className="hidden sm:block mt-2 px-4 py-1 bg-teal-400 text-white rounded hover:bg-teal-600 transition"
        onClick={() => setUseLocation(true)}
      >
        Use My Location
      </button>
    </div>
  );
};

export default WeatherWidget;
