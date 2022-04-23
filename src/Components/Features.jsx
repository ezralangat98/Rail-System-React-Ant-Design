import React from 'react'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import image1 from '../assets/images/great-support.jpg';
import image2 from '../assets/images/bg-works.jpg';
import image3 from '../assets/images/advanced-option.jpg';

const { Meta } = Card;

const AppFeatures = () => {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>These are the key features and benefits of our elegant services.</p>
          </div>
          <Row gutter={[16, 16]}>
            <Col span={8}> 
              <Card
                hoverable
                cover={<img alt="example" src={image1}/>}
              >
                <Meta title="Great-Support"/>
              </Card>
            </Col>

            <Col span={8}> 
              <Card
                hoverable
                cover={<img alt="example" src={image2}/>}
              >
                <Meta title="Impecable Services"/>
              </Card>
            </Col>

            <Col span={8}> 
              <Card
                hoverable
                cover={<img alt="example" src={image3}/>}
              >
                <Meta title="Commendable-Hospitality"/>
              </Card>
            </Col>
          </Row>
      </div>
      </div>
  )
}

export default AppFeatures