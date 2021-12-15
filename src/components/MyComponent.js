import pic from '../img/pic.png'

function MyComponent() {
    const me ={
      name: 'Luis Hernandez',
      Age: '23',
      FavoriteMusic: 'Hillsong Y&F'
    }
    return (
        <div className='data'>
          <ul>
            <img src={pic} alt="" />
          <li><b>Name:</b> {me.name} </li>
          <li> <b>Age :</b> {me.Age} </li>
          <li> <b>Favorite Music: </b> {me.FavoriteMusic} </li>
        </ul>
        </div>
    )
  }

export default MyComponent;