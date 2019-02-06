import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
    }

    // handle change for inputs - do we need a method?

    // post new product to db

    // clear input boxes

    render() {
        return (
            <div className='form'>
                Form
            </div>
        );
    }
}