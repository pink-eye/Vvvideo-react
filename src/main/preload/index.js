import { contextBridge, shell, ipcRenderer } from 'electron';
import ytdl from 'ytdl-core';
import ytrend from '@freetube/yt-trending-scraper';
import { SponsorBlock } from 'sponsorblock-api';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { PATH } from './shared/constants/path';
import { api } from './api';

contextBridge.exposeInMainWorld('API', {
	...api,
	scrapeTrending: (parameters) => ytrend.scrape_trending_page(parameters),

	isYTVideoURL: (str) => ytdl.validateURL(str),

	getVideoId: (str) => ytdl.getVideoID(str),

	YTDLChooseFormat: (formats, quality) =>
		ytdl.chooseFormat(formats, { quality }),

	getSponsorblockInfo: (videoId, uuidv4) =>
		new SponsorBlock(uuidv4).getSegmentsPrivately(videoId, [
			'sponsor',
			'intro',
			'outro',
			'interaction',
			'selfpromo',
			'music_offtopic',
			'preview',
		]),

	postSponsorblockInfo: (videoId, uuidv4, segment) =>
		new SponsorBlock(uuidv4).postSegments(videoId, segment),

	readStorage: () =>
		new Promise((resolve) => {
			let readerStream = fs.createReadStream(PATH.storage);

			readerStream.setEncoding('UTF8');
			readerStream.on('data', resolve);
		}),

	writeStorage: (data) => {
		let writerStream = fs.createWriteStream(PATH.storage);

		writerStream.write(JSON.stringify(data));
		writerStream.end();
	},

	openExternalLink: (url) => shell.openExternal(url),

	getCaption: async (info, requiredLanguage) => {
		const format = 'vtt';
		const tracks =
			info.player_response.captions.playerCaptionsTracklistRenderer
				.captionTracks;

		if (tracks && tracks.length) {
			const track = tracks.find(
				(item) => item.languageCode === requiredLanguage,
			);

			const outputFolder = 'temp';
			const absolutePathOutputFolder = path.resolve(
				__dirname,
				outputFolder,
			);
			const outputFile = `${info.videoDetails.videoId}.${track.languageCode}.${format}`;

			if (!fs.existsSync(absolutePathOutputFolder))
				fs.mkdirSync(absolutePathOutputFolder);

			return new Promise((resolve) =>
				https.get(`${track.baseUrl}&fmt=${format}`, (res) => {
					res.pipe(
						fs.createWriteStream(
							path.resolve(__dirname, outputFolder, outputFile),
						),
					);

					res.on('end', () => {
						resolve({
							videoId: info.videoDetails.videoId,
							languageCode: track.languageCode,
							simpleText: track.name.simpleText,
						});
					});
				}),
			);
		}
	},

	clearTempFolder: () => {
		const folder = path.resolve(__dirname, 'temp');

		fs.readdir(folder, (err, files) => {
			if (err) throw err;

			for (const file of files) {
				fs.unlink(path.join(folder, file), (err) => {
					if (err) throw err;
				});
			}
		});
	},

	makeRequest: (url) => new Promise((resolve) => https.get(url, resolve)),

	getAppVersion: () => ipcRenderer.invoke('app-version'),
});
