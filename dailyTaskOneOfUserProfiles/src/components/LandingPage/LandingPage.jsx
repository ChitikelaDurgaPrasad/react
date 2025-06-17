import React, { useEffect, useMemo, useState } from 'react'
import { FixedSizeGrid as Grid } from 'react-window';
import {UserProfileCard, UserProfileCardData} from '../../index'
import default_Profile_Img from '../../assets/default_Profile_Img.jpeg'

const COLUMN_COUNT = 2;
const ITEM_HEIGHT = 380;
const ITEM_WIDTH = 388;
const GRID_HEIGHT = 576;
const GRID_PADDING = 10; // for layout spacing

const LandingPage = () => {
  // Create an array to hold the elements
  const[counter, setCounter] =useState(0);
  const[cards, setCards] = useState(null);
  useEffect(()=>{
    const data= setTimeout(()=>{
      setCards(UserProfileCardData())
    },2000);
    console.log("inside UseEffect");
    return () => {
      console.log("clear");
      clearTimeout(data);
    };
  },[])
  if(!cards){
    return(
      <div className='d-flex justify-content-center align-items-center vh-100'>
        Loading...
      </div>
    )
  }
  const rowCount = Math.ceil(cards.length / COLUMN_COUNT)
  const Cell =React.memo(({columnIndex, rowIndex, style}) => {
    const index = rowIndex * COLUMN_COUNT + columnIndex;
    if (index >= cards.length) return null;
    const item = cards[index];
    console.log(`Rendering cell at row ${rowIndex}, column ${columnIndex}, index ${index}`);
    return (
      <div style={{ ...style, padding: 10 }}>
        <UserProfileCard
          key={item.id}
          img={item?.img || default_Profile_Img}
        />
      </div>
    );
  })
  return (
    <>
        <button onClick={()=>{setCounter(prev => prev+1)}}>Click</button>
        <p>{counter}</p>
        <Grid
            columnCount={COLUMN_COUNT}
            columnWidth={ITEM_WIDTH}
            height={GRID_HEIGHT}
            rowCount={rowCount}
            rowHeight={ITEM_HEIGHT}
            width={ITEM_WIDTH * COLUMN_COUNT + GRID_PADDING}
            overscanRowCount={2} // 👈 preload 2 extra rows
          >
          {Cell}
        </Grid>
      {/* <div style={{display:'grid', gridTemplateColumns:'auto auto'}}>
        {cards.map(item => <UserProfileCard
          key={item.id}
          img={item?.img || default_Profile_Img}
        />)}
      </div> */}
    </>
  )
}

export default LandingPage