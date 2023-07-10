
const Input = ({ label, type, placeholder, onKeyDownHandler}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onKeyDown={onKeyDownHandler}
      />
    </div>
  );
};

export default Input;
