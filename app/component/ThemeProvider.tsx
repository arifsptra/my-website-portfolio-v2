"use client";

import { useEffect, useState } from "react";

const ThemeProvider = () => {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme =
      stored === "dark" || (!stored && prefersDark) ? "dark" : "light";
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className={`relative inline-flex h-9 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none ${
            theme === "dark" ? "bg-slate-700" : "bg-slate-100"
          }`}
        >
          <span
            className={`absolute left-1 flex items-center justify-center h-8 w-8 rounded-full transition-all duration-300 p-0 ${
              theme === "dark" ? "translate-x-[18px]" : ""
            }`}
          >
            {theme === "dark" ? (
              <svg
                enable-background="new 0 0 512 512"
                height="512px"
                id="Calque_1"
                version="1.1"
                viewBox="0 0 512 512"
                width="512px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M412.95,381.15c-8.05,10.119-16.94,19.33-26.55,27.54c-2.271,1.939-4.58,3.819-6.92,5.64   c-0.261,0.21-0.521,0.42-0.78,0.63c-0.09,0.07-0.19,0.13-0.28,0.2c-5.979,4.6-12.2,8.83-18.64,12.689   c-1.92,1.15-3.851,2.28-5.811,3.37c-18.14,10.061-37.819,17.221-58.42,21.16c-12.27,2.34-24.87,3.55-37.66,3.55   c-27.92,0-54.94-5.739-80.32-17.04c-7.74-3.46-15.3-7.43-22.47-11.81c-6.96-4.24-13.77-9-20.24-14.14   c-5.28-4.19-10.3-8.62-15.07-13.25c-1.3-1.261-2.57-2.54-3.82-3.83c-30.43-31.21-49.57-71.37-54.6-115.38   c-4.54-39.75,2.83-79.04,20.95-113.75c4.99-9.561,10.81-18.78,17.41-27.561c0.2-0.26,0.4-0.529,0.6-0.79   c0.9-1.18,1.81-2.359,2.74-3.529c37.77-47.521,94.29-74.78,155.07-74.78c45.101,0,87.641,14.87,123.021,42.99   c1.54,1.22,2.89,2.33,4.14,3.39c3.16,2.64,6.29,5.43,9.51,8.5c0.49,0.47,0.99,0.94,1.471,1.43c1.3,1.25,2.58,2.54,3.84,3.83   c32.41,33.351,51.979,77.011,55.31,123.75C458.97,293.51,443.88,342.23,412.95,381.15z"
                    fill="#6A6D68"
                    opacity="0.9"
                  />
                  <path
                    d="M408.95,377.15c-8.05,10.119-16.94,19.33-26.55,27.54c-2.271,1.939-4.58,3.819-6.92,5.64   c-0.261,0.21-0.521,0.42-0.78,0.63c-0.09,0.07-0.19,0.13-0.28,0.2c-5.979,4.6-12.2,8.83-18.64,12.689   c-1.92,1.15-3.851,2.28-5.811,3.37c-19.76,10.96-41.359,18.471-63.979,22.141c-10.51,1.699-21.23,2.569-32.101,2.569   c-27.92,0-54.94-5.739-80.32-17.04c-7.74-3.46-15.3-7.43-22.47-11.81c-6.96-4.24-13.77-9-20.24-14.14   c-5.21-4.141-10.17-8.511-14.89-13.08c-0.06-0.051-0.12-0.11-0.18-0.17c-32.64-31.721-53.18-73.381-58.42-119.21   c-4.54-39.75,2.83-79.04,20.95-113.75c4.99-9.561,10.81-18.78,17.41-27.561c1.09-1.449,2.2-2.89,3.34-4.319   c0.55-0.69,1.1-1.37,1.65-2.051c37.76-46.25,93.52-72.729,153.42-72.729c45.101,0,87.641,14.87,123.021,42.99   c1.54,1.22,2.89,2.33,4.14,3.39c3.16,2.64,6.29,5.43,9.51,8.5c1.811,1.72,3.58,3.48,5.311,5.26c0.05,0.061,0.11,0.11,0.16,0.17   c32.319,33.33,51.83,76.92,55.149,123.58C454.97,289.51,439.88,338.23,408.95,377.15z"
                    fill="#A3AAA0"
                  />
                  <circle
                    cx="285"
                    cy="156"
                    fill="#666865"
                    r="44.5"
                    stroke="#5E5E5D"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  />
                  <circle
                    cx="385"
                    cy="300"
                    fill="#666865"
                    r="21.5"
                    stroke="#5E5E5D"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  />
                  <circle
                    cx="166"
                    cy="296.5"
                    fill="#666865"
                    r="27.84"
                    stroke="#5E5E5D"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  />
                  <circle
                    cx="261.25"
                    cy="272.75"
                    fill="#666865"
                    r="14.75"
                    stroke="#5E5E5D"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  />
                  <circle
                    cx="151.5"
                    cy="184"
                    fill="#666865"
                    r="28"
                    stroke="#5E5E5D"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  />
                  <circle
                    cx="297.5"
                    cy="382.501"
                    fill="#666865"
                    r="27.5"
                    stroke="#5E5E5D"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  />
                  <circle
                    cx="395"
                    cy="213"
                    fill="#666865"
                    r="18.5"
                    stroke="#5E5E5D"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  />
                  <circle
                    cx="317"
                    cy="216"
                    fill="#666865"
                    r="8"
                    stroke="#5E5E5D"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  />
                  <path
                    d="M299.55,450.38   c-12.27,2.34-24.87,3.55-37.66,3.55c-27.92,0-54.94-5.739-80.32-17.04c-7.74-3.46-15.3-7.43-22.47-11.81   c-6.96-4.24-13.77-9-20.24-14.14c-5.28-4.19-10.3-8.62-15.07-13.25c-1.3-1.261-2.57-2.54-3.82-3.83   c-0.06-0.051-0.12-0.11-0.18-0.17c-32.64-31.721-53.18-73.381-58.42-119.21c-4.54-39.75,2.83-79.04,20.95-113.75   c4.99-9.561,10.81-18.78,17.41-27.561c1.09-1.449,2.2-2.89,3.34-4.319c0.55-0.69,1.1-1.37,1.65-2.051   c-0.16,3.011-0.29,6.2-0.39,9.58c-2.39,79.15,12.97,253.43,185.661,310.98C293.12,448.41,296.31,449.42,299.55,450.38z"
                    fill="#666865"
                    opacity="0.2"
                    stroke="#5E5E5D"
                    stroke-miterlimit="10"
                    stroke-width="4"
                  />
                </g>
              </svg>
            ) : (
              <svg
                className="w-full h-full scale-125"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  shapeRendering: "geometricPrecision",
                  textRendering: "geometricPrecision",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }}
              >
                <circle
                  fill="#FFC106"
                  r="22.97"
                  transform="matrix(0.543121 0.145529 -0.145529 0.543121 32.0002 31.9993)"
                />
                <path
                  fill="none"
                  stroke="#FFC106"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                  strokeMiterlimit={22.9256}
                  d="M32 12.4c0,1.52 0,2 0,2m-9.8 0.63c0.76,1.32 1,1.73 1,1.73m-8.17 5.44c1.32,0.76 1.73,1 1.73,1m-4.36 8.8c1.53,0 2,0 2,0m0.63 9.8c1.32,-0.76 1.73,-1 1.73,-1m5.44 8.17c0.76,-1.32 1,-1.73 1,-1.73m8.8 4.36c0,-1.53 0,-2 0,-2m9.8 -0.63c-0.76,-1.32 -1,-1.73 -1,-1.73m8.17 -5.44c-1.32,-0.76 -1.73,-1 -1.73,-1m4.36 -8.8c-1.53,0 -2,0 -2,0m-0.63 -9.8c-1.32,0.76 -1.73,1 -1.73,1m-5.44 -8.17c-0.76,1.32 -1,1.73 -1,1.73"
                />
              </svg>
            )}
          </span>
        </button>
      </div>
    </>
  );
};

export default ThemeProvider;
