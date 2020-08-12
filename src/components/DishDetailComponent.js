import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardColumns } from 'reactstrap'

class DishDetail extends Component {

    constructor(props){
        super(props);

        this.state = {
            
        };
    }

    renderDish(dish){
        if( dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(dish){
        if( dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4> Comments </h4>
                    <ul className="list-unstyled">
                        <p>{dish.comments[0]}</p>
                        <p className="list-inline-item">{dish.comments[0].author}</p>
                        <p className="list-inline-item">{dish.comments[0].date}</p>

                        <p>{dish.comments[1]}</p>
                        <p className="list-inline-item">{dish.comments[1].author}</p>
                        <p className="list-inline-item">{dish.comments[1].date}</p>

                        <p>{dish.comments[2]}</p>
                        <p className="list-inline-item">{dish.comments[2].author}</p>
                        <p className="list-inline-item">{dish.comments[2].date}</p>

                        <p>{dish.comments[3]}</p>
                        <p className="list-inline-item">{dish.comments[3].author}</p>
                        <p className="list-inline-item">{dish.comments[3].date}</p>

                        <p>{dish.comments[4]}</p>
                        <p className="list-inline-item">{dish.comments[4].author}</p>
                        <p className="list-inline-item">{dish.comments[4].date}</p>
                    </ul>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }

    }

    render(){
        console.log(this.props.dishh)
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dishh)}
                </div>
                {this.renderComments(this.props.dishh)}
            </div>           
        );
    }

        
    }

export default DishDetail;
