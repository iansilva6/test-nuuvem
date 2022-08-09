import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap"
import { getJokes } from "../../services"
import { Result } from "../../components/Result"

export const Search = () => {
  const [jokes, setJokes] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState<Boolean>(true)

  // First effect when page load
  React.useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    let searchText = urlParams.get("joke")
    if (searchText) {
      getJokes(searchText)
        .then((res) => {
          setJokes(res.result)
          setLoading(false)
        })
        .catch((err) => {
          setLoading(false)
          console.log(err)
        });
    }
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} className={'mt-4'}>
          <a href='/'>Go to Home</a>
        </Col>
        <Col xs={12} className="d-flex justify-content-center mt-3">
          <h2><strong>Search results</strong></h2>
        </Col>
        <Col xs={12} className="d-flex justify-content-center mb-5">
          {
            !loading ? (
              <p className="text-center">{jokes.length} results found</p>
            ) : ''
          }
        </Col>
        {!loading ? (
          jokes.map((item) => {
            return (
              <Col xs={12} key={item.id}>
                <Result
                  icon_url={item.icon_url}
                  id={item.id}
                  url={item.url}
                  value={item.value}
                />
              </Col>
            );
          })
        ) : (
          // Load Component
          <Col xs={12} className="d-flex justify-content-center">
            <Spinner animation="border" variant="dark" />
          </Col>
        )}
      </Row>
    </Container>
  );
};
