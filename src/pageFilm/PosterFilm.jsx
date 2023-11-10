import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img from '../assets/media/image.png'
import Card from '../blocks/poster/Card'
import Title from '../components/Title';
import Detail from '../components/Detail';

export default function PosterFilm({name}) {
    const [array, setArray] = useState([]);
    let { movieId } = useParams();

    useEffect(() => {
        fetch(`http://192.168.144.66:8081/api/movie/${movieId}`)
            .then((response) => response.json())
            .then((json) => setArray(json));
    }, []);

    return (
        <div className='poster_film'>
            <Title main_title={'Постеры к фильму'} visible={false}>
                <Detail detail_title={'Все постеры'} />
            </Title>

            <h3>{name}</h3>

            <div className='container_card'>
                {
               array.map((e, index) => {
                    return (
                        <Card img={e.urlIcon} key={e.index}/>
                    )
                })
                }
            </div>
        </div>
    )
}

