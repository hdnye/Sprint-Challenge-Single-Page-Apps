import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from 'reactstrap';

 //<span>todo: character</span>;

const CharacterCard = (props) => {
  return (
    <div>
     <Col xs='6'>
       <Card key={props.id}>
         <CardBody>
           <CardImg />
              <CardTitle>Character</CardTitle>
                <CardText>
                  <p>Name: {props.char.name}</p>
                  <p>Status: {props.char.status}</p>
                  <p>Species: {props.char.species}</p>
                  <p>Gender: {props.char.gender}</p>
                  <p>Image: {props.char.image}</p>
               </CardText>   
           </CardBody>
        </Card>
      </Col>
   </div>
  )
}

export default CharacterCard;