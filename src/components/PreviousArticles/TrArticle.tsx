import axios from 'axios';
import { Dispatch } from "react";
import { IArticle } from '../../pages/NewArticlePage/index';

type Props = {
  id: string;
  author: string;
  title: string;
  content: string;
  updatedAt: string;
  imageUrl: string;
  setSelectedArticle: Dispatch<IArticle | null>;
  changes: number;
  setChanges: Dispatch<number>;
}

export const TrArticle = ({ id, author, title, content, imageUrl, updatedAt, setSelectedArticle, changes, setChanges }: Props) => {

  const d = new Date(updatedAt);
  const date = ('0' + d.getUTCDate()).slice(-2) +"/"+ ('0' + (d.getUTCMonth()+1)).slice(-2) +"/"+ d.getUTCFullYear();

  const selectArticle = () => {
    setSelectedArticle({
      id,
      author,
      title,
      content,
      imageUrl,
      updatedAt,
    });
  }

  const deleteArticle = async () => {
    axios
      .delete(`https://www.api.recruitment.matic.io/articles/${id}`)
      .then(response => {
        setChanges(changes + 1);
      })
  }

  return (
    <tr className='table__row'>
      <td className='table__td table__td--author'>{ author }</td>
      <td className='table__td table__td--title'>{ title }</td>
      <td className='table__td table__td--truncate'>{ content }</td>
      <td className='table__td'>{ date }</td>
      <td className='table__td table__td--flex'>
        <p className='table__td--delete' onClick={deleteArticle}>Delete</p>
        <p className='table__td--edit' onClick={selectArticle}>Edit</p>
      </td>
    </tr>
  )
}

export default Props;
