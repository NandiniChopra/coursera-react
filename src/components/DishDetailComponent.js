import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardColumns } from 'reactstrap'

    function RenderDish({dishh}) {
        return (
            <Card>
                <CardImg src={dishh.image} alt={dishh.name} />
                <CardBody>
                    <CardTitle>{dishh.name}</CardTitle>
                    <CardText>{dishh.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    function RenderComments({comments}) {
        const commentList = comments.map((comment) => {
            return (
                <li key={comment.id}>
                    {comment.comment}
                    <br></br> <br></br>
                    --{comment.author} , {new Intl.DateTimeFormat('en-US', 
                    { year: 'numeric', month: 'short', day: '2-digit' })
                    .format(new Date(Date.parse(comment.date)))}
                    <br></br> <br></br>
                </li>
            );
        });

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentList}
                </ul>
            </div>
        );
    }

    const DishDetail = (props) =>  {
        if (props.dishh) {
            return (
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dishh = {props.dishh} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments = {props.dishh.comments} />
                    </div>
                </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }


export default DishDetail;
