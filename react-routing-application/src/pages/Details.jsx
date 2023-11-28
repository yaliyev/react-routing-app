import React from 'react'
import { Card } from 'antd';
const Details = ({ currentCategory }) => {
    return (
        <Card
            title={currentCategory.name}
            bordered={false}
            style={{
                width: 300,margin:'20px'
            }}
        >
           <h3>Description</h3>
        <p>{currentCategory.description}</p>
        </Card>
    )
}

export default Details