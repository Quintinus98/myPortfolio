import React from "react";
import { Col, Row } from "antd";
import { Card } from 'antd';
import items from '../../data'




// icon: <Icon type="github" />

export const AppProjects: React.FC  = () => {

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
                <Col span={8} key={item.key}>
                  <Card hoverable
                      className="antCardBody antImage"
                      extra={<a href={item.link}>More</a>}
                      title={item.title}
                      cover={<img alt={item.title} src={item.src} />}
                    >
                  </Card>
                </Col>
              )
            })
          }
        </Row>

        </div>

      </div>
		</div>
	)
}