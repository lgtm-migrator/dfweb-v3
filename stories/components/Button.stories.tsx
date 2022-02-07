import React, { ReactNode, MouseEventHandler } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../../src/components/UI/Button.component";

interface IButtonProps {
  text?: string;
  children?: ReactNode | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  argTypes: { onClick: { action: "onClick" } }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = ({ text, children, onClick }: IButtonProps) => (
  <Button text={text} onClick={onClick}>
    {children}
  </Button>
);

export const Primary = Template;

Primary.args = {
  text: "",
  children: <h1>Button</h1>
};
