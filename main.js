import QRCode from "qrcode";
const canvas = document.querySelector("#canvas");
const input = document.querySelector("#data");
const colorLight = document.querySelector("#colorLight");
const colorDark = document.querySelector("#colorDark");
const downloadButton = document.querySelector("#downloadButton");
let data = "https://youtu.be/dQw4w9WgXcQ?si=Oa3-SPZpfGwT0573";

let qrOpts = {
	errorCorrectionLevel: "Q",
	margin: 2,
	width: 325,
	color: {
		dark: "#000000",
		light: "#ffffff",
	},
};
colorLight.value = "#ffffff";
colorDark.value = "#000000";

colorLight.addEventListener("change", (e) => {
	qrOpts.color.light = e.target.value;
	QRCode.toCanvas(canvas, data, qrOpts);
});
colorDark.addEventListener("change", (e) => {
	qrOpts.color.dark = e.target.value;
	QRCode.toCanvas(canvas, data, qrOpts);
});

input.addEventListener("input", (e) => {
	if (e.target.value == "") {
		data = "https://youtu.be/dQw4w9WgXcQ?si=Oa3-SPZpfGwT0573";
	} else {
		data = e.target.value;
	}
	QRCode.toCanvas(canvas, data, qrOpts);
});

downloadButton.addEventListener("click", () => {
	let url = canvas.toDataURL("image/png");
	downloadButton.href = url;
	downloadButton.download = `qrcode-${data}.png`;
});

QRCode.toCanvas(canvas, data, qrOpts);
