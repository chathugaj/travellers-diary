import React from 'react';
import {Image} from "react-bootstrap";

const Post = ({image, title}) => {
    return <Image src={image} alt={title} fluid={image} />
}