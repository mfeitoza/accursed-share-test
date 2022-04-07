import React from "react";
import "App.css";

import Chip from "./components/chip";
import Card from "./components/card";
import Dropdown from "./components/dropdown";
import Tooltip from "./components/ballon";

function App() {
  const avatar =
    "https://images.unsplash.com/photo-1612896488082-7271dc0ed30c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80";
  const image =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80";
  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 },
  ]
  return (
    <div className="container">
      <Chip name="Trixie" avatar={avatar} />
      <br />
      <br />
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '1rem'}}><Card image={image} title="Lorem ipsum" text="Dui ut ornare lectus sit amet est placerat. Risus nec feugiat in fermentum posuere urna nec. Interdum velit euismod in pellentesque massa placerat duis." /></div>
        <div style={{ marginLeft: '1rem'}}><Card image={image} title="Lorem ipsum" text="Dui ut ornare lectus sit amet est placerat. Risus nec feugiat in fermentum posuere urna nec. Interdum velit euismod in pellentesque massa placerat duis." /></div>
      </div>
      <br />
      <br />
      <Dropdown name="selectOne" label="Select" options={options} placeholder="Select one option" />
      <br />
      <br />
      <Tooltip text="Lorem ipsum dollor">
        <div style={{ padding: '20px', background: '#eee' }}>Tincidunt ornare massa eget</div>
      </Tooltip>
    </div>
  );
}

export default App;
