import styled from 'styled-components';
import { GoogleIcon } from '../../assets/icons/GoogleIcon';
import { FacebookIcon } from '../../assets/icons/FacebookIcon';
import { LinkedInIcon } from '../../assets/icons/LinkedInIcon';
import { TwitterIcon } from '../../assets/icons/Twitter';
import { TextField } from '../TextField';
import { LogoShort } from '../../assets/icons/LogoShort';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
	name: string
	surname: string
	phoneOrEmail: string
	password: string
};

export const SignUp = () => {
	const { handleSubmit, control} = useForm<FormValues>();
	const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

	return (
		<Container>
			<LogoShort/>
			<TitleBox><Title>Добро пожаловать в AHUB</Title>
				<Text>Находите новые бизнес-контакты</Text></TitleBox>
			<Icons>
				<GoogleIcon/>
				<FacebookIcon/>
				<LinkedInIcon/>
				<TwitterIcon/>
			</Icons>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<Controller
						control={control}
						name="name"
						render={({ field: { onChange, value } }) => (
							<TextField value={value} onChange={onChange}/>
						)}
					/>
					<Controller
						control={control}
						name="surname"
						render={({ field: { onChange, value } }) => (
							<TextField value={value} onChange={onChange}/>
						)}
					/>
				</div>
				<Controller
					control={control}
					name="phoneOrEmail"
					render={({ field: { onChange, value } }) => (
						<TextField value={value} onChange={onChange}/>
					)}
				/>
				<Controller
					control={control}
					name="password"
					render={({ field: { onChange, value } }) => (
						<TextField value={value} onChange={onChange}/>
					)}
				/>
				<Footer>
					<Text>Продолжая вы соглашаетесь с Условиями использования и Политикой конфиденциальности</Text>
					<Button>ПРОДОЛЖИТЬ</Button>
				</Footer>
			</Form>
		</Container>
	);
};

const Container = styled.div`
		max-width: 456px;
		max-height: 610px;
	  padding: 40px;
		border: 1px solid lightgray;
		border-radius: 24px;
	  display: flex;
		flex-direction: column;
		justify-content: center;
	  align-items: center;
		gap: 24px;
`;

const TitleBox = styled.h1`
    display: flex;
		flex-direction: column;
		align-items: center;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
`;

const Text = styled.p`
    font-size: 14px;
`;

const Icons = styled.div`
    display: flex;
		align-items: center;
		gap: 24px;
`;

const Form = styled.form`
    margin: 0 40px;
`;

const Footer = styled.div`
    margin: 0 40px;
    display: flex;
		align-items: center;
`;

const Button = styled.button`
    padding: 16px 20px;
		color: white;
		background-color: #16993B;
		border-radius: 16px;
`;