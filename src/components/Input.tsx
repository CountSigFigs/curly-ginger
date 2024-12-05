type InputProps = React.ComponentPropsWithRef<"input">;

const Input: React.FC<InputProps> = (props) => {
  return <input {...props} className="h-10 text-lg rounded text-black px-2" />;
};

export default Input;
