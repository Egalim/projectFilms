import Logo from '../../components/logo'

export default function FormSub() {
    return (
        <div className="container newsletter" id="8">
            <img src={Logo} alt="" className="NLlogo" />
            <h1>Подпишитесь на E-mail рассылку</h1>
            <p>Если хотиет быть в курсе последних новостей и новинок кино -<br />
                заполните форму ниже и оформите бесплатную E-mail рассылку!</p>
            <div className="formForEmail">
                <input type="text" placeholder="Введите свой E-mail адрес" />
                <button className="subscribe">Подписаться</button>
            </div>
            <div>
                <input type="checkbox" id="checkbox" className="checkboxPolit" />
                <label htmlFor="checkbox" className="labelPolit"><pre>Соглашаюсь на условия </pre>
                    <a href="" className="linkPolit">политики конфиденциальности</a></label>
            </div>
        </div>
    )
}
