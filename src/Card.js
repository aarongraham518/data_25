import React from 'react';
import './Card.css';
import IonIcon from '@reacticons/ionicons';

export const Card = ({item}) => {

    return (
        <div className="cardContainer">
            <div className="imageContainer">
                <img src={item.imageUrl}/>
            </div>
            <div className="cardTitle">
                <p>{item.name}</p>
            </div>
            <div className="cardDescription">
                <p>{item.description.substring(0, 90)}</p>
            </div>
            <div className="cardRatingContainer">
                <IonIcon className="star" name="star" />
                <span className="starRating">{item.rating}</span>
                <span className="ratingCount">({item.ratingCount})</span>
                <IonIcon className="heart" name="heart" />

            </div>

            <div className="brandPriceContainer">
                <span className="brand">{item.brand ? item.brand : 'brand unknown'}</span>
                <span className="price">{item.price}</span>
            </div>
           
            
        </div>
    )
}