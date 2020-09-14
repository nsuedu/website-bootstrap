import React, { Component } from 'react';
import  PieReact  from './pieReact'

//data的格式

const data = [
    { value: 1, name: "是" },
    { value: 2, name: "否" }
]

export default  class Index extends React.Component {
    render() {
        //const { data } = this.props.reducer
        return (
            <div>
                <PieReact
                    data={data}
                />
            </div>
        );
    }
}