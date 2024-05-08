interface ColorPickerProps {
  color: string | null;
  setColor: (color: string) => void;
  storeColor: (color: string) => void;
}

export const ColorPicker = ({
  color,
  setColor,
  storeColor,
}: ColorPickerProps) => {
  return (
    <input
      className="absolute rounded-full border border-white outline-red-600 bottom-8 right-8"
      type="color"
      value={color ?? "#FEFEFE"}
      onChange={(e) => {
        setColor(e.target.value);
        storeColor(e.target.value);
      }}
    />
  );
};
