const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const form = document.getElementById("quoteForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const address = (data.get("address") || "").toString().trim();
    const details = (data.get("details") || "").toString().trim();

    const subject = encodeURIComponent(`Quote Request - ${name || "New Customer"}`);
    const body = encodeURIComponent(
`Name: ${name}
Phone: ${phone}
Address: ${address}

Details:
${details}

Sent from EMT Electric website`
    );

    window.location.href = `mailto:electricpowerservice@yahoo.com?subject=${subject}&body=${body}`;
  });
}
