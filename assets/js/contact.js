/* =====================================================================
   INTRICON — contact page
   Sends the form to the business email through FormSubmit (no server
   needed on Vercel). Falls back to opening the visitor's mail app
   if the request cannot be made.
   ===================================================================== */
(function () {
  "use strict";
  var D = window.INTRICON, U = D.util, $ = U.$, $$ = U.$$, co = D.company;

  /* ---------- fill in business details ---------- */
  var phone = $("#contactPhone"), email = $("#contactEmail"), facts = $("#contactFacts");
  if (phone) { phone.textContent = co.phone; phone.href = "tel:" + co.phoneIntl; }
  if (email) { email.textContent = co.email; email.href = "mailto:" + co.email; }
  if (facts) {
    facts.innerHTML = [
      ["Company", co.legalName],
      [co.ownerTitle, co.owner],
      ["Builder's licence", co.licence],
      ["ABN", co.abn],
      ["Established", co.establishedLabel],
      ["Based", co.address],
    ].map(function (f) { return "<li><span>" + f[0] + "</span><b>" + f[1] + "</b></li>"; }).join("");
  }
  var note = $("#formNote"); if (note) note.textContent = "Sent straight to " + co.email + ". No newsletters, no sharing of your details.";
  var form = $("#contactForm"); if (form) form.action = "https://formsubmit.co/" + co.email;

  /* ---------- form behaviour ---------- */
  if (!form) return;
  var btn = $("#submitBtn"), label = $("#submitLabel"), err = $("#formError"), done = $("#formDone");

  // floating labels: mark fields that have content
  $$(".field input, .field textarea", form).forEach(function (el) {
    var f = el.closest(".field");
    function sync() { f.classList.toggle("has-value", !!el.value.trim()); }
    el.addEventListener("input", sync); el.addEventListener("blur", function () { sync(); if (el.required) f.classList.toggle("is-invalid", !el.checkValidity()); });
    el.addEventListener("focus", function () { f.classList.remove("is-invalid"); });
    sync();
  });

  function showError(msg) { err.textContent = msg; err.hidden = false; }
  function setBusy(v) { btn.disabled = v; label.textContent = v ? "Sending…" : "Send enquiry"; }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    err.hidden = true;
    var firstBad = null;
    $$("[required]", form).forEach(function (el) {
      var ok = el.checkValidity(); el.closest(".field").classList.toggle("is-invalid", !ok);
      if (!ok && !firstBad) firstBad = el;
    });
    if (firstBad) { firstBad.focus(); showError("Please fill in the required fields (a valid email address helps us reply)."); return; }
    if (form._honey && form._honey.value) return; // bot

    var data = new FormData(form);
    var name = (data.get("name") || "").trim();
    setBusy(true);
    var payload = {};
    data.forEach(function (v, k) { if (k !== "_honey") payload[k] = v; });

    fetch("https://formsubmit.co/ajax/" + co.email, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload),
    }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (res) {
        if (!res.ok && !(res.j && (res.j.success === "true" || res.j.success === true))) throw new Error(res.j && res.j.message ? res.j.message : "Request failed");
        finish(name);
      })
      .catch(function (ex) {
        // Fallback: compose the email in the visitor's own mail app so nothing is lost.
        setBusy(false);
        var body = Object.keys(payload).filter(function (k) { return k[0] !== "_"; }).map(function (k) { return k + ": " + payload[k]; }).join("\n");
        showError("The form couldn't be sent from this browser. Opening your email app instead — or call " + co.phone + ".");
        setTimeout(function () {
          location.href = "mailto:" + co.email + "?subject=" + encodeURIComponent("Enquiry from the Intricon website") + "&body=" + encodeURIComponent(body);
        }, 600);
      });
  });

  function finish(name) {
    form.hidden = true; done.hidden = false;
    var dn = $("#doneName"); if (dn && name) dn.textContent = name.split(" ")[0] + ".";
    if (D.cutSplit) { var h = $("h2", done); }
    if (D.magnetic) D.magnetic();
    window.scrollTo({ top: done.getBoundingClientRect().top + scrollY - 140, behavior: "smooth" });
  }

  document.addEventListener("DOMContentLoaded", function () { D.observeReveal(); if (D.magnetic) D.magnetic(); if (D.scrambleOnReveal) D.scrambleOnReveal(); });
})();
