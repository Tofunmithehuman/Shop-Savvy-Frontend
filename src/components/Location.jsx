import { useState, useEffect } from "react";

function Location({ textColorClass = "text-neutral-300", textSizeClass = "text-xs", textWeightClass = "font-normal" }) {
  const [country, setCountry] = useState({
    name: "Loading...",
    code: "",
  });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const apiKey = import.meta.env.VITE_IPGEOLOCATION_API_KEY;
        const response = await fetch(
          `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`
        );
        const data = await response.json();

        setCountry({
          name: data.country_name || "Unknown",
          code: data.country_code2?.toLowerCase() || "",
        });
      } catch (error) {
        console.error("Error fetching geolocation:", error);
        setCountry({ name: "Unknown", code: "" });
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className="flex items-center gap-2">
      {country.code && (
        <img
          src={`https://flagsapi.com/${country.code.toUpperCase()}/flat/24.png`}
          alt={`${country.name} flag`}
          className="w-[20px] h-[18px]"
        />
      )}
      <span className={`${textColorClass} ${textSizeClass} ${textWeightClass} uppercase hidden sm:block`}>{country.name}</span>
    </div>
  );
}

export default Location;