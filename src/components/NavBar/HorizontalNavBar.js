import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import '../../css/NavBar/HorizontalNavBar.css';
import ForYouPage from '../ForYou/ForYouPage';
import ForbrukPage from '../Forbruk/ForbrukPage';

function HorizontalNavBar() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 tab-navigation"
    >
      <Tab fill eventKey="forbruk" title="Forbruk">
        <ForbrukPage/>
      </Tab>
      <Tab eventKey="foryou" title="For deg">
        <ForYouPage/>
      </Tab>
      <Tab eventKey="contact" title="Innblikk">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default HorizontalNavBar;