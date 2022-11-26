import { useEffect, useState } from "react";

export const useFadeAnimation = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 1000);
  }, []);

  return { isShow };
};
