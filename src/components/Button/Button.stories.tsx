import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { FaSave } from "react-icons/fa";
import Button from "./Button";

const meta = {
	title: "Components/Button",
	component: Button,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: "sm",
		variant: "default",
		label: "Button",
	},
};

export const Primary: Story = {
	args: {
		icon: <FaSave />,
		variant: "primary",
		label: "Button",
	},
};

export const Dashed: Story = {
	args: {
		variant: "dashed",
		label: "Button",
	},
};

export const Text: Story = {
	args: {
		variant: "text",
		label: "Button",
	},
};

export const Shadow: Story = {
	args: {
		trailIcon: <FaSave />,
		variant: "shadow",
		label: "Button",
	},
};
