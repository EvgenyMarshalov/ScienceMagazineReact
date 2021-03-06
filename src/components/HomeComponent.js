import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

function RenderNews({item}) {
        return(
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.description}</CardText>
                <a href={item.file} class="btn btn-primary">Read more...</a>
                </CardBody>
            </Card>
        );

}

function Home(props) {

  const news = props.news.map((mynew) => {
      return (
          <div className="col-sm-4">
              <RenderNews item={mynew} />
          </div>
      );
  });

    return(
        <div className="container">
            <div className="row">
                {news}
            </div>
        </div>

    );
}

export default Home;
