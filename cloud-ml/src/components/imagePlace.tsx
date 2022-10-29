import React from 'react';
import '../css/imagePlace.css';

export function ImagePlace(props: any) {
    return (
        <React.Fragment>
            <div className="image-result">
                {props.image !== null && <img className="img-result" src={props.image} />}
                {props.image == null && <div className="img-replacement"> Здесь будет изображение</div>}
            </div>
        </React.Fragment>
    );
}


export default ImagePlace;