interface Props {
  children: JSX.Element;
}

export const IconSN = ({ children }: Props) => {
  return (
    <li className='footer__item'>
      { children }
    </li>
  )
}
