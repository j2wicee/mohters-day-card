let isOpen = false;

function toggleEnvelope() {
  const flap = document.querySelector(".flap");
  const card = document.getElementById("card");
  const signatures = document.querySelectorAll(".signature-card");

  if (!isOpen) {
    // Open animation
    flap.classList.add("open");

    setTimeout(() => {
      card.classList.add("show");

      // Show signature cards
      signatures.forEach((sig) => sig.classList.add("show"));
    }, 700);
  } else {
    // Close animation
    card.classList.remove("show");

    // Hide signature cards immediately
    signatures.forEach((sig) => sig.classList.remove("show"));

    setTimeout(() => {
      flap.classList.remove("open");
    }, 600);
  }

  isOpen = !isOpen;
}
