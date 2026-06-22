
interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <div>
    <button onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

export default Button