import React from 'react'
import './Updates.css'
import Title from '../../components/Title'
import Detail from '../../components/Detail'
import Card_uptd from './Card_uptd'
import img from '../../assets/news.png'

export default function Updates() {
  return (
    <div id='updates'>
      <Title main_title={'Последние новости'} visible={false}>
        <Detail detail_title={'Все новости'} />
      </Title>

      <div className="container_new">
        
        <div className="main_new" style={{ backgroundImage: `url(${img})` }}>
          <h5>12 Окт 2023</h5>
          <div className="row_main_new">
            <h2>Не время умирать. Перенос релиза фильма </h2>
            <h4>Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.</h4>
          </div>
        </div>

        <div className="other_new">
          <Card_uptd />
          <Card_uptd />
          <Card_uptd />
          <Card_uptd />
        </div>

      </div>
    </div>
  )
}

