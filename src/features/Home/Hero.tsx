import React from "react";
import { Button, Carousel } from 'antd';
import { ContactsOutlined } from "@ant-design/icons";
import { frontend, backend, cloud } from "../../assets/images";

const items = [
  {
    key: "1",
    title: "Frontend Developer",
    content: "Walk into the world of frontend development, where designs are alluring, sofisticated, accessible and responsive.",
    image: frontend
  },
  {
    key: "2",
    title: "Backend Developer",
    content: "API's and servers are just the beginning. Dreams become reality through innovation, here I show you how I create a whole new world with Backend tools and Databases.",
    image: backend
  },
  {
    key: "3",
    title: "Cloud Developer",
    content: "Everything in it's place and a place for everything. Site availability, reliability, redundancy are tools that I use to make sure your webapps will always meet required demands.",
    image: cloud
  },
]

export const AppHero: React.FC = () => {

  return (
    <div className="heroBlock">
      <Carousel autoplay>
        {
          items.map((item) => (
            <div className="container-fluid" key={item.key}>
              <div className="outerContent">
                <div className="content">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <div className="btnHolder">
                    <Button type="primary" size="large">Learn More</Button>
                    <Button size="large"><ContactsOutlined />Contact</Button>
                  </div>
                </div>
                <div className="heroImage">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}