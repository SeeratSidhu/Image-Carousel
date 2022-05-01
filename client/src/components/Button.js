
const Button = (props) => {

  return (
    <button className={props.isActive} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button;