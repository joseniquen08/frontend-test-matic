import { IArticle } from '../../pages/NewArticlePage/index';
import { Button } from "../Shared/Button";
import { CardArticle } from './CardArticle';
import './index.css';

interface Props {
  articles: IArticle[];
  button: boolean;
}

export const LatestArticles = ({ articles, button }: Props) => {

  const latestArticles = articles.slice(0,4);

  return (
    <div className='articles'>
      <div className='articles__container'>
        <div className='articles__header'>
          <p className='articles__title'>Latest Articles</p>
          {
            button && (
              <Button route='/new/article'>
                <p>+ Add New Article</p>
              </Button>
            )
          }
        </div>
        <div className='articles__cards'>
          {
            latestArticles.map(({ id, author, title, imageUrl, content }) => (
              <CardArticle key={id} image={imageUrl} author={author} title={title} content={content}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
