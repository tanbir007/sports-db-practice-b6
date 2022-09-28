import React from 'react';
import './SinglePlayer.css';
const SinglePlayer = ({player,cart,setCart}) => {
    const {dateBorn,idPlayer,strNationality,strThumb,strPlayer,strDescriptionEN} =player

    const addToCart=()=>{
       const info={
        idPlayer,
        strPlayer,
        price:115,
        strThumb,
       }
       const newInfo=[info]
       setCart(newInfo)
       console.log([newInfo]);

       if(cart){
        const newCart=[...cart,info]
        setCart(newCart)
        return
    }
    else{
        setCart(info)
    }
    }
    //bookmarkIdx

    const addBookMark=()=>{
        const info={
            idPlayer,
            strPlayer,
            quantity:1,
           bookmark:'true',
           }
const prevBookmark =JSON.parse(localStorage.getItem('bookmark'))

if(prevBookmark){
    localStorage.setItem('bookmark',JSON.stringify([...prevBookmark,info]))

  const isExist= prevBookmark.find(p=>p.idPlayer===idPlayer)
  console.log(isExist,"existt");

  if(isExist){

    // isExist.quantity=isExist.quantity+1
    isExist.quantity=isExist.quantity +1
    localStorage.setItem("bookmark",JSON.stringify(prevBookmark))
  console.log(isExist);
  alert("bookmark added")
  
  }
  else{
    localStorage.setItem('bookmark',JSON.stringify([...prevBookmark,info]))
  }

}
else{
    localStorage.setItem('bookmark',JSON.stringify([info]))
}
    }
   
    return (
        <div className="single-player" data-aos="zoom-in">
            
            <h2>{strPlayer}</h2>
           <img src={strThumb?strThumb:""} alt=""/>
           <p>DOB:{dateBorn}</p>
           <p>{strNationality}</p>
           <p>{strDescriptionEN?strDescriptionEN.slice(0,100):""}</p>
           <button 
           onClick={()=>addToCart()}
           className="playerCart-btn">Add to cart</button>
           <button className="playerCart-btn">Details</button>
           <button
           onClick={()=>addBookMark()}
           className="playerCart-btn">Bookmark</button>

        </div>
    );
};

export default SinglePlayer;