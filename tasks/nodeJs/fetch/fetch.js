/**
 * 1. You need to make a GET request (via async/await) to the resource: https://jsonplaceholder.typicode.com/posts
 * using fetch method inside the sendRequest function
 * DOCS:
 * 		node-fetch (JSON example): https://github.com/node-fetch/node-fetch#json
 * 		async/await: https://javascript.info/async-await
 * 		async/await: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * 2. Save the payload of the response to "./response.json" file with only items which id less than 20.
 * Use the promisified version of FS module.
 * DOCS:
 * 		Promise example: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_promise_example
 * 		fsPromises.writeFile: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fspromises_writefile_file_data_options
 *
 * 3. Check yourself by running "npm run test:nodejs"
 */
const fetch = require('node-fetch');
const fs = require('fs/promises');
const path = require("path");

/**
 * Run fetch method inside the function
 * Use the fs.writeFile method inside the function
 */
const sendRequest = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: "GET",
		headers: {}
	});

	const json = await res.json();
	const data = json.filter(item => item.id < 20);
	const str = JSON.stringify(data, null, '\t');

	await fs.writeFile(path.join(__dirname, "response.json"), str); //надуюсь я понял правильно)
};

module.exports = {
	sendRequest
};