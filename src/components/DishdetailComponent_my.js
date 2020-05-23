import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
        Button, Modal, ModalHeader, ModalBody,
        Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isModalOpen: false
    };
  }

  toggleModal() {
  this.setState({
    isModalOpen: !this.state.isModalOpen
  });
}

handleSubmit(values) {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
}

  render() {
    return (
      <React.Fragment>
        <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
             <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
             <ModalBody>
             <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                   <Row>
                     <Col>
                         <Label htmlFor="rating">Rating</Label>
                     </Col>
                  </Row>
                  <Row>
                      <Col>
                          <Control.select model=".rating" id="rating" name="rating">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="4">5</option>
                          </Control.select>
                      </Col>
                  </Row>

                  <Row>
                      <Col>
                          <Label htmlFor="firstname">Your Name</Label>
                      </Col>
                   </Row>
                   <Row className="form-group">
                        <Col>
                            <Control.text model=".yourname" id="firstname" name="firstname"
                                placeholder="Your Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                 />
                            <Errors
                                className="text-danger"
                                model=".firstname"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be 3 characters or greater',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                             />
                        </Col>
                    </Row>

                    <Row>
                      <Col>
                          <Label htmlFor="message">Comment</Label>
                      </Col>
                   </Row>
                   <Row>
                       <Col>
                           <Control.textarea model=".message" id="message" name="message"
                               rows="6"
                               className="form-control" />
                       </Col>
                   </Row>

                   <Row>
                       <Col >
                           <Button type="submit" color="primary" className="mt-3">
                              Submit
                           </Button>
                       </Col>

                   </Row>
                 </LocalForm>
             </ModalBody>
        </Modal>
      </React.Fragment>
    )
  }
}

    function RenderDish({dish}){
        return (
          <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
          </div>
        );

    }

    function RenderComments({comments, addComment, dishId}) {
        if(comments != null){
            const commentList = comments.map((comment) => {
                return (
                    <li key={comment.id} >
                        <div>
                            {comment.comment}
                        </div>
                        <div>
                            -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </div>
                    </li>
                );
            });
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentList}
                    </ul>
                    <CommentForm dishId={dishId} addComment={addComment} />
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
    }






    const DishDetail = (props) => {
      if(props.dish != null){
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments}
                    addComment={props.addComment} dishId={props.dish.id}/>
            </div>
            </div>
        );
      }else{
            return (
                <div></div>
            );
        }
    }

export default DishDetail;
