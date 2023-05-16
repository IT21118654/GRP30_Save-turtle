import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";
import { Link } from 'react-router-dom'

const FeedData = [
  {
    title: "Education And Research",
    icon: "bi bi-bell",
    color: "primary",
    date: "Sonal",
    link: "/research"
  },
  {
    title: "Fundraise.",
    icon: "bi bi-person",
    color: "info",
    date: "Kishor",
    link: "/fundraise"
  },
  {
    title: "Awareness.",
    icon: "bi bi-hdd",
    color: "danger",
    date: "Lahiru",
    link: "/awareness"
  },
  {
    title: "Advocacy.",
    icon: "bi bi-bag-check",
    color: "success",
    date: "Ridushan",
    link: "/advocacy"
  },
];

const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Functions</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Assigned Member for Each Function
        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Link to={feed.link}><Button className='rounded-circle me-3' size="sm" color={feed.color}>
              <i className={feed.icon}></i>
              </Button>
              </Link>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
