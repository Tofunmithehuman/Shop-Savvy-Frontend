import { useState, useEffect } from "react";

function Location({ textColorClass = "text-neutral-300", textSizeClass = "text-xs", textWeightClass = "font-normal" }) {
  const [locationData, setLocationData] = useState({
    countryName: null,
    countryCode: null,
    isLoading: true,
    hasError: false
  });

  useEffect(() => {
    let isMounted = true;
    
    const fetchGeoData = async () => {
      try {
        const apiKey = import.meta.env.VITE_IPGEOLOCATION_API_KEY;
        const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`);
        
        if (!response.ok) {
          throw new Error(`API response error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (isMounted) {
          setLocationData({
            countryName: data.country_name || null,
            countryCode: data.country_code2 || null,
            isLoading: false,
            hasError: false
          });
        }
      } catch (error) {
        console.error("Geolocation fetch failed:", error);
        
        if (isMounted) {
          setLocationData({
            countryName: null,
            countryCode: null,
            isLoading: false,
            hasError: true
          });
        }
      }
    };

    fetchGeoData();
    
    return () => {
      isMounted = false;
    };
  }, []);

  if (locationData.isLoading) {
    return (
      <div className="flex items-center gap-1">
        <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-pulse" />
        <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-pulse delay-100" />
        <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-pulse delay-200" />
      </div>
    );
  }

  if (locationData.hasError || !locationData.countryCode || !locationData.countryName) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <img
        src={`https://flagsapi.com/${locationData.countryCode.toUpperCase()}/flat/24.png`}
        alt={`${locationData.countryName} flag`}
        className="w-5 h-4"
        onError={() => {
          setLocationData(prev => ({...prev, hasError: true}));
        }}
      />
      <span className={`${textColorClass} ${textSizeClass} ${textWeightClass} uppercase hidden sm:block`}>
        {locationData.countryName}
      </span>
    </div>
  );
}

export default Location;