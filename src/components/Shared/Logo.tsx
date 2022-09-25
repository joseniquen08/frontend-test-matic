interface Props {
  color: string;
}

export const Logo = ({ color }: Props) => {
  return (
    <img src={`/logo_${color}.svg`} alt="Logo" />
  )
}
