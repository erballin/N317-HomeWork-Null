"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const appearanceMode = document.cookie
      .split("; ")
      .find((row) => row.startsWith("appearance="))
      ?.split("=")[1];
    if (appearanceMode && appearanceMode == "dark") {
      setTheme("dark");
    } else if (appearanceMode && appearanceMode == "light") {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    console.log(theme);
    if (theme == "dark") {
      document.getElementById("root").className = "dark";
      document.cookie = "appearance=dark";
    } else {
      document.getElementById("root").className = "light";
      document.cookie = "appearance=light";
    }
  }, [theme]);

  return (
    <main>
      <h1 className="text-5xl">Theme Switcher</h1>
      <textarea
        readOnly
        style={{ height: "200px", width: "300px" }}
        className="border-1 p-1"
        value={
          "This page, /theme, allows you to set the theme of the current site! It use's react's useState to keep track of the user appearance, then it saves it and reads the result in the browser's cookies to remember your selection. :]"
        }
      />
      <p>Current theme: {theme}</p>
      <button
        onClick={() => {
          if (theme == "dark") {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
        className="hover:cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        {theme == "dark" ? "Set Light Mode" : "Set Dark Mode"}
      </button>
    </main>
  );
}
