import React from 'react'
import { Navigation } from './Navigation'

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='max-w-[2560px] w-full mx-0 my-auto'>
			<Navigation />
			{children}
		</div>
	)
}
