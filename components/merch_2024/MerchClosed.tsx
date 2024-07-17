import { Row, Col, Container } from "reactstrap";

const MerchClosed = () => (
  <Container className="container-md">
    <Row className="justify-content-center text-center">
      <Col lg="10">
        <p className="lead text-muted">
          Orders are now closed - check back next year for more merch!
        </p>
      </Col>
    </Row>
  </Container>
);

export default MerchClosed;
