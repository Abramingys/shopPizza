import React from 'react';
import styles from './CategoriesItem.module.scss';


function CategoriesItem({ src, name }) {
    return (
        <li
            className={styles.categoriesItem}>
            <img src={src} alt="" />
            <p>{name}</p>
        </li>
    )

}

export default CategoriesItem;