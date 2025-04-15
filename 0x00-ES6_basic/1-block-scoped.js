/* eslint-disable @typescript-eslint/no-unused-vars */
export default function taskBlock(trueOrFalse) {
	const task = false;
	const task2 = true;

	if (trueOrFalse) {
		const task = false;
		const task2 = true;
	}

	return [task, task2];
}
/* eslint-enable @typescript-eslint/no-unused-vars */
