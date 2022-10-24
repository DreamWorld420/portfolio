import type { FC } from "react";
import { IconButton, IconButtonProps } from "@chakra-ui/react";

const SocialButton: FC<IconButtonProps> = ({ ...props }) => {
	return <IconButton {...props} />;
};

export default SocialButton;
