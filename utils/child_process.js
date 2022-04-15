import { randomNumber } from "./getRandomNumber";

process.on("message", (cant) => {
	const numbers = randomNumber(cant);
	process.send({ res: numbers });
});
