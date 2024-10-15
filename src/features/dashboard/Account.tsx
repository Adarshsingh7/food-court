/** @format */

import { HiEyeOff, HiExclamation } from 'react-icons/hi';

interface InputProps {
	label: string;
	placeholder: string;
}

function DeleteAccount() {
	return (
		<>
			<p className='py-2 text-xl font-semibold'>Delete Account</p>
			<p className='inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600'>
				<HiExclamation className='mr-2 h-5 w-5' />
				Proceed with caution
			</p>
			<p className='mt-2'>
				Make sure you have taken backup of your account in case you need access
				to your data later. This action is permanent and will completely wipe
				your data.
			</p>
			<button className='ml-auto text-sm font-semibold text-rose-600 underline'>
				Continue with deletion
			</button>
		</>
	);
}

function PasswordForm() {
	return (
		<>
			<p className='py-2 text-xl font-semibold'>Password</p>
			<div className='flex items-center'>
				<div className='flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3'>
					<Input
						label='Current Password'
						placeholder='***********'
					/>
					<Input
						label='New Password'
						placeholder='***********'
					/>
				</div>
				<HiEyeOff className='mt-5 ml-2 h-6 w-6 cursor-pointer text-gray-600' />
			</div>
			<p className='mt-2'>
				Can't remember your current password?{' '}
				<a
					className='text-sm font-semibold text-blue-600 underline'
					href='#'
				>
					Recover Account
				</a>
			</p>
			<button className='mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white'>
				Save Password
			</button>
			<hr className='mt-4 mb-8' />
		</>
	);
}

function EmailSection() {
	return (
		<>
			<p className='py-2 text-xl font-semibold'>Email Address</p>
			<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
				<p className='text-gray-600'>
					Your email address is <strong>john.doe@company.com</strong>
				</p>
				<button className='inline-flex text-sm font-semibold text-blue-600 underline decoration-2'>
					Change
				</button>
			</div>
			<hr className='mt-4 mb-8' />
		</>
	);
}

function Input({ label, placeholder }: InputProps) {
	return (
		<label>
			<span className='text-sm text-gray-500'>{label}</span>
			<div className='relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600'>
				<input
					type='password'
					className='w-full py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none'
					placeholder={placeholder}
				/>
			</div>
		</label>
	);
}

function Account() {
	return (
		<div className='col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow'>
			<div className='pt-4'>
				<h1 className='py-2 text-2xl font-semibold'>Account settings</h1>
			</div>
			<EmailSection />
			<PasswordForm />
			<DeleteAccount />
		</div>
	);
}

export default Account;
