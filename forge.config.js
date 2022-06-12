module.exports = {
	packagerConfig: {},
	makers: [
		{
			name: '@electron-forge/maker-squirrel',
			config: {
				name: 'vvvideo_react',
			},
		},
		{
			name: '@electron-forge/maker-zip',
			platforms: ['darwin'],
		},
		{
			name: '@electron-forge/maker-deb',
			config: {},
		},
		{
			name: '@electron-forge/maker-rpm',
			config: {},
		},
	],
	plugins: [
		{
			name: '@electron-forge/plugin-webpack',
			config: {
				devContentSecurityPolicy: `default-src * 'unsafe-inline' 'unsafe-eval' https://youtube.com; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';`,
				mainConfig: './webpack.main.config.js',
				renderer: {
					config: './webpack.renderer.config.js',
					entryPoints: [
						{
							html: './src/renderer/index.html',
							js: './src/renderer',
							name: 'main_window',
							preload: {
								js: './src/main/preload',
							},
						},
					],
				},
			},
		},
	],
};
