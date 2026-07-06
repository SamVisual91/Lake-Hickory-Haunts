export function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {text ? <p className="section-note">{text}</p> : null}
    </div>
  );
}
