import { Alert, Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import Article from 'Types/article';
import LoadingSpinner from 'Components/LoadingSpinner/LoadingSpinner';
import ShortNewsArticle from 'Components/ShortNewsArticle/ShortNewsArticle';
import axios from 'axios';
import styles from './Home.module.scss';

const HomePage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const loadNews = () => {
    setLoading(true);
    setError(undefined);

    return axios('http://localhost:8080/news')
      .then((r) => setArticles(r.data as Article[]))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          {loading === true ? <LoadingSpinner /> : null}
          {error !== undefined ? <Alert variant="danger">{error}</Alert> : null}
          {articles.map((article: Article) => (
            <ShortNewsArticle article={article} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
