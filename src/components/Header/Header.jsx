import location from '../../assets/img/location.png';
import account from '../../assets/img/Account.png';
import arrowDown from '../../assets/img/arrowdown.png';
import styles from './Header.module.scss';
import cl from 'classnames';

export default function Header() {
    return (
        <header>
            <div className={cl(styles.headerFlex, styles.headerInfo)}>
                <div className={cl(styles.headerInfo__Location, styles.headerFlex)}>
                    <span><img src={location} alt="location" /></span>
                    <p>Минск</p>
                    <span><img src={arrowDown} alt="arrowDown" /></span>
                    <p>Среднее время доставки:</p>
                    <span>00:24:19</span>
                </div>
                <div className={cl(styles.headerInfo__WorkTime, styles.headerFlex)}>
                    <p>Время работы: с 11:00 до 23:00</p>
                    <span> <img src={account} alt="account" /></span>
                    <p>Войти в аккаунт</p>
                </div>
            </div>
            <div className={cl(styles.headerDelivery, styles.headerFlex)}>
                <p>Куда пицца</p>
                <button> 0 $</button>
            </div>
        </header >
    )
};

