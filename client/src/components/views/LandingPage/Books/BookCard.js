import React from 'react'

const BookCard = (props) => {
    return (
            <div className="col-md-3">
                <div className="card">
                    <img className="card-img-top" src={props.imageProp} alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">{props.titleProp}</h4>
                        <p>{props.authorProp}</p>
                        <p>{props.publishedDateProp}</p>
                        <p className="card-text">
                            <a href={props.linkProp} className="btn btn-primary">Read More</a>
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default BookCard
