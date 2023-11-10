import React from 'react'
import './Poster.css'
import Title from '../../components/Title'
import Category from '../../components/Category'
import { useState, useEffect } from "react";
import Card from './Card';
import { useNavigate } from "react-router-dom";
export default function Poster() {
  const [array, setArray] = useState([]);
  const [arrCategory, setArrCategory] = useState([])
  const [indexCategory, setIndexCategory] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://192.168.144.66:8081/api/movies')
      .then(response => response.json())
      .then(json => setArray(json))
  }, []);

  useEffect(() => {
    fetch('http://192.168.144.66:8081/api/genres')
      .then(response => response.json())
      .then(json => setArrCategory(json))
  }, []);

  useEffect(() => {
    if (arrCategory.length > 0) {
      fetch(`http://192.168.144.66:8081/api/movies/${arrCategory[indexCategory]}`)
        .then(response => response.json())
        .then(json => setArray(json))
    }
  }, [indexCategory])



  return (
    <div id="poster">
      <Title main_title={'Сейчас в кино'} visible={true}>
        <Category selected={indexCategory} setArrCategory={(e) => {
          setIndexCategory(e)
        }} arrCategory={arrCategory} />
      </Title>
      <div className='container_card'>
        {array.map((e) => {
          return (
            <div onClick={
              () => {
                  navigate(`/${e.id}`)
              }} key={e.id}>
            <Card key={e.id} name={e.localName} img={e.urlIcon} categories={e.genres} rating={e.averageRating} />
          </div>
          )
        })}
      </div>

      <div style={{ textAlign: 'center' }}><button className='btn_poster'> <h4>Все новинки</h4></button></div>
    </div>
  )
}

