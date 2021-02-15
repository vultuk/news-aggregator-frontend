import { Col, Container, Row } from 'react-bootstrap';

import styles from './Header.module.scss';

const Header = () => (
  <Container>
    <Row>
      <Col>
        <h1 className={styles.headerText}>Welcome to News Aggregator!</h1>
      </Col>
    </Row>
  </Container>
);

export default Header;
