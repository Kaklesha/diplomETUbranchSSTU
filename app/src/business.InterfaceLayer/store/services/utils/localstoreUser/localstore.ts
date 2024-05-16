export function setLocalStorage(key: string, element: object) {
	try {
		//console.table(element)
		localStorage.setItem(key, JSON.stringify(element));
	} catch (error) {
		console.warn("Error: with setSessionStorage");
	}
}

export function getLocalStorage(key: string) {
	try {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		return JSON.parse(localStorage.getItem(key)!, null!);
	} catch (error) {
		console.warn("Error: with getSessionStorage");
	}
}
export function removeLocalStorage(key: string) {
	try {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		return JSON.parse(localStorage.removeItem(key)!, null!);
	} catch (error) {
		console.warn("Error: with getSessionStorage");
	}
}
// window.onstorage = event => { // можно также использовать window.addEventListener('storage', event => {
//   if (event.key != 'now') return;
//   console.log(event.key + ':' + event.newValue + " at " + event.url + " | ");
//   console.table(event.storageArea);
// };

// localStorage.setItem('now', Date.now());
