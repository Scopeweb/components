import React, { Component } from 'react';

import Navbar from '../Global/Navbar/Navbar';

class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div>
                    <h1>Blog</h1>
                </div>  
            </React.Fragment>
        );
    }
}

export default Blog;