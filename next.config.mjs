/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	generateBuildId: async () => {
		return process.env.GIT_HASH;
	},
	poweredByHeader: false,
	output: 'standalone',
	reactStrictMode: true,
};

export default nextConfig;
