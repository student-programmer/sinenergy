import React, { useContext, useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import './Category.css';
import { fetchCategory } from '../../http/userAPI';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

const Category = observer(() => {
    const { category } = useContext(Context);

    return (
        <div className='category-wrapper'>
            <Container>
                <Tab.Container
                    id='list-group-tabs-example'
                    defaultActiveKey='#link1'
                > 
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                {category.category.map((category) => (
                                             <ListGroup.Item action key={category.id} href={`#link` + category.id}>
                                             {category.category}
                                         </ListGroup.Item>
                                ))}
                      
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                     
                            <Tab.Content>
                                {category.category.map((def) => (
                                            <Tab.Pane key={def.id} eventKey={`#link` + def.id}>
                                       
                                                {def.definition}
                                                <button className="click-here">Нажми сюда</button>
                                        </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
});

export default Category;
