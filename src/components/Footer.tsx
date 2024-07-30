import { Logo } from "./Logo";

export function Footer({ title = "", url = "" }) {
  return (
    <footer id="footer">
      <a href={url} rel="noreferrer">
        <Logo />
      </a>
      <a href={url} rel="noreferrer">
        <code>{title}</code>
      </a>
    </footer>
  );
}
