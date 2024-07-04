import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className="tc bg-light-green dib pa3 ma2 br3 grow bw2 shadow-5">
            <img alt="photo" src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <h2>{email}</h2>
            </div>
        </div>
    );
};

export default Card;
