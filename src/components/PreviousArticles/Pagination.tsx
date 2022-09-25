import { Dispatch } from "react";

interface Props {
  nPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<number>;
}

export const Pagination = ({ nPages, currentPage, setCurrentPage }: Props) => {

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if(currentPage !== nPages) setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
      if(currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  return (
    <div className='pagination'>
      <div className='pagination__container'>
        <button type='button' className='pagination__button' onClick={prevPage}>
          <img src="/arrow-left.svg" alt="" />
          <p className='pagination__button__text'>Previous</p>
        </button>
        <ul className='pagination__items'>
          {
            pageNumbers.map(pgNumber => (
              <li key={pgNumber} className={`pagination__item ${currentPage === pgNumber ? 'pagination__item--active' : ''}`}>
                <p className='pagination__number' onClick={() => setCurrentPage(pgNumber)}>{pgNumber}</p>
                <div className='pagination__number--border'></div>
              </li>
            ))
          }
        </ul>
        <button type='button' className='pagination__button' onClick={nextPage}>
          <p className='pagination__button__text'>Next</p>
          <img src="/arrow-right.svg" alt="" />
        </button>
      </div>
    </div>
  )
}
