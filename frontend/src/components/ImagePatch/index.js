import React, { useState } from "react";
import defaultProject from "../../common/noImg.svg";
import classNames from "classnames";

import styles from "./ImagePatch.module.css";

const ImagePatch = ({imgLink, label}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoad = () => {
    setIsLoaded(true);
  };
  
  if(imgLink){
    return (
      <img
      className={classNames(styles.previewScreenImg, {
        [styles.hideImg]: !isLoaded,
      })}
      onLoad={onLoad}
      src={imgLink}
      alt={label}
    />
    )
  }
  
  return <img width="100px" src={defaultProject} alt="No project" />;
};

export default ImagePatch;
