import React from 'react'
import CardData from './CardData'
import Card from './Card'


const Service = () => {
  return (

<>

      <div className="my-5">
        <h1 className="text-center"> Courses We Offer </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {CardData.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} detail={val.detail} price={val.price} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>

    )
}

export default Service