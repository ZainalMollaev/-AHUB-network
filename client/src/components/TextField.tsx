import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, MouseEvent, useCallback, useState } from 'react'

import { SearchIcon } from '../assets/icons/SearchIcon'
import styled from 'styled-components'

export type InputPropsType = {
	label?: string
	inputTextClassName?: string
	error?: string
	searchInput?: boolean
	width?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, InputPropsType>(
	(
		{
			className,
			error,
			inputTextClassName,
			searchInput,
			value = '',
			placeholder,
			disabled,
			onChange,
			type,
			width,
			label,
			...restProps
		},
		ref
	) => {
		const [iconVisible, setIconVisible] = useState(type)

		const iconClickHandler = useCallback(
			(e: MouseEvent<HTMLButtonElement>) => {
				e.preventDefault()
				setIconVisible(() => (iconVisible === 'password' ? 'text' : 'password'))
			},
			[iconVisible]
		)

		const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
			onChange?.(e)
		}

		return (
			<Container>
				{label && <div>{label}</div>}
				<InputBox>
					{searchInput && (
						<span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<SearchIcon />
						</span>
					)}
					<Input
						ref={ref}
						disabled={disabled}
						placeholder={placeholder}
						value={value}
						type={iconVisible}
						onChange={handleChange}
						{...restProps}
					/>
				</InputBox>
				<div>{error && <div style={{ margin: '4px 0' }}>{error}</div>}</div>
			</Container>
		)
	}
)

const Container = styled.div`
	min-width: 456px;
	display: flex;
	flex: 1 1 auto;
	align-items: center;

	height: 40px;
	padding: 0 16px;
	background-color: #f1f3f7;

	border-radius: 4px;

	transition: 0.2s ease-out;
`

const InputBox = styled.div`
	display: flex;
	gap: 16px;
	width: 100%;
	height: 100%;
	padding: 6px 0;
	color: #a2a0a0;
`

const Input = styled.input`
	display: flex;
	width: 100%;
	height: 100%;
	padding: 6px 0;
	color: #a2a0a0;
	background-color: #f1f3f7;

	&:focus {
		outline: none;
	}
`
