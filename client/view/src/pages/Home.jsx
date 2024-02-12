import React from 'react'

import Header from "../components/Header";
import Images from "../components/Images";
import Middle from "../components/Middle"
import Middle2 from "../components/Middle2";
import Middle3 from "../components/Middle3";
import Middle4 from "../components/Middle4";
import Bottom from "../components/Bottom";
import Navabar from '../components/Navabar';

const Home = () => {
  return (
    <div>
    <Navabar/>
    <Header/>
  <Images/>
<Middle/>
  <Middle2/>
  <Middle3/>
  <Middle4/>
  <Bottom/>
    </div>
  )
}

export default Home
