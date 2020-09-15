import fuzzysort from "fuzzysort";
import data from "../tag-versions";

const tagVersions = data.map(([version, helpTag]) => ({version, helpTag}));
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
render();
input.addEventListener("input", render);
