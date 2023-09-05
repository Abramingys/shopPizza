import React from 'react';
import CategoriesItem from '../CategoriesItem/CategoriesItem';
import categories from '../../arr/categories.json';
import styles from './Categories.module.scss';


export default function Categories() {

    return (
        <ul className={styles.categories}>
            {
                categories.map(({ src, name }, index) =>
                    <CategoriesItem src={src} name={name} key={index} />
                )
            }
        </ul >
    )
};









 // function deligirovanie(e, index) {

    //     if (e.target.tagName == 'LI' || e.target.tagName == 'P' || e.target.tagName == 'IMG') {
    //         console.log(e.target.closest('li').className);
    //         setActive(index)
    //     }

    // }
    // console.log(active);