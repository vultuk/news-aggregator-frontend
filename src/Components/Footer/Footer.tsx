import { Col, Container, Row } from 'react-bootstrap';

import styles from './Footer.module.scss';

const Footer = () => (
  <Container className={styles.container} fluid>
    <Container>
      <Row>
        <Col>
          <h6 className={styles.footerText}>Copyright Me 2021</h6>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Footer;
