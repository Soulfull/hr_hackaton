import React, { Component } from 'react'

import './App.css';
import OfficeMap from 'office-map'

const data = [
  {
    id: 1,
    surname: 'Смолин',
    chairDirection: 'south', x: 1, y: 2,
    equipments: [
      {type: 'Surname', specification: 'Смолин'},
      { type: 'desk', specification: 'Simple desk' },
      { type: 'laptop', specification: 'Laptop Dell Inspiron 15 5000' },
      { type: 'phone', specification: 'Cisco Phone IP 7960G/7940G' },
      { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
      { type: 'drawer', specification: 'Simple drawer' },
    ],
  },
  {
    id: 2,
    surname: 'Коновалов',
    chairDirection: 'north', x: 0, y: 1,
    equipments: [
      {type: 'Surname', specification: 'Коновалов'},
      { type: 'desk', specification: 'Simple desk' },
      { type: 'cpu', specification: 'Dual core 2.4 GHz, 16 GB RAM, 256 GB HD' },
      { type: 'monitor', specification: 'HP V197 18.5-inch' },
      { type: 'keyboard', specification: 'HP Ultrathin Wireless Keyboard' },
      { type: 'phone', specification: 'Cisco Phone IP 7960G/7940G' },
      { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
      { type: 'mouse', specification: 'HP USB 2 Button Optical Mouse' },
      { type: 'drawer', specification: 'Simple drawer' },
    ],
  },
  {
    surname: 'Тучкова',
    id: 3, chairDirection: 'north', x: 6, y: 0,
    equipments: [
      {type: 'Surname', specification: 'Тучкова'},
      { type: 'desk', specification: 'Simple desk' },
      { type: 'cpu', specification: 'Dual core 2.4 GHz, 16 GB RAM, 256 GB HD' },
      { type: 'monitor', specification: 'HP V197 18.5-inch' },
      { type: 'keyboard', specification: 'HP Ultrathin Wireless Keyboard' },
      { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
      { type: 'mouse', specification: 'HP USB 2 Button Optical Mouse' },
      { type: 'drawer', specification: 'Simple drawer' },
    ],
  },
  {
    surname: 'Роман',
    id: 4, chairDirection: 'east', x: 5, y: 0,
    equipments: [
      {type: 'Surname', specification: 'Роман'},
      { type: 'desk', specification: 'Simple desk' },
      { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
      { type: 'laptop', specification: 'Laptop Dell Inspiron 15 5000' },
      { type: 'phone', specification: 'Cisco Phone IP 7960G/7940G' },
      { type: 'drawer', specification: 'Simple drawer' },
    ],
  },
  {
    surname: 'Клыба',
    id: 5, chairDirection: 'east', x: 5, y: 1,
    equipments: [
      {type: 'Surname', specification: 'Клыба'},
      { type: 'desk', specification: 'Simple desk' },
      { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
      { type: 'laptop', specification: 'Laptop Dell Inspiron 15 5000' },
      { type: 'drawer', specification: 'Simple drawer' },
    ],
  },
  {
    surname: 'Вдовиченко',
    id: 6, chairDirection: 'west', x: 4, y: 0,
    equipments: [
      {type: 'Surname', specification: 'Вдовиченко'},
      { type: 'desk', specification: 'Simple desk' },
      { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
      { type: 'drawer', specification: 'Simple drawer' },
    ],
  },
  {
    surname: 'Смирнов',
    id: 7, chairDirection: 'north', x: 1, y: 1,
    equipments: [
      {type: 'Surname', specification: 'Смирнов'},
      { type: 'desk', specification: 'Simple desk' },
      { type: 'cpu', specification: 'Dual core 2.4 GHz, 8 GB RAM, 512 GB HD' },
      { type: 'monitor', specification: 'HP V197 18.5-inch' },
      { type: 'keyboard', specification: 'HP Ultrathin Wireless Keyboard' },
      { type: 'phone', specification: 'Cisco Phone IP 7960G/7940G' },
      { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
      { type: 'drawer', specification: 'Simple drawer' },
    ]
  },
  {
    surname: 'Шадура',
    id: 8, chairDirection: 'south', x: 3, y: 1,
    equipments: [
      {type: 'Surname', specification: 'Шадура'},
      { type: 'desk', specification: 'Simple desk' },
      { type: 'laptop', specification: 'Laptop Dell Inspiron 15 5000' },
      { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
    ]
  },
  {
    surname: 'Быжон',
    id: 9, chairDirection: 'south', x: 1, y: 3,
    equipments: [
      {type: 'Surname', specification: 'Быжон'},
      { type: 'desk', specification: 'Simple desk' },
      { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
      { type: 'drawer', specification: 'Simple drawer' },
    ]
  },
  {
    surname: 'Вышкин',
    id: 10, chairDirection: 'south', x: 0, y: 3,
    equipments: [
      {type: 'Surname', specification: 'хуйсгоры'},
      { type: 'desk', specification: 'Simple desk' },
      { type: 'monitor', specification: 'HP V197 18.5-inch' },
      { type: 'desktop', specification: 'HP CPU, keyboard and mouse' },
      { type: 'phone', specification: 'Cisco Phone IP 7960G/7940G' },
      { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
      { type: 'drawer', specification: 'Simple drawer' },
    ]
  },
  {
    surname: 'Мироводин',
    id: 11, chairDirection: 'south', x: 2, y: 3,
    equipments: [
      {type: 'Surname', specification: 'ушлепок'},
      { type: 'desk', specification: 'Simple desk' },
      { type: 'cpu', specification: 'Dual core 2.4 GHz, 16 GB RAM, 256 GB HD' },
      { type: 'monitor', specification: 'HP V197 18.5-inch' },
      { type: 'keyboard', specification: 'HP Ultrathin Wireless Keyboard' },
      { type: 'phone', specification: 'Cisco Phone IP 7960G/7940G' },
      { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
      { type: 'mouse', specification: 'HP USB 2 Button Optical Mouse' },
      { type: 'drawer', specification: 'Simple drawer' },
    ]
  },
  {
    surname: 'Кулаков',
    id: 12, chairDirection: 'south', x: 0, y: 2,
    equipments: [
      {type: 'Surname', specification: 'пидр'},
      { type: 'desk', specification: 'Simple desk' },
      { type: 'cpu', specification: 'Dual core 2.4 GHz, 16 GB RAM, 256 GB HD' },
      { type: 'monitor', specification: 'HP V197 18.5-inch' },
      { type: 'keyboard', specification: 'HP Ultrathin Wireless Keyboard' },
      { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
      { type: 'mouse', specification: 'HP USB 2 Button Optical Mouse' },
      { type: 'drawer', specification: 'Simple drawer' },
    ]
  }
]
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      desk: undefined,
      value: '',
    }
  }

  findPerson = () => {
    const person = data.find(elem => elem.surname.toLowerCase() === this.state.value.toLowerCase());
    if (person) {
      this.setState({
        desk: person
      })
    }
  };

  render() {
    const desk = this.state.desk;
    return (
      <div className="container" style={{ width: 1200, margin: "10px auto" }}>
        <h1>Space 307 Trading team</h1>
        <div className="search">
          <input className="search__input" type="text" onChange={(e) => {
            this.setState({
              value: e.target.value,
            })
          }} />
          <button className="search__btn" onClick={this.findPerson}>Найти</button>
        </div>

        {
          (desk && desk.x >= 0 && desk.y >= 0) ?
            (<h2>The desk {desk.id} moved to: {desk.x}, {desk.y}</h2>) :
            (desk && desk.id ? <h2>The desk {desk.id} was selected</h2> : '')}
        <hr />
        <br />
        <OfficeMap
          data={data}
          idSelected={desk && desk.id}
          onSelect={desk => this.setState({ desk })}
          onMove={desk => this.setState({ desk })}
          editMode={true}
          showNavigator={true}
          horizontalSize={5}
          verticalSize={3} />
      </div>
    )
  }
}