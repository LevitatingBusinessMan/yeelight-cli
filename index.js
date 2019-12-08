#!/usr/bin/node

const Client_ = require("yeelight.js")
const Client = new Client_()

process.argv.splice(0,2)
const method = process.argv.shift()

for (let i = 0; i < process.argv.length; i++) {
	if (parseInt(process.argv[i]))
		process.argv[i] = parseInt(process.argv[i])
}

Client.on("discovered", light => light.Command(method, process.argv).then(result => {
	console.log(result)

	//2 lights handled already
	if (Client.lights.length > 1)
		process.exit(0)
}))

Client.Discover()

setTimeout(process.exit, 1000)
