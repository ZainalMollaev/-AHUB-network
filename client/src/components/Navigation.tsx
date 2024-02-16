import { LogoShort } from '../assets/icons/LogoShort'
import { TextField } from './TextField'
import { CarretDown } from '../assets/icons/CarretDown'
import { NotificationBell } from '../assets/icons/NotificationBell'
import { MessageCircle } from '../assets/icons/MessageCircle'
import { Menu } from '../assets/icons/Menu'
import React, { useState } from 'react'
import styled from 'styled-components'

export const Navigation = () => {
	const [textFieldValue, setTextFieldValue] = useState('')
	const [isLogin, setLogin] = useState(true)

	return (
		<Header>
			<IconBox>
				<LogoShort />
			</IconBox>
			<Network>Network</Network>
			<TextField
				searchInput
				placeholder='Поиск...'
				value={textFieldValue}
				onChange={e => setTextFieldValue(e.target.value)}
			/>
			{isLogin ? (
				<>
					<CreateBox>
						<p>СОЗДАТЬ</p>
						<CarretDown />
					</CreateBox>
					<AvatarBox>
						<Avatar></Avatar>
						<CarretDown />
					</AvatarBox>
					<IconBox>
						<NotificationBell />
					</IconBox>
					<IconBox>
						<MessageCircle />
					</IconBox>
				</>
			) : (
				<> </>
			)}
			<MenuBox>
				<Menu />
				<p>ЛЕНТА</p>
			</MenuBox>
		</Header>
	)
}

const Header = styled.div`
	padding: 0 0 0 32px;
	height: 72px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #f1f3f7;
`

const Network = styled.div`
	padding: 0 32px 0 0;
`

const CreateBox = styled.div`
	padding: 0 40px;
	font-weight: 700;
	display: flex;
	align-items: center;
	color: #2c323a;
`

const IconBox = styled.div`
	min-width: 48px;
`

const AvatarBox = styled.div`
	padding: 0 24px 0 0;
	display: flex;
	align-items: center;
`

const Avatar = styled.div`
	width: 40px;
	height: 40px;
	background-color: gray;
	border-radius: 20px;
`

const MenuBox = styled.div`
	padding: 0 20px;
	height: 100%;
	font-weight: 700;
	background-color: #f1f3f7;
	display: flex;
	align-items: center;
	gap: 20px;
`
