interface Props {
  text: string;
}

export const NavItem = ({ text }: Props) => {
  return (
    <li className="navbar__item">
      <p className="navbar__item__text">{ text }</p>
      <div className="navbar__item--border"></div>
    </li>
  )
}
