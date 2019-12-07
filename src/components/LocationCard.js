import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from 'reactstrap';

export default function LocationCard({ props }) {
  return (
    <div>
     <Col xs='6'>
       <Card key={props.id}>
        <CardBody>
          <CardImg />
             <CardTitle>Location</CardTitle>
               <CardText>
                 <p>Name: {props.name}</p>
                 <p>Status: {props.status}</p>
                 <p>Species: {props.species}</p>
                 <p>Gender: {props.gender}</p>
              </CardText>   
          </CardBody>
       </Card>
     </Col>
   </div>
  )
}


