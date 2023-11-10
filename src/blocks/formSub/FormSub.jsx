import Logo from '../../components/logo'
import './FormSub.css'

export default function FormSub() {
    return (
        <div className="container_form_sub">
            <Logo />
            <h1>Подпишитесь на E-mail рассылку</h1>
            <h4>Если хотиет быть в курсе последних новостей и новинок кино -<br />
                заполните форму ниже и оформите бесплатную E-mail рассылку!</h4>

            <div className="form_sub">
                <input type="text" placeholder="Введите свой E-mail адрес" className='in_for_sub'/>
                <button className="subscribe">Подписаться</button>
            </div>

            <div>
                <input id='checkbox1' type="checkbox" className='checkbox txt_black' />
                <label htmlFor='checkbox1'>
                    <pre>Соглашаюсь на условия &nbsp;</pre>
                    <a className='link_reg'> политики конфиденциальности</a>
                </label>
            </div>
        </div>
    )
}
