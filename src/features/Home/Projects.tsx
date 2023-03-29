import React from "react";
import { Col, Row } from "antd";
import { Card } from 'antd';
import Icon from "@ant-design/icons";
// import * as logo from "../../assets/images/mystore.png";
import logo from '../../assets/images/mystore.png';

const { Meta } = Card;


const items = [
  {
    key: "1",
    src: "../../assets/images/EBS-deploy.PNG",
    title: "My Store",
    link: "buy4him.netlify.com",
    icon: <Icon type="link" />
  }
]
// icon: <Icon type="github" />

export const AppProjects: React.FC = () => {
	return (
		<div className="block aboutBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Projects</h2>
        </div>
        
        <div className="content">
        <Row gutter={[32, 32]}>
          {
            items.map(item => {
              return (
                <Col span={8} >
                  <Card hoverable
                      cover={<img alt={item.title} src={logo} />}
                    >
                      <Meta title={item.title} description={item.link} />
                    </Card>
                </Col>
              )
            })
          }
          
          <Col span={8} >2</Col>
          <Col span={8} >3</Col>
        </Row>

       

        </div>

      </div>
		</div>
	)
}