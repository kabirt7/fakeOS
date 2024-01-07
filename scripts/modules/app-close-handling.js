export function handleWindowButtons(event) {
  const target = event.target;
  console.log("arrived to hwb");
  console.log(event);

  if (
    target.classList.contains("red") ||
    target.classList.contains("yellow") ||
    target.classList.contains("green")
  ) {
    closeAll();
  } else {
    return;
  }
}

export function closeModals() {
  closeAll();
}

function closeAll() {
  console.log("got to close all");
  const modals = [
    document.querySelector("#htmlRef-photo"),
    document.querySelector("#htmlRef-calc"),
    document.querySelector("#htmlRef-notes"),
    document.querySelector("#htmlRef-modal"),
  ];

  for (let i = 0; i < modals.length; i++) {
    modals[i].classList.add("hidden");
  }
  // modals.forEach((value) => (value.innerHTML = ""));
}
