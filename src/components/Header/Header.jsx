import location from '../../assets/img/location.png';
import account from '../../assets/img/Account.png';
import arrowDown from '../../assets/img/arrowdown.png';
import styles from './Header.module.scss';


function Header() {
    return (
        <header>
            <div className={`${styles.headerFlex} ${styles.headerInfo}`}>
                <div className={`${styles.headerInfoLocation} ${styles.headerFlex}`}>
                    <span><img src={location} alt="location" /></span>
                    <p>Минск</p>
                    <span><img src={arrowDown} alt="" /></span>
                    <p>Среднее время доставки:</p>
                    <span>00:24:19</span>
                </div>
                <div className={`${styles.headerInfoWorkTime} ${styles.headerFlex}`}>
                    <p>Время работы: с 11:00 до 23:00</p>
                    <span> <img src={account} alt="" /></span>
                    <p>Войти в аккаунт</p>
                </div>
            </div>
            <div className={`${styles.headerDelivery} ${styles.headerFlex}`}>
                <p>Куда пицца</p>
                <button className=''> 0 $</button>
            </div>
        </header >
    )
};

export default Header;