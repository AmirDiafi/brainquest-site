"use strict";

const values = new URLSearchParams(location.search).getAll("code");
const code = values.length === 1 ? values[0].trim().toUpperCase() : "";
const status = document.getElementById("invitation-status");
const label = document.getElementById("invitation-code");
const open = document.getElementById("open-invitation");

if (/^MC[A-Z2-7]{10}$/.test(code)) {
  status.textContent = "Keep this code for your first verified full-app finish.";
  label.textContent = code;
  label.hidden = false;
  open.href = "mindcrown://invite?code=" + encodeURIComponent(code);
  open.hidden = false;
} else {
  status.textContent = "This invitation code is missing or not recognised. Ask your friend to share a fresh link.";
}
