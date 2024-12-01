import { useState, useEffect } from 'react';

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

// Hook personnalisé qui retourne seulement className
function useClassName() {
  const time = useTime();
  const hours = time.getHours();
  return hours >= 8 && hours <= 17 ? 'day' : 'night';
}

export default useClassName;

 