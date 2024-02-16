import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import styled from 'styled-components'

export const TagsList = () => {
	const tags = [
		{ id: 1, title: 'Сельское хозяйство' },
		{ id: 2, title: 'Зерно' },
		{ id: 3, title: 'Инжир' },
		{ id: 4, title: 'Просо' },
		{ id: 5, title: 'Инжир' },
		{ id: 6, title: 'Зерно' },
		{ id: 7, title: 'Сельское хозяйство' },
		{ id: 8, title: 'Зерно' },
		{ id: 9, title: 'Зерно' },
		{ id: 10, title: 'Инжир' },
		{ id: 11, title: 'Зерно' },
		{ id: 12, title: 'Инжир' },
		{ id: 13, title: 'Зерно' },
		{ id: 14, title: 'Инжир' },
		{ id: 15, title: 'Сельское хозяйство' },
		{ id: 16, title: 'Инжир' }
	]

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 10,
			slidesToSlide: 1
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 8,
			slidesToSlide: 1
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 6,
			slidesToSlide: 1
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 4,
			slidesToSlide: 1
		}
	}

	return (
		// @ts-ignore
		<Carousel responsive={responsive} autoPlay autoPlaySpeed={3000} infinite centerMode>
			{tags.map(tag => (
				<Tag key={tag.id}>{`#${tag.title}`}</Tag>
			))}
		</Carousel>
	)
}

const Tag = styled.div`
	margin: 16px 4px 8px 4px;
	height: 48px;
	min-width: fit-content;
	white-space: nowrap;
	border: 1px solid lightgray;
	border-radius: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`
