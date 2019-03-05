import React from 'react';
import { Text } from 'tamia';
import { Link } from 'tamia-gatsby-link';

export const lang = 'ru';
export const title = 'Наноблог Артёма Сапегина';
export const description =
	'Блог фронтенд-разработчика, который живёт в Берлине, работает в Вейфейре, фотографирует, пишет, гладит собак и пьёт кофе.';
export const siteUrl = 'https://blog.sapegin.me/';
export const author = 'Артём Сапегин';
export const twitter = '@iamsapegin';
export const aboutTitle = 'Обо мне';
export const relatedTitle = 'Читайте также';
export const subscribeTitle = 'Рассылка';
export const subscribeInfo =
	'Подпишитесь на рассылку, чтобы получать новые статьи по почте.';
export const discussPost = 'Обсудить в твитере';
export const editPost = 'Отредактировать на Гитхабе';
export const subscriptionEmailLabel = 'Эл. почта';
export const subscriptionSubmitLabel = 'Подписаться';

export const LongDescription = () => (
	<>
		<Text mb="m" size="s">
			Я живу в Берлине и работаю фронтенд-разработчиком в{' '}
			<Link href="https://www.wayfair.com/">Вэйфейре</Link>, а в свободное время
			фотографирую, глажу своих собак и пью кофе.
		</Text>
		<Text mb="m" size="s">
			Читайте обо мне <Link href="http://sapegin.me/">на моём сайте</Link> и
			подписывайтесь{' '}
			<Link href="http://birdwatcher.ru/">на мой блог о фотографии</Link> и{' '}
			<Link href="http://twitter.com/iamsapegin">твитер</Link>.
		</Text>
	</>
);

export const PublishedOn = ({ date }) => <>Опубликовано {date}</>;

export const PoweredBy = () => (
	<>
		Работает на <Link href="https://www.gatsbyjs.org/">Гетсби</Link> и{' '}
		<Link href="https://emotion.sh/">Эмоушене</Link>, хостится на{' '}
		<Link href="https://www.netlify.com/">Нетлифае</Link>
	</>
);