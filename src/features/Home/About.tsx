import React from "react";
import { Col, Row } from 'antd';
import { ApartmentOutlined, CloudServerOutlined, RadarChartOutlined } from "@ant-design/icons";


const items = [
  {
    key: "1",
    icon: <RadarChartOutlined />,
    title: "Frontend Developer",
    content: "Walk into the world of frontend development, where designs are alluring, sofisticated, accessible and responsive."
  },
  {
    key: "2",
    icon: <ApartmentOutlined />,
    title: "Backend Developer",
    content: "API's and servers are just the beginning. Dreams become reality through innovation, here I show you how I create a whole new world with Backend tools and Databases."
  },
  {
    key: "3",
    icon: <CloudServerOutlined />,
    title: "Cloud Developer",
    content: "Everything in it's place and a place for everything. Site availability, reliability, redundancy are tools that I use to make sure your webapps will always meet required demands."
  },
]


export const AppAbout: React.FC = () => {
  return (
    <div className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Me</h2>
        </div>
        <div className="contentHolder">
          I am an exceptionally creative individual with an in-depth knowledge in software design, planning and maintenance. Seeking the role of a Software Engineer in a growth-oriented company where I can use my skills to the advantage of the company while gaining professional experience alongside.
        </div>

        <Row gutter={[32, 32]}>
          {
            items.map(item => (
              <Col span={8} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            ))
          }
        </Row>
      </div>
    </div>
  )
}