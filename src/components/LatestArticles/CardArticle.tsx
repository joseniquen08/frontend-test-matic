interface Props {
  image: string;
  author: string;
  title: string;
  content: string;
}

export const CardArticle = ({ image, author, title, content }: Props) => {
  return (
    <div className='card__article'>
      <div className='card__article__image'>
        <img src={image} alt={title} />
      </div>
      <div className='card__article__container'>
        <p className='card__article__author'>by { author }</p>
        <p className='card__article__title'>{ title }</p>
        <p className='card__article__content'>{ content }</p>
      </div>
    </div>
  )
}
