import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import '../../css/NavBar/HorizontalNavBar.css';

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
        Forbruk
      </Tab>
      <Tab eventKey="fordeg" title="For Deg">
        For Deg
      </Tab>
      <Tab eventKey="innblikk" title="Innblikk">
        Innblikk
      </Tab>
    </Tabs>
  );
}

export default HorizontalNavBar;