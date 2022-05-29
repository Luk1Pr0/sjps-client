/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER: 'http://192.168.0.101:5000'
		// TEST http://192.168.0.101:5000
		// PRODUCTION https://sjps-server.herokuapp.com
	}
}

module.exports = nextConfig
