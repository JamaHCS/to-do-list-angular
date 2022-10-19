module.exports = {
	name:"app",
  script: "serve",
  env: {
    PM2_SERVE_PATH: '.',
    PM2_SERVE_PORT: 8083,
    PM2_SERVE_SPA: 'true'
  }
}


