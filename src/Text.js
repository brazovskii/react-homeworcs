import "./App.css";

const Text = ({ text, colors, size, line }) => {
  return (
    <span
      style={{
        color: colors,
        fontSize: size,
        textDecoration: line === true ? "underline" : false,
      }}
    >
      {text}
    </span>
  );
};

export default Text;
