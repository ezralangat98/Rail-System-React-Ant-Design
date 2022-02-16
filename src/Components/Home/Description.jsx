import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Platform build for everyone who is travelling',
    content: 'This is the best platform acessible via Web and mobile payment built for travellers to book trains',
  },
  {
    key: '2',
    title: 'Travel better together. Book your train ealy',
    content: 'To be successful in life you have got to Work better together.',
  },
  {
    key: '3',
    title: 'The best app to increase your productivity',
    content: 'This platform is one of the best app to increase your productivity .',
  },
]

function AppDescription() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">Learn More</Button>
                  <Button size="large"><i className="fas fa-desktop"></i> Watch a Demo</Button>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppDescription;