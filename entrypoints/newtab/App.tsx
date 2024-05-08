import { useEffect, useState } from "react";
import { getColorFromStorage, storeColor } from "./utils";
import { Header } from "./components/header";
import { Links } from "./components/links";
import { Weather } from "./components/weather";
import { ColorPicker } from "./components/color-picker";

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
      <section>
        <ColorPicker
          color={color}
          setColor={setColor}
          storeColor={storeColor}
        />
        <Header />
        <Links />
        <Weather />
      </section>
    </main>
  );
}

export default App;
