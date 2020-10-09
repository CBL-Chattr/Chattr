import "./background.css";
import background from "./background.html";
import centered from "@storybook/addon-centered/html";

export default { title: "Components/Background", decorators: [centered] };

export const bg = () => background;
