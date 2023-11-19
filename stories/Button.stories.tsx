import Button from "../src/components/Button";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
    title: "Example/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        color: { control: "color" },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    name: "主色调",
    args: {
        color: "blue",
    },
    render: args => {
        return (
            <div>
                <Button {...args}>dsds</Button>
            </div>
        );
    },
};

export const Secondary: Story = {
    args: {
        children: "Button",
    },
};

export const Large: Story = {
    args: {
        children: "Button",
    },
};

export const Small: Story = {
    args: {
        children: "Button",
    },
};

export const Warning: Story = {
    args: {
        children: "Delete now",
    },
};
