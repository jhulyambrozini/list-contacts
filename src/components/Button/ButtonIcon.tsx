type ButtonIconProps = {
  icon: string
  alt: string
}

const ButtonIcon = ({ icon, alt }: ButtonIconProps) => (
  <img src={icon} alt={alt} />
)

export default ButtonIcon
