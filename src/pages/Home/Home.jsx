import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import FoodDisplay from '../../components/Food Display/FoodDisplay'
import AppDownload from '../../components/App Download/AppDownload'

const Home = () => {
const [category, setCategory] =useState("All")

  return (
    <div>
      <Header/>
      <Menu  category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  )
}

export default Home
