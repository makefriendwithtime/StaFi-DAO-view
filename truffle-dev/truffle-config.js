module.exports = {
	networks: {
		development: {
			host: "127.0.0.1",
			port: 9545,
			network_id: "*",
			gasPrice: 0,
			gas: 50, 
			gasLimit: 8,

		},
	},
	compilers: {
		solc: {
			version: "0.8.12"
		}
	}

};
