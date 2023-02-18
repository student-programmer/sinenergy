import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react'
import Category from '../components/Category/Category';
import Personal from '../components/Personal/Personal';
import { fetchCategory } from '../http/userAPI';
import { Context } from '../index';

const Home = observer(() => {
  const { category } = useContext(Context);
  useEffect(() => {
    fetchCategory().then((data) => category.setCategory(data));
}, []);
  return (
    <div>
      {/* <Category/> */}
      <Personal/>
    </div>
  )
})

export default Home