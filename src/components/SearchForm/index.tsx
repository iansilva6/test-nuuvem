import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export const SearchForm = () => {
  const [searchText, setSearchText] = React.useState("");
  const history = useNavigate();

  const search = (evt: React.FormEvent) => {
    evt.preventDefault();
    history(`/search?joke=${searchText}`);
  };

  return (
    <form onSubmit={search}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Search joke</Form.Label>
        <Form.Control
          type="text"
          placeholder="Type here...."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          required={true}
        />
      </Form.Group>
      <div className="d-flex justify-content-center">
        <Button variant="light" className="me-4">
          I'm feeling lucky
        </Button>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </div>
    </form>
  );
};
