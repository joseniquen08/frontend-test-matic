import axios from 'axios';
import { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer/index';
import { FormNewArticle } from '../../components/FormNewArticle/index';
import { LatestArticles } from '../../components/LatestArticles';
import { Navbar } from '../../components/Navbar/index';
import { PreviousArticles } from '../../components/PreviousArticles';
import './index.css';

export interface IArticle {
  id: string;
  author: string;
  title: string;
  content: string;
  imageUrl: string;
  updatedAt: string;
}

export interface IResponse {
  data: IArticle[];
}

export const NewArticlePage = () => {

  const [articles, setArticles] = useState<IArticle[]>([]);
  const [changes, setChanges] = useState<number>(0);
  const [selectedArticle, setSelectedArticle] = useState<IArticle | null>(null);

  useEffect(() => {
    axios
      .get<IResponse>("https://www.api.recruitment.matic.io/articles", {
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then(response => {
        setArticles(response.data.data.sort((a, b) => {
          return (new Date(b.updatedAt)).getTime() - (new Date(a.updatedAt)).getTime();
        }));
        console.log('si');
      })
  }, [changes]);

  return (
    <div className='page'>
      <Navbar/>
      <FormNewArticle
        changes={changes}
        setChanges={setChanges}
        selectedArticle={selectedArticle}
        setSelectedArticle={setSelectedArticle}
      />
      <PreviousArticles
        articles={articles}
        setSelectedArticle={setSelectedArticle}
        changes={changes}
        setChanges={setChanges}
      />
      <LatestArticles articles={articles} button={false}/>
      <Footer/>
    </div>
  )
}
