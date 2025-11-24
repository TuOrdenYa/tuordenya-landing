// /lib/gtag.ts

export const GA_MEASUREMENT_ID = "G-WZMB6KBB54";

// Registrar un pageview
export const pageview = (url: string) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Registrar un evento genérico
export const event = ({
  action,
  params,
}: {
  action: string;
  params: { [key: string]: any };
}) => {
  window.gtag("event", action, params);
};
