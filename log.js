class Log {
	static logujAkciju(string) {
			let now = moment().format("L hh:mm");
			console.log("[" + now + "] " + " " + string);
	}
}