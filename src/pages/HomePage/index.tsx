import axios from 'axios';
import { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer/index';
import { Hero } from '../../components/Hero';
import { LatestArticles } from '../../components/LatestArticles';
import { Navbar } from '../../components/Navbar';
import { IArticle, IResponse } from '../NewArticlePage/index';
import './index.css';

export const HomePage = () => {

  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    axios
      .get<IResponse>("https://www.api.recruitment.matic.io/articles", {
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then(response => {
        setArticles(response.data.data.reverse());
      })
  }, []);

  return (
    <div className='page'>
      <Navbar/>
      <Hero/>
      <LatestArticles articles={articles} button={true}/>
      <Footer/>
    </div>
  )
}
