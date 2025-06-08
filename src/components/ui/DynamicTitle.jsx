import { useEffect } from "react";

const DynamicTitle = () => {
  useEffect(() => {
    const originalTitle = document.title;

    const hiddenTitles = [
      "👋 Come Back to Scale Up!",
      "Bankbooker"
    ];

    let index = 0;
    let interval;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        interval = setInterval(() => {
          document.title = hiddenTitles[index % hiddenTitles.length];
          index++;
        }, 2000);
      } else {
        clearInterval(interval);
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null; 
};

export default DynamicTitle;
