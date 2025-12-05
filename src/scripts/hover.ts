export function hover(headerType: string) {
  const head = document.getElementById(
    `${headerType}-link-head`
  ) as HTMLElement;
  const tail = document.getElementById(
    `${headerType}-link-tail`
  ) as HTMLElement;

  if (head && tail) {
    head.classList.add('hovered');
    tail.classList.add('hovered');
  }
}

export function unhover(headerType: string) {
  const head = document.getElementById(
    `${headerType}-link-head`
  ) as HTMLElement;
  const tail = document.getElementById(
    `${headerType}-link-tail`
  ) as HTMLElement;

  if (head && tail) {
    head.classList.remove('hovered');
    tail.classList.remove('hovered');
  }
}
