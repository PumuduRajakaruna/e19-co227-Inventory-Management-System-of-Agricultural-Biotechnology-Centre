import NavBar from './components/HomeNavBar';
import Card from './components/cards';

export default function studentHome() {
    return (
      <div className='body'>
       <NavBar />
        <h1>Inventory Management System Of Agricultural Biotechnology Centre</h1> 
       <Card />
        

      </div>
    )
  }