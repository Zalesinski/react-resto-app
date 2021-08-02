import React from 'react';
import './menu-list-item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faLeaf, faBacon, faPizzaSlice } from '@fortawesome/free-solid-svg-icons'


const MenuListItem = ({menuItem, onAddToCart}) => {
    const {title, price, url, category} = menuItem;
    let icon;
    switch (category) {
        case 'salads': 
            icon = <FontAwesomeIcon icon={faLeaf} />;
            break;
        case 'pizza':
            icon = <FontAwesomeIcon icon={faPizzaSlice} />;
            break;
        case 'meat':
            icon = <FontAwesomeIcon icon={faBacon} />;
            break;
        default:
            break;
    }
    return (
            <li className="menu__item">
                <Link to = {`/${menuItem.id}`}>
                    <div className="menu__title">{title}</div>
                </Link>
                    <img className="menu__img" src={url} alt={title}></img>
                    <div className="menu__category">Category: <span>{category} {icon}</span></div>
                    <div className="menu__price">Price: <span>{price}$</span></div>
                    <button onClick={() => onAddToCart()} className="menu__btn">Add to cart</button>
            </li>
    )
}

export default MenuListItem;