export default function BaseLayout({ children, className }) {
  return <div className={`${className || ""}`}>{children}</div>;
}
