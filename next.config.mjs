/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	output: 'standalone',
	devIndicators: {
		buildActivity: true,
		buildActivityPosition: 'bottom-right',
	},
};

export default nextConfig;
