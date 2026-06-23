
interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <div>
    <button className="bg-black text-white rounded-2xl px-5 py-2.5 cursor-pointer" onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

export default Button