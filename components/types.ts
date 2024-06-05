export interface ClickableEvent<T, U> {
  onClick: (event: T) => U;
}

export interface Clickable {
  onClick: () => void;
}
