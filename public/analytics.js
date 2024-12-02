window.dataLayer = window.dataLayer || [];
function gtag() {
	dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-RVTPNK8QHL");

// <!-- Event snippet for WhatsApp conversion page -->

window.addEventListener("DOMContentLoaded", function () {
	document.addEventListener("click", function (e) {
		if (e.target.closest('a[href*="wa.me"]')) {
			gtag("event", "conversion", {
				send_to: "AW-16743308519/vLSlCMDG1_EZEOe56q8-",
			});
		}
	});
});
// <!-- Event snippet for Formulário conversion page -->

document.addEventListener("DOMContentLoaded", function () {
	const form = document.querySelector("#meuFormulario");

	form.addEventListener("submit", function (e) {
		e.preventDefault();

		if (e.target.checkValidity()) {
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({ event: "form_enviado" });
			gtag("event", "conversion", {
				send_to: "AW-16743308519/wirGCL3G1_EZEOe56q8-",
			});

			e.target.submit();
		}
	});
});
