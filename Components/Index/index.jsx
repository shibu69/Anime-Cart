import React from 'react'
import Front from "./Front/Front";
import Discover from './Discover/Discover';
import Popular from './Popular/Popular';
import Rated from './Rated/Rated';
import FootBanner from './FootBanner/FootBanner';

const Index = () => {
  return (
    <div>
      <Front/>
      <Discover/>
      <Popular/>
      <Rated/>
      <FootBanner/>
    </div>
  )
}

export default Index
