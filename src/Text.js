import "./App.css";

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

export default Text;
