import axios from 'axios';
import { Dispatch, FormEvent, useEffect, useRef, useState } from 'react';
import { IArticle } from '../../pages/NewArticlePage/index';
import './index.css';

interface Props {
  changes: number;
  setChanges: Dispatch<number>;
  selectedArticle: IArticle | null;
  setSelectedArticle: Dispatch<IArticle | null>;
}

export const FormNewArticle = ({ changes, setChanges, selectedArticle, setSelectedArticle }: Props) => {

  const [author, setAuthor] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorContent, setErrorContent] = useState<boolean>(false);

  const authorRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleArticle = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    if (selectedArticle) {
      axios
        .patch(`https://www.api.recruitment.matic.io/articles/${selectedArticle.id}`, {
          author: authorRef.current?.value,
          title: titleRef.current?.value,
          content: contentRef.current?.value,
        })
        .then(response => {
          setIsLoading(false);
          setAuthor('');
          setTitle('');
          setContent('');
          setChanges(changes + 1);
          setSelectedArticle(null);
        })
        .catch(error => {
          setErrorContent(true);
          setIsLoading(false);
        });
    } else {
      axios
        .post('https://www.api.recruitment.matic.io/articles', {
          author: authorRef.current?.value,
          title: titleRef.current?.value,
          content: contentRef.current?.value,
        })
        .then(response => {
          setIsLoading(false);
          setAuthor('');
          setTitle('');
          setContent('');
          setChanges(changes + 1);
        })
        .catch(error => {
          setErrorContent(true);
          setIsLoading(false);
        });
    }
  }

  useEffect(() => {
    if (selectedArticle) {
      setAuthor(selectedArticle.author);
      setTitle(selectedArticle.title);
      setContent(selectedArticle.content);
    } else {
      setAuthor('');
      setTitle('');
      setContent('');
    }
  }, [selectedArticle]);

  return (
    <div className='form'>
      <div className='form__container'>
        <div className='form__header'>
          <p className='form__title'>Add New Blog Article</p>
          <p className='form__support-text'>Publish a new blog article to feature in the Easybank homepage.</p>
        </div>
        <div className='form__content'>
          <form onSubmit={handleArticle} className='form__card'>
            <div className='form__item'>
              <label htmlFor='author' className='form__label'>Author</label>
              <input type='text' id='author' value={author} onChange={e => setAuthor(e.target.value)} ref={authorRef} required className='form__input'/>
            </div>
            <div className='form__item'>
              <label htmlFor='blog-title' className='form__label'>Blog Title</label>
              <input type='text' id='blog-title' value={title} onChange={e => setTitle(e.target.value)} ref={titleRef} required className='form__input'/>
            </div>
            <div className='form__item'>
              <label htmlFor='blog-content' className='form__label'>Blog Content</label>
              <textarea
                id='blog-content'
                rows={10}
                value={content}
                onChange={e => {
                  setContent(e.target.value);
                  setErrorContent(false);
                }}
                ref={contentRef}
                required
                className={`form__input ${errorContent ? 'form__input--error' : ''}`}/>
            </div>
            <button type='submit' disabled={isLoading} className={`form__button ${isLoading ? 'button__disabled' : ''}`}>
              {
                selectedArticle ? 'Update' : 'Save'
              }
            </button>
            {
              selectedArticle && (
                <button type='submit' onClick={() => setSelectedArticle(null)} className='form__button form__button--cancel'>
                  Cancel
                </button>
              )
            }
          </form>
        </div>
      </div>
    </div>
  )
}
