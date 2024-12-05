import { FC } from "react"

type LabelProps = React.ComponentPropsWithRef<"label">

const Label: FC<LabelProps> = (props) => {
    return <label {...props}></label>
}

export default Label;
