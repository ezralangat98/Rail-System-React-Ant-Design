import React from 'react'

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'High Performance',
    content: 'Our services ensures high performance.',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Flat Design',
    content: 'We ensure that Flat Design is always gathered for.',
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Simplified Workflow',
    content: 'Our Simplified Workflow will anable your quick understanding of the esential technologies that you will be learning.',
  },
]

function About() {
  return (
    <div id="about" className="block aboutBlock">
    <div className="container-fluid">
      <div className="titleHolder">
        <h2>About Us</h2>
        <p>We provide world class rail services</p>
      </div>
      <div className="contentHolder">
        <p>The core mandates of the corporation are to provide an efficient and effective rail and inland waterways transport.
        We adhere to impeccable professional and personal standards while conducting the affairs of the Corporation. 
        The Corporation’s services shall be offered in a professional manner and with expertise that ensures high quality.
        </p>
      </div>
      <Row gutter={[16, 16]}>   
        {items.map(item => {
          return (
            <Col md={{ span: 8 }} key={item.key}>
              <div className="content">
                <div className="icon">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  </div>
  )
}

export default About