import React from 'react'

const BookCard = (props) => {
    return (
            <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
                        
                        <div style={{ maxWidth: '400', margin: '2rem auto' }}>
                            <img src={props.imageProp} alt="Image" width="800" height="500"/>
                        </div>
                        <div >
                            <h4 className="title">
                            <p href="blog-details.html">
                                {props.titleProp}
                            </p>
                            </h4>
                            <ul >
                            <li >
                                <p href="#">{props.publishedDateProp}</p>
                            </li>
                            <li >
                                <p href="#">{props.authorProp}</p>
                            </li>
                            </ul>
                            <a href={props.linkProp} >
                            Read More
                            </a>
                        </div>
                </div>
    )
}

export default BookCard
