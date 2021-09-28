import fuzzysort from "fuzzysort";
import data from "../tag-versions";

const tagVersions = data.map(([version, helpTag]) => ({version, helpTag}));
const queryString = new URLSearchParams(window.location.search);
const search = queryString.get('q');
const input = document.getElementById("input"),
	results = document.getElementById("results");

function render() {
	results.innerHTML = fuzzysort.go(input.value, tagVersions, {
			key: 'helpTag',
			limit: 50,
		})
		.map(result => `<tr><td>${fuzzysort.highlight(result)}</td><td>${result.obj.version}</td></tr>`)
		.join("");
}

function updateQueryString() {
	queryString.set('q', input.value);

	const newLocation = `${window.location.pathname}?${queryString.toString()}`;
	history.replaceState(null, '', newLocation);
}

if (search) {
	input.value = search;
}

render();
input.addEventListener(
	"input",
	() => {
		render();
		updateQueryString();
	}
);
