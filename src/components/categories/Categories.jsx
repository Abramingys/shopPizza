import React from 'react'
import categories from '../../arr/categories.json';
import styles from './Categories.module.scss';


function Categories() {
    let [active, setActive] = React.useState();
    let [active1, setActive1] = React.useState(false);


    function get(index) {
        setActive(index)
        setActive1(!active1);
    }
    console.log(active1);
    return (
        <ul className={styles.categories}>
            {
                categories.map(({ src, name }, index) =>
                    <li key={index}
                        onClick={() => get(index)}
                        className={styles.categoriesItem}>
                        <img src={src} alt="" />
                        <p>{name}</p>

                    </li>
                )
            }
        </ul >
    )
}

export default Categories;







 // function deligirovanie(e, index) {

    //     if (e.target.tagName == 'LI' || e.target.tagName == 'P' || e.target.tagName == 'IMG') {
    //         console.log(e.target.closest('li').className);
    //         setActive(index)
    //     }

    // }
    // console.log(active);