import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardColumns, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderDish({dishh}) {
        return (
            <div>
            <Card>
                <CardImg width="100%" src={dishh.image} alt={dishh.name} />
                <CardBody>
                    <CardTitle>{dishh.name}</CardTitle>
                    <CardText>{dishh.description}</CardText>
                </CardBody>
            </Card>
            </div>
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
        if (props.dishh != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dishh.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dishh.name}</h3>
                            <hr />
                        </div>
                    </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dishh = {props.dishh} />                        
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments = {props.comments} /> 
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
