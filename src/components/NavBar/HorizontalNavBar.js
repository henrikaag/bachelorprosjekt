import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from "react-bootstrap/Container";

import '../../css/NavBar/HorizontalNavBar.css';

function TabsExample() {
  return (
    <Container className='NavigationTabs mt-4'>
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={12}>
          <ListGroup horizontal>
            <ListGroup.Item action href="#link1">
              Forbruk
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              For Deg
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              Innblikk
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={12}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">FORBRUK</Tab.Pane>
            <Tab.Pane eventKey="#link2">FOR DEG</Tab.Pane>
            <Tab.Pane eventKey="#link3">INNBLIKK</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </Container>
  );
}

export default TabsExample;