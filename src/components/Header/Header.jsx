import location from '../../assets/img/location.png';
import account from '../../assets/img/Account.png';
import arrowDown from '../../assets/img/arrowdown.png';


function Header() {
    return (
        <header className='header '>
            <div className='header-info header-flex'>
                <div className='header-info_location header-flex'>
                    <span><img src={location} alt="location" /></span>
                    <p>Минск</p>
                    <span><img src={arrowDown} alt="" /></span>
                    <p>Среднее время доставки:</p>
                    <span>00:24:19</span>
                </div>

                <div className='header-info_work-time header-flex'>
                    <p>Время работы: с 11:00 до 23:00</p>
                    <span> <img src={account} alt="" /></span>
                    <p>Войти в аккаунт</p>
                </div>
            </div>
            <div className='header-delivery header-flex '>
                <p>Куда пицца</p>
                <button className=''> 0 $</button>
            </div>
        </header>
    )
};

export default Header;