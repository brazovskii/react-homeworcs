import "./NewTag.css";

const Square = ({ label, cssClass }) => {
  return <div className={cssClass}>{label}</div>;
};

const Text = ({ text, colors, size, underline }) => {
  return (
    <span
      style={{
        color: colors,
        fontSize: size,
        textDecoration: underline === true ? "underline" : false,
      }}
    >
      {text}
    </span>
  );
};

export { Square, Text };
