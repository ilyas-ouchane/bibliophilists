import React from 'react'
import { Typography } from 'antd';
const { Title } = Typography;

const BooksSearch = (props) => {

    return (
    //   <div>
    //       <form onSubmit={props.searchBook} action="">
    //           <br />
    //           <input id="search" onChange={props.handleSearch} placeholder="Insert your book name" type="text"/>
    //           <button type="button" className="btn btn-primary">Submit</button>
    //       </form>
    //   </div>
    <div>
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Enter you book Name</Title>
            </div>
            <form onSubmit={props.searchBook} action="">
                <div className="row">
                    <input 
                        id="search" 
                        onChange={props.handleSearch} 
                        placeholder="Insert your book name" 
                        type="text"
                        style={{
                            width: "100%",
                            padding: "12px 20px",
                            margin: "8px 0",
                            display: "inline-block",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            boxSizing: "border-box"
                        }}
                    />
                    <button 
                        type="submit"
                        style={{
                            width: "100%",
                            backgroundColor: "#4CAF50",
                            color: "white",
                            padding: "14px 20px",
                            margin: "8px 0",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer"
                        }}
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
        
        {/*====== Post Details End ======*/}
    </div>
    )
}

export default BooksSearch
