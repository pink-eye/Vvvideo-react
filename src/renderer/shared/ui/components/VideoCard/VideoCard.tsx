import { COLORS } from '@/shared/constants/colors';
import { STYLES } from '@/shared/constants/styles';
import { FC } from 'react';
import styled, { css } from 'styled-components';

interface GeneralProps {
	imgSrc?: string | null;
	title: string;
	views?: number | null;
	date?: string | null;
	author?: string | null;
	onClick?: () => void;
	onAuthor?: () => void;
}

type DefaultVideoProps = GeneralProps & {
	isHistory?: false;
	isWatched?: boolean;
};

type HistoryVideoProps = GeneralProps & {
	isHistory: true;
	onDelete: () => void;
};

export const VideoCard = ({
	imgSrc,
	views,
	date,
	author,
	title,
	onAuthor,
	onClick,
	...props
}: DefaultVideoProps | HistoryVideoProps) => {
	const videoImgSrc = imgSrc ?? undefined;
	const videoViews = views || 0;
	const videoDate = date ?? 'No date';
	const videoAuthor = author ?? 'No name';
	const { isHistory } = props;

	return (
		<Root
			$isHistory={!!isHistory}
			$isWatched={!isHistory && !!props.isWatched}
		>
			<ImageWrapper>
				<img src={videoImgSrc} alt="video" loading="lazy" />
				{isHistory && (
					<HistoryDeleteBtn onClick={props.onDelete}>
						x
					</HistoryDeleteBtn>
				)}
			</ImageWrapper>
			<Title>{title}</Title>
			<span>{videoDate}</span>
			<span>{videoViews}</span>
			<Author onClick={onAuthor}>{videoAuthor}</Author>
			<OpenVideoButton onClick={onClick} />
		</Root>
	);
};

interface RootStyleProps {
	$isHistory: boolean;
	$isWatched: boolean;
}

const Root = styled.article<RootStyleProps>`
	position: relative;
	padding: 2px;
	background-color: ${COLORS.grayscale200};
	display: grid;
	grid-template-rows: auto 1fr;

	${({ $isHistory }) =>
		$isHistory &&
		css`
			&:hover {
				${HistoryDeleteBtn} {
					display: block;
				}
			}
			&:not(:hover) {
				${HistoryDeleteBtn} {
					display: none;
				}
			}
		`};

	${({ $isWatched }) =>
		$isWatched &&
		css`
			opacity: 0.8;
		`};
`;

const ImageWrapper = styled.figure`
	width: 100%;
	position: relative;
	aspect-ratio: 16 / 9;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const OpenVideoButton = styled.button`
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

const HistoryDeleteBtn = styled.button`
	position: absolute;
	top: 5px;
	right: 5px;
	z-index: 1;
	background-color: red;
`;
