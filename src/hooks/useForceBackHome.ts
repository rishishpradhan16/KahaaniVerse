import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useForceBackHome() {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      e.preventDefault();
      navigate("/", { replace: true }); // hamesha homepage pe bhejo
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);
}
