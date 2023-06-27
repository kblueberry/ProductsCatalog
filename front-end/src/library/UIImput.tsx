export default function UIInput({ placeholder, onChange = () => {} }) {
  return (
    <input
      type="text"
      className="form-control-custom w-100 p-2"
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
}
