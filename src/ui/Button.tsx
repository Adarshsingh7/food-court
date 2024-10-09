/** @format */

import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	additionalClasses?: string;
	color?: string;
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	additionalClasses = '',
	color,
	...props
}) => {
	return (
		<button
			style={{ backgroundColor: color }}
			className={`bg-red hover:opacity-80 text-white px-4 py-2 rounded-md focus:outline-none ${additionalClasses}`}
			{...props}
		>
			{children}
		</button>
	);
};

const IconButton: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	...props
}) => {
	return (
		<button
			className={`text-gray-700 dark:text-gray-400 focus:outline-none`}
			{...props}
		>
			{children}
		</button>
	);
};

const SmallButton: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	color = 'red',
	...props
}) => {
	return (
		<button
			style={{ backgroundColor: color }}
			className={`bg-red hover:opacity-80 text-white px-2 py-1 rounded-md focus:outline-none md:text-sm text-xs`}
			{...props}
		>
			{children}
		</button>
	);
};

const ButtonMinimal: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	...props
}) => {
	return (
		<button
			className='rounded-md border border-slate-300 px-4 py-2 text-center text-sm text-slate-600 shadow-sm transition-all hover:border-slate-800 hover:bg-slate-800 hover:text-white hover:shadow-lg focus:border-slate-800 focus:bg-slate-800 focus:text-white active:border-slate-800 active:bg-slate-800 active:text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-2'
			type='button'
			{...props}
		>
			{children}
		</button>
	);
};

export { Button, IconButton, SmallButton, ButtonMinimal };
