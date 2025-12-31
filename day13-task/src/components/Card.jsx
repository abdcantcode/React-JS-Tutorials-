import React from 'react';

function Card(props) {
  

  return (
    <div className="card">
      <div className="card-cont">
        <img src={props.elem.image} alt="" />
      </div>

      <h1>{props.elem.name}</h1>

      {/* ONE wrapper for all capsules */}
      <div className="categories">
        {props.elem.keywords.slice(0, 4).map(function (elem, idx) {
          return (
            <div key={idx} className="capsule">
              <p>{elem}</p>
            </div>
          );
        })}
      </div>

      <p>{props.elem.description}</p>

      <div className="bottom">
        <div>
          <h3>${props.elem.priceCents / 100}</h3>
        </div>
        <div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
