/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Preview.css';

export default function Preview (props) {
    const {data} = props;

    function getShortURL(url) {
        return url.replace(/https?:\/\/(www\.)?/, '').split('/')[0];
    }

    return (
        <div className="preview-container">
            <div className="image-container">
                <img src={data.image}></img>
            </div>
            <h1 className="title">{data.title}</h1>
            <p className="description">{data.description}</p>
            <span className="url">{getShortURL(data.url)}</span>
        </div>
    )
}