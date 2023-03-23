declare module "caret-position" {
    function get(element: HTMLElement): number | undefined;
    function set(element: HTMLElement, position: number): void;
    function getRect(element: HTMLElement, position?: number): ClientRect | undefined;
  }