import { ReactNode } from "react";
import { Modal as ModalAntd } from "antd";

interface ModalProps {
	children: ReactNode;
	title?: string;
	isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ children, title, isOpen, onClose }: ModalProps) => {
	return (
		<ModalAntd footer={null} style={{ top: 10 }} styles={{
			mask: { backdropFilter: "blur(5px)" },
		}} title={title} destroyOnClose open={isOpen} onCancel={onClose} width={1000}>
			{children}
		</ModalAntd>
	);
}