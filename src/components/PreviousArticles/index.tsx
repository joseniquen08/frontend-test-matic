import { Dispatch, useState } from 'react';
import { IArticle } from '../../pages/NewArticlePage/index';
import './index.css';
import { Pagination } from './Pagination';
import { TrArticle } from './TrArticle';

interface Props {
  articles: IArticle[];
  setSelectedArticle: Dispatch<IArticle | null>;
  changes: number;
  setChanges: Dispatch<number>;
}

export const PreviousArticles = ({ articles, setSelectedArticle, changes, setChanges }: Props) => {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [recordsPerPage] = useState(6);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = articles.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(articles.length / recordsPerPage);

  return (
    <div className='pre-articles'>
      <div className='pre-articles__container'>
        <div className='pre-articles__header'>
          <p className='pre-articles__title'>Previous Articles</p>
          <p className='pre-articles__support-text'>Review and edit previous blog posts published on to the homepage.</p>
        </div>
        <div className='pre-articles__content'>
          <table className='table'>
            <thead>
              <tr className='table__head'>
                <th className='table__th'>Author Name</th>
                <th className='table__th'>Title</th>
                <th className='table__th table__th--content'>Content</th>
                <th className='table__th'>Date</th>
                <th className='table__th'></th>
              </tr>
            </thead>
            {
              currentRecords.length !== 0 ? (
                <tbody>
                  {
                    currentRecords.map(({ id, author, title, content, imageUrl, updatedAt }: IArticle) => (
                      <TrArticle
                        key={id}
                        id={id}
                        author={author}
                        title={title}
                        content={content}
                        imageUrl={imageUrl}
                        updatedAt={updatedAt}
                        setSelectedArticle={setSelectedArticle}
                        changes={changes}
                        setChanges={setChanges}
                      />
                    ))
                  }
                </tbody>
              ) : (
                <caption className='table__caption'>Cargando ...</caption>
              )
            }
          </table>
        </div>
        <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  )
}
