
const PROXY_CONFIG = {
	'/weather/*': {
		target: 'http://api.openweathermap.org/data/2.5/forecast',
		secure: false,
		changeOrigin: true,
		cookieDomainRewrite: '',
		pathRewrite: {
			'^/weather': ''
		}
	},
}
module.exports = PROXY_CONFIG;