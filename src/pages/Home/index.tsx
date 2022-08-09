import { Container, Row, Col, Image } from "react-bootstrap";
import { SearchForm } from '../../components/SearchForm'

export const Home = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} className="d-flex justify-content-center my-5">
          <Image
            src={require("../../assets/img/logo.png")}
            alt={"Logo"}
            width={300}
          />
        </Col>
        <Col xs={12}>
          <SearchForm />
        </Col>
      </Row>
    </Container>
  );
};
