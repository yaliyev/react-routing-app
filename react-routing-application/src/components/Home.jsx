import React from 'react'
import { Row,Col } from 'antd'
import Title from 'antd/es/typography/Title'
const Home = () => {
  return (
    <>
     <Row>
      <Col span={12}>
      <Title style={{textAlign:'left','marginLeft':'20px'}} level={2}>This is Home Page</Title>
      </Col>
     </Row>
    </>
  )
}

export default Home