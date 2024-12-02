window.dataLayer = window.dataLayer || [];
function gtag() {
	dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-RVTPNK8QHL");

window.addEventListener("DOMContentLoaded", function () {
	document.body.addEventListener("click", function (e) {
		const link = e.target.closest('a[href*="wa.me"]');
		if (link) {
			gtag("event", "conversion", {
				send_to: "AW-16743308519/vLSlCMDG1_EZEOe56q8-",
			});
		}
	});

	const form = document.querySelector(".form");
	if (form) {
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
	}
});
