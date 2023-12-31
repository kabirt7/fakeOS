export function handleWindowButtons(event) {
  const target = event.target;

  if (
    target.classList.contains("red") ||
    target.classList.contains("yellow") ||
    target.classList.contains("green")
  ) {
    closeAll();
  }
}

export function handleDockIcons() {
  closeAll();
}

function closeAll() {
  const modals = [
    document.querySelector("#htmlRef-photo"),
    document.querySelector("#htmlRef-calc"),
    document.querySelector("#htmlRef-notes"),
    document.querySelector("#htmlRef-modal"),
  ];

  modals.forEach((value) => (value.innerHTML = ""));

  modals[3].classList = [];
}
