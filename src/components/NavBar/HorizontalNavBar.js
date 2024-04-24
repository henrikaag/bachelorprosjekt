import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from "react-bootstrap/Container";

import '../../css/NavBar/HorizontalNavBar.css';

function TabsExample() {
  return (
    <Container className='NavigationTabs mt-4'>
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#forbruk">
      <Row>
        <Col sm={12}>
          <ListGroup horizontal>
            <ListGroup.Item action href="#forbruk">
              Forbruk
            </ListGroup.Item>
            <ListGroup.Item action href="#fordeg">
              For Deg
            </ListGroup.Item>
            <ListGroup.Item action href="#innblikk">
              Innblikk
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={12}>
          <Tab.Content>
            <Tab.Pane eventKey="#forbruk">FORBRUK</Tab.Pane>
            <Tab.Pane eventKey="#fordeg">FOR DEG</Tab.Pane>
            <Tab.Pane eventKey="#innblikk">INNBLIKK</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </Container>
  );
}

export default TabsExample;