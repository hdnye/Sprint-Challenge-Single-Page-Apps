import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from 'reactstrap';

 //<span>todo: character</span>;

export default function CharacterCard(props) {
  return (
    <div>
     <Col xs='6'>
       <Card key={props.id}>
         <CardBody>
           <CardImg src={props.character.image}/>
              <CardTitle>{props.character.name}</CardTitle>
                <CardText>
                  <p>Name: {props.character.name}</p>
                  <p>Status: {props.character.status}</p>
                  <p>Species: {props.character.species}</p>
                  <p>Gender: {props.character.gender}</p>
              </CardText>   
           </CardBody>
        </Card>
      </Col>
      
   </div>
  )
}

