import Article from 'Types/article';
import React from 'react';
import styles from './ShortNewsArticle.module.scss';

const NewsArticle = (props: { article: Article }) => (
  <div className={styles.container}>
    <a href={props.article.originalUrl} target="_blank" rel="noreferrer">
      <h3>{props.article.title}</h3>
    </a>
    <p>{props.article.content}</p>
  </div>
);

export default NewsArticle;
