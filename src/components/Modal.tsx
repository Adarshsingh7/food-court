/** @format */

import {
	ReactNode,
	cloneElement,
	createContext,
	useContext,
	useState,
} from 'react';
import { HiXMark } from 'react-icons/hi2';
import { Button } from '../ui/Button';

interface ModalContextType {
	close: () => void;
	openName: string;
	open: (name: string) => void;
}

const ModalContext = createContext<ModalContextType>({
	close: () => {},
	openName: '',
	open: () => {},
});

interface WindowProps {
	children: React.ReactElement;
	name: string;
}

interface OpenProps {
	children: React.ReactElement;
	opens: string;
}

function Modal({ children }: { children: ReactNode }) {
	const [openName, setOpenName] = useState('');

	const open = (name: string) => setOpenName(name);
	const close = () => setOpenName('');

	return (
		<ModalContext.Provider value={{ openName, open, close }}>
			{children}
		</ModalContext.Provider>
	);
}

function Window({ children, name }: WindowProps) {
	const { close, openName } = useContext(ModalContext);

	if (name !== openName) return null;

	return (
		<div className='flex justify-center items-center'>
			<div className='fixed top-1/2 left-1/2 bg-slate-100 -translate-x-1/2 md:w-[48rem] -translate-y-1/2 md:rounded-lg shadow-lg p-8 px-10 transition duration-500 w-screen h-screen md:h-[40rem] z-10'>
				<div className='flex flex-row-reverse mb-4'>
					<Button onClick={close}>
						<HiXMark />
					</Button>
				</div>
				{cloneElement(children, { onClose: close })}
			</div>
		</div>
	);
}

function Open({ children, opens }: OpenProps) {
	const { open } = useContext(ModalContext);
	return cloneElement(children, { onClick: () => open(opens) });
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
