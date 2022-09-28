import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'

import './Home.css';
const Home = () => {
    const [players, setPlayer] = useState([])
    const [search, setSearch] = useState("")
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then(data => setPlayer(data.player))
    }, [search])
    // console.log(players);
    console.log(cart);
const handleDelete=(id) =>{

    const deletedPlayer= cart.filter(pl=>pl.idPlayer!==id)
    setCart(deletedPlayer)
    Swal.fire("deleted")
    
}
    return (
        <div className="home-container">
            <div className="left">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text" placeholder="search"
                    className="search-input" />
                <button className="search-btn">Search</button>
                <div className="players-container">
                    <Players players={players}
                        cart={cart}
                        setCart={setCart}
                    />
                </div>
            </div>
            <div className="right">
                Cart:{cart.length}
                {
                    cart.map(pl=>(
                   <div className="info-container">
                   
                        <li>
                        <p>{pl.strPlayer}</p>
                        <p>{pl.price}</p>
                        </li>
                        <img src={pl.strThumb} alt=""/>
                        <button
                        onClick={()=>handleDelete(pl.idPlayer)}
                         className="delete-btn">Delete</button>
                   
                   </div>
                        ))
                }
            </div>
        </div>
    );
};

export default Home;