import React from "react";
import { Button, Carousel } from 'antd';
import { ContactsOutlined } from "@ant-design/icons";

const items = [
  {
    key: "1",
    title: "Frontend Developer",
    content: "Walk into the world of frontend development, where designs are alluring, sofisticated, accessible and responsive."
  },
  {
    key: "2",
    title: "Backend Developer",
    content: "API's and servers are just the beginning. Dreams become reality through innovation, here I show you how I create a whole new world with Backend tools and Databases."
  },
  {
    key: "3",
    title: "Cloud Developer",
    content: "Everything in it's place and a place for everything. Site availability, reliability, redundancy are tools that I use to make sure your webapps will always meet required demands."
  },
]

export const AppHero: React.FC = () => {

  return (
    <div className="heroBlock">
      <Carousel autoplay>
        {
          items.map(item => (
            <div className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">Learn More</Button>
                  <Button size="large"><ContactsOutlined />Contact</Button>
                </div>
              </div>
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}