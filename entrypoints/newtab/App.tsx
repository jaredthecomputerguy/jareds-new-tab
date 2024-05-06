import { useEffect, useState } from "react";
import { getColorFromStorage, storeColor } from "./utils";

function App() {
  const [color, setColor] = useState<string | null>(null);

  useEffect(() => {
    getColorFromStorage("local:color").then((color) => {
      setColor(color as string);
    });
  }, []);

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-white"
      style={{ backgroundColor: color ?? "#FEFEFE" }}
    >
      <section className="">
        <input
          className="absolute rounded-full border border-white outline-red-600 bottom-8 right-8"
          type="color"
          value={color ?? "#FEFEFE"}
          onChange={(e) => {
            setColor(e.target.value);
            storeColor(e.target.value);
          }}
        />
        <h1>Good afternoon, Jared</h1>
      </section>
    </main>
  );
}

export default App;
