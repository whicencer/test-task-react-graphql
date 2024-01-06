import {Input as InputAntd, type InputProps} from "antd";
import cls from "./Input.module.scss";

export const Input = (props: InputProps) => {
	return (
		<InputAntd className={cls.Input} {...props} />
	);
};