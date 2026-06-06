import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, logPageView } from "@/lib/analytics";

let initialized = false;

export function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (!initialized) {
      initGA();
      initialized = true;
    }
  }, []);

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
}
