import {Button as ButtonAntd, type ButtonProps} from "antd";
import cls from "./Button.module.scss";

export const Button = (props: ButtonProps) => {
	return (
		<ButtonAntd className={cls.Button} {...props}>{props.children}</ButtonAntd>
	)
}
