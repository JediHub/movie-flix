import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ movieDetail, onClickHandler }) => {

    const { Title = '', Year, Poster, imdbID } = movieDetail;
    const imageUrl = Poster;
    return (
        <div
            className={`menu-item`}
            data-id_key={imdbID}
            onClick={onClickHandler} >
            <div className='background-image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className='content'>
                <div className='content-header'>
                    <span className='content-title'> {Title.toUpperCase()}</span>
                   {/* <span className='rating'>{imdbID}</span> */}
                </div>
                <div className='description'>{Year}</div>
            </div>
        </div>
    )
}

export default MenuItem;