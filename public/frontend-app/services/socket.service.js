import * as io from "socket.io-client";
import {Observable} from "rxjs/Observable";

export class SocketService {
	host: string = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;
	//socket: SocketIOClient.Socket;

	constructor() {

	}

	get(name: string, callback) {
		this.name = name;
		let socketUrl = this.host + "/" + this.name;
		this.socket = io.connect(socketUrl);
		this.socket.on("connect", () => this.connect(callback));
		this.socket.on("disconnect", () => this.disconnect());
		this.socket.on("error", (error: string) => {
			console.log(`ERROR: "${error}" (${socketUrl})`);
		});

		// Return observable which follows "create" and "remove" signals from socket stream
		return this.socket;
	}
	// Handle connection opening
	connect(callback) {
		console.log(`Connected to "${this.host + "/" + this.name}"`);

		// Request initial list when connected
		this.socket.emit("start");
		this.socket.on("start_response", callback);
	}

	// Handle connection closing
	disconnect() {
		console.log(`Disconnected from "${this.name}"`);
	}
}