import React, { Component, useState } from 'react';
// import Server from './server';
import Form from './Form';

// class SelectAuto extends Component {
//   // Server = new Server();
//   state = {
//     posts: [
//       {
//         "name": "LADA", "dopname": "Comfort Vesta Cross", "src": "https://s.auto.drom.ru/i24210/c/photos/fullsize/lada/vesta_cross/lada_vesta_cross_728341.jpg",
//         "price": "791000", "id": "1"
//       },
//       {
//         "name": "LADA", "dopname": "Luxe Vesta Cross", "src": "https://allcarz.b-cdn.net/wp-content/uploads/2018/04/foto-vesta-cross-sedan_01.jpg",
//         "price": "806000", "id": "2"
//       },
//       {
//         "name": "Toyota", "dopname": "Camry", "src": "https://t1-cms-ru.images.toyota-europe.com/toyotaone/ruru/camry_before_after-1_tcm-3020-1331465.jpg",
//         "price": "1573000", "id": "3"
//       },
//       {
//         "name": "bmw", "dopname": "Camry", "src": "https://t1-cms-ru.images.toyota-europe.com/toyotaone/ruru/camry_before_after-1_tcm-3020-1331465.jpg",
//         "price": "1573000", "id": "4"
//       }, {
//         "name": "LADA", "dopname": "Comfort Vesta Cross", "src": "https://s.auto.drom.ru/i24210/c/photos/fullsize/lada/vesta_cross/lada_vesta_cross_728341.jpg",
//         "price": "791000", "id": "5"
//       },
//       {
//         "name": "LADA", "dopname": "Luxe Vesta Cross", "src": "https://allcarz.b-cdn.net/wp-content/uploads/2018/04/foto-vesta-cross-sedan_01.jpg",
//         "price": "806000", "id": "6"
//       },
//       {
//         "name": "LADA", "dopname": "Comfort Vesta Cross", "src": "https://s.auto.drom.ru/i24210/c/photos/fullsize/lada/vesta_cross/lada_vesta_cross_728341.jpg",
//         "price": "791000", "id": "7"
//       },
//       {
//         "name": "LADA", "dopname": "Luxe Vesta Cross", "src": "https://allcarz.b-cdn.net/wp-content/uploads/2018/04/foto-vesta-cross-sedan_01.jpg",
//         "price": "806000", "id": "8"
//       },
//       {
//         "name": "Toyota", "dopname": "Camry", "src": "https://t1-cms-ru.images.toyota-europe.com/toyotaone/ruru/camry_before_after-1_tcm-3020-1331465.jpg",
//         "price": "1573000", "id": "9"
//       },
//       {
//         "name": "bmw", "dopname": "Camry", "src": "https://t1-cms-ru.images.toyota-europe.com/toyotaone/ruru/camry_before_after-1_tcm-3020-1331465.jpg",
//         "price": "1573000", "id": "10"
//       }, {
//         "name": "LADA", "dopname": "Comfort Vesta Cross", "src": "https://s.auto.drom.ru/i24210/c/photos/fullsize/lada/vesta_cross/lada_vesta_cross_728341.jpg",
//         "price": "791000", "id": "11"
//       },
//       {
//         "name": "LADA", "dopname": "Luxe Vesta Cross", "src": "https://allcarz.b-cdn.net/wp-content/uploads/2018/04/foto-vesta-cross-sedan_01.jpg",
//         "price": "806000", "id": "12"
//       },
//     ],
//     error: false,
//     userMoney: 0,
//     model: '',
//   }

// componentDidMount() {
//     this.updateSelect();
// }

// updateSelect() {
//     this.Server.getAllSelect()
//         .then(this.getSelect)
//         .catch(this.getError);
// }

// getSelect = (select) => {
//     this.setState({
//         posts: select,
//         error: false
//     });
// }

// getError = () => {
//     this.setState({
//         error: true
//     });
// }

//   enterValue = (e) => {
//     e.preventDefault();
//     const price = document.querySelector('.price'),
//       model = document.querySelector('.model');
//     this.setState({
//       userMoney: price.value,
//       model: model.value,
//     });
//   }

//   renderItems(arr, money, model) {
//     return arr.map(item => {
//       const { name, src, price, dopname, id } = item;

//       if ((money >= (+price) && model == '') || (money >= (+price) && model.toLowerCase() == name.toLowerCase())) {
//         return (
//           <div className="block-cars">
//             <img className='range' src={src} style={{ width: "200px", height: '150px' }} />
//             <div className='descr'>
//               <span>Name: {name}</span>
//               <span>Model: {dopname}</span>
//               <span>Price: {price}</span>
//             </div>
//           </div>
//         )
//       }
//     });
//   }

//   render() {
//     const { posts, userMoney, model } = this.state;

//     const items = this.renderItems(posts, userMoney, model);
//     return (
//       <div className='container-fluid'>
//         <div className="row">
//           <Form submitForm={this.enterValue} />
//           <div className="bottom-form">
//             {items}
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

function SelectAuto() {
  const [state, newState] = useState({
    posts: [
      {
        "name": "LADA", "dopname": "Comfort Vesta Cross", "src": "https://s.auto.drom.ru/i24210/c/photos/fullsize/lada/vesta_cross/lada_vesta_cross_728341.jpg",
        "price": "791000", "id": "1"
      },
      {
        "name": "LADA", "dopname": "Luxe Vesta Cross", "src": "https://allcarz.b-cdn.net/wp-content/uploads/2018/04/foto-vesta-cross-sedan_01.jpg",
        "price": "806000", "id": "2"
      },
      {
        "name": "Toyota", "dopname": "Camry", "src": "https://t1-cms-ru.images.toyota-europe.com/toyotaone/ruru/camry_before_after-1_tcm-3020-1331465.jpg",
        "price": "1573000", "id": "3"
      },
      {
        "name": "bmw", "dopname": "Camry", "src": "https://t1-cms-ru.images.toyota-europe.com/toyotaone/ruru/camry_before_after-1_tcm-3020-1331465.jpg",
        "price": "1573000", "id": "4"
      }, {
        "name": "LADA", "dopname": "Comfort Vesta Cross", "src": "https://s.auto.drom.ru/i24210/c/photos/fullsize/lada/vesta_cross/lada_vesta_cross_728341.jpg",
        "price": "791000", "id": "5"
      },
      {
        "name": "LADA", "dopname": "Luxe Vesta Cross", "src": "https://allcarz.b-cdn.net/wp-content/uploads/2018/04/foto-vesta-cross-sedan_01.jpg",
        "price": "806000", "id": "6"
      },
    ],
    error: false,
    userMoney: 0,
    model: '',
  })

  const enterValue = (e) => {
    e.preventDefault();
    const price = document.querySelector('.price'),
      model = document.querySelector('.model');
    newState({
      userMoney: price.value,
      model: model.value,
    });
  }

  function renderItems(arr, money, model) {
    return arr.map(item => {
      const { name, src, price, dopname, id } = item;

      if ((money >= (+price) && model == '') || (money >= (+price) && model.toLowerCase() == name.toLowerCase())) {
        return (
          <div className="block-cars">
            <img className='range' src={src} style={{ width: "200px", height: '150px' }} />
            <div className='descr'>
              <span>Name: {name}</span>
              <span>Model: {dopname}</span>
              <span>Price: {price}</span>
            </div>
          </div>
        )
      }
    });
  }

  const { posts, userMoney, model } = state;

  const items = renderItems(posts, userMoney, model);

  return (
    <div className='container-fluid'>
      <div className="row">
        <Form submitForm={enterValue} />
        <div className="bottom-form">
          {items}
        </div>
      </div>
    </div>
  )

}

export default SelectAuto;