import { FC } from "react";

type ButtonProps = React.ComponentPropsWithRef<"button">;

const Button: FC<ButtonProps> = (props) => <button {...props} className="py-1 px-3 rounded bg-primary text-text"/>;

export default Button;
