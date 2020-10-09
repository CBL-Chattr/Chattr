import "./card.css";
import card from "./card.html";
import centered from "@storybook/addon-centered/html";

export default { title: "Components/Card", decorators: [centered] };

export const Card = () => card;
