import { COLORS } from '@/shared/constants/colors';
import { STYLES } from '@/shared/constants/styles';
import { FC } from 'react';
import styled from 'styled-components';

interface Props {
	imgSrc?: string | null;
	description?: string | null;
	subscriberCount?: string | null;
	videoCount?: number | null;
	author?: string | null;
	onClick?: () => void;
}

export const ChannelCard: FC<Props> = ({
	imgSrc,
	videoCount,
	subscriberCount,
	author,
	description,
	onClick,
}) => {
	const channelImgSrc = imgSrc ?? undefined;
	const channelVideoCount = videoCount ?? 0;
	const channelSubscriberCount = subscriberCount ?? 0;
	const channelAuthor = author ?? 'No name';
	const channelDescription = description ?? 'No description';

	return (
		<Root>
			<img src={channelImgSrc} alt="channel" loading="lazy" />
			<Title>{channelAuthor}</Title>
			<p>{channelDescription}</p>
			<span>{channelVideoCount}</span>
			<span>{channelSubscriberCount}</span>
			<OpenChannelButton onClick={onClick} />
		</Root>
	);
};

const Root = styled.article`
	position: relative;
	padding: 2px;
	background-color: ${COLORS.grayscale200};
	display: grid;
	grid-template-rows: auto 1fr;
`;

const OpenChannelButton = styled.button`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
`;

const Title = styled.h3`
	${STYLES.lineClamp(2)}
`;

const Author = styled.button`
	position: relative;
	z-index: 1;
	${STYLES.lineClamp()}
`;
