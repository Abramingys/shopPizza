import styles from './CategoriesItem.module.scss';

export default function CategoriesItem({ src, name, index, handleClick, activeCategory }) {

    return (
        <li onClick={handleClick}
            className={styles.categoriesItem + ' ' + (activeCategory === index ? styles.categoriesItemActive : '')}>
            <img src={src} alt={name} />
            <p>{name}</p>
        </li>
    )
};

