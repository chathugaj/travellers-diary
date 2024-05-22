import React from "react";
import styles from "../styles/Avatar.module.css";
import Image from 'react-bootstrap/Image';

const Avatar = ({src, height = 45, text}) => {
    return (
        <span>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Image src={src} width={height} height={height} roundedCircle/>
        </span>
    );
};

export default Avatar;