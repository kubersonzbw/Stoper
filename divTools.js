export function createTaskTemplate(minutes, seconds, number) {
  return `<li>Pomiar nr. ${number} :<span>${minutes}:${seconds
    .toString()
    .padStart(2, "0")}</span></li>`;
}
