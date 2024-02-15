import React from "react";
import { MinimalButton } from "./styles";

import { isUndefined } from "lodash";

interface MinimalButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "default" | "text" | "dashed" | "shadow";

	label: string;

	size?: "sm" | "md" | "lg";

	icon?: JSX.Element;
	trailIcon?: JSX.Element;
}

export default function Button({
	variant = "default",
	label,
	size = "md",
	icon,
	trailIcon,
	...buttonProps
}: MinimalButtonProps) {
	const hasIcon = !isUndefined(icon);
	const hasTrailIcon = !isUndefined(trailIcon);

	return (
		<MinimalButton $type={variant} $size={size} {...buttonProps}>
			{hasIcon && icon}
			{label}
			{hasTrailIcon && trailIcon}
		</MinimalButton>
	);
}
