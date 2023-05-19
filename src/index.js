window.canvas = document.getElementById("canvas");

(function () {
	if (!navigator.gpu) {
		alert("Get a better browser");
		return;
	}
})();