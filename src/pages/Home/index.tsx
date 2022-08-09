import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Home = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} className="d-flex justify-content-center mt-5">
          <img
            src={require("../../assets/img/logo.png")}
            alt={"Logo"}
            width={300}
          ></img>
        </Col>
        <Col xs={12}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Pesquisar piada</Form.Label>
              <Form.Control type="text" placeholder="Digite aqui...." />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="light" className='me-4'>
                Estou com sorte
              </Button>
              <Button variant="primary" type="submit">
                Pesquisar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
