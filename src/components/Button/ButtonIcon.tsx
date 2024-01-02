type ButtonIconProps = {
  icon: string
  alt: string
}

const ButtonIcon = ({ icon, alt }: ButtonIconProps) => {
  return <img src={icon} alt={alt} />
}

export default ButtonIcon
