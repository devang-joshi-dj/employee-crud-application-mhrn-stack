export default (config, env, helpers) => {
	// devServer doesn't exist on production builds
	if (!env.isProd) {
		config.devServer.proxy = [
			{
				path: '/api/**',
				target: 'http://localhost:5000',
			},
		];
	}
};
