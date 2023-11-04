import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonSize, ButtonColor, ButtonIconPosition } from "./";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({
  size,
  color,
  iconPosition,
  iconName,
  text,
}) => (
  <div style={{ padding: 50 }}>
    <Button
      size={size}
      color={color}
      iconPosition={iconPosition}
      iconName={iconName}
      text={text}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: ButtonSize.md,
  color: ButtonColor.primary,
  iconPosition: ButtonIconPosition.leading,
  iconName: "arrow-left",
  text: "Button CTA",
};
Default.parameters = {
  viewMode: "docs",
};
