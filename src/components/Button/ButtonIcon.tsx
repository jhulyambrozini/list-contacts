type ButtonIconProps = {
  icon: string
}

const ButtonIcon = ({ icon }: ButtonIconProps) => {
  return <img src={icon} alt="" />
}

export default ButtonIcon
