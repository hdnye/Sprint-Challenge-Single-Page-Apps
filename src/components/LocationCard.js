import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from 'reactstrap';

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <div>
     <Col xs='6'>
       <Card key={props.id}>
        <CardBody>
          <CardImg />
             <CardTitle>Location</CardTitle>
               <CardText>
                 <p>Name: {props.name}</p>
                 <p>Type: {props.status}</p>
                 <p>Dimension: {props.species}</p>
                 <p>Residents: {props.gender}</p>
              </CardText>   
          </CardBody>
       </Card>
     </Col>
   </div>
  )
}

}
