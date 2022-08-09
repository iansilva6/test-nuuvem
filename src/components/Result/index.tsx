import { Box, Text } from "./style";
import { Image, Row, Col } from "react-bootstrap";

type Props = {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

export const Result: React.FC<Props> = ({icon_url, id, url, value}) => {

  return (
    <Box className={'p-4 mb-4'}>
      <Row>
        <Col xs={12} sm={6} md={4} className='d-flex justify-content-center'>
          <Image
            src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png'
            alt={id}
            width={200}
            height={140}
            className='mb-4'
          />
        </Col>
        <Col xs={12} sm={6} md={8} className='d-flex justify-content-center'>
          <Row>
            <Col xs={12}>
              <Text className='text-center'>{value}</Text>
            </Col>
            <Col xs={12} className='d-flex justify-content-center'>
              <a href={url} target='_blank' rel="noreferrer noopener">See in api.chucknorris.io</a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Box>
  );
};
