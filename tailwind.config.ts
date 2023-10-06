import { withMaterialColors } from "tailwind-material-colors";
export default withMaterialColors(
  {
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
      extend: {},
    },
    plugins: [],
  },
  {
    primary: "#00b6d4",
  },
  { extend: true }
);
