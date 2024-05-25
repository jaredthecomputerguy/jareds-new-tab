import { useEffect, useState } from "react";
import { getColorFromStorage, storeColor } from "./utils";
import { Header } from "./components/header";
import { Links } from "./components/links";
import { Weather } from "./components/weather";
import { ColorPicker } from "./components/color-picker";
import { Countdown } from "./components/countdown";

const RELEASE_DATE = new Date("2024-06-21T00:00:00Z");
const ELDEN_RING_IMAGE = "/elden-ring-shadow-of-the-erdtree-logo.png";

function App() {
  const [color, setColor] = useState<string | null>(null);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    getColorFromStorage("local:color").then((color) => {
      setColor(color as string);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center text-white"
      style={{ backgroundColor: color ?? "#FEFEFE" }}
    >
      <section>
        <ColorPicker
          color={color}
          setColor={setColor}
          storeColor={storeColor}
        />
        <Header time={time} />
        <Links />
        <Weather />
        <Countdown releaseDate={RELEASE_DATE} image={ELDEN_RING_IMAGE} />
      </section>
    </main>
  );
}

export default App;
