import React from 'react';
import styles from './CategoriesItem.module.scss';

export default function CategoriesItem({ src, name }) {

    return (
        <li
            className={styles.categoriesItem}>
            <img src={src} alt="" />
            <p>{name}</p>
        </li>
    )
};

