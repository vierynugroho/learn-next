const LoginPage = () => {
	return (
		<>
			<div className='flex justify-center items-center'>
				<div className='w-full max-w-xs'>
					<form className=' shadow-md rounded px-8 pt-6 pb-8 mb-4'>
						<div className='mb-4'>
							<label
								className='block text-white text-sm font-bold mb-2'
								htmlFor='username'
							>
								Username
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
								id='username'
								type='text'
								placeholder='Username'
							/>
						</div>
						<div className='mb-6'>
							<label
								className='block text-white text-sm font-bold mb-2'
								htmlFor='password'
							>
								Password
							</label>
							<input
								className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline'
								id='password'
								type='password'
								placeholder='******************'
							/>
							<p className='text-red-500 text-xs italic'>Please choose a password.</p>
						</div>
						<div className='flex items-center justify-between'>
							<button
								className='bg-slate-100 hover:bg-slate-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
								type='button'
							>
								Sign In
							</button>
							<a
								className='inline-block align-baseline font-bold text-sm text-slate-100 hover:text-slate-300'
								href='#'
							>
								Forgot Password?
							</a>
						</div>
					</form>
					<p className='text-center text-white text-xs'>&copy;2020 Acme Corp. All rights reserved.</p>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
