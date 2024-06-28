/** @type {import('next').NextConfig} */
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/api/v1/:path*",
				destination: `${API_URL}/api/v1/:path*`,
			},
		];
	},
};

export default nextConfig;
