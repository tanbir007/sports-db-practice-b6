import React from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Player.css'
const Players = ({players,cart,setCart}) => {
   console.log(players);
    return (
        <div>
           <div className="playerCart-container">
            {
                players.map((player=><SinglePlayer
                player={player}
                key={player.idPlayer}
                cart={cart}
                setCart={setCart}
                />))
            }
           </div>
        </div>
    );
};

export default Players;