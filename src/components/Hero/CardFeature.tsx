interface Props {
  image: string;
  title: string;
  content: string;
}

export const CardFeature = ({ image, title, content }: Props) => {
  return (
    <div className='card__feature'>
      <div className='card__feature__image'>
        <img src={`./${image}`} alt={title} />
      </div>
      <p className='card__feature__title'>{ title }</p>
      <p className='card__feature__content'>{ content }</p>
    </div>
  )
}
