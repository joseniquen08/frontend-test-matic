interface Props {
  name: string;
}

export const FtrItem = ({ name }: Props) => {
  return (
    <p className='footer__page'>{ name }</p>
  )
}
