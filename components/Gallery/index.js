import { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { gray, purple } from "@material-ui/core/colors";
import Carousel, { Modal, ModalGateway } from "react-images";
import Button from "@material-ui/core/Button";

const photos = [
  {
    src:
      "https://img.zumpercdn.com/301433983/1280x960?auto=format&w=1691&h=955&fit=fill",
    width: 1,
    height: 1
  },
  {
    src:
      "https://photos.zillowstatic.com/cc_ft_384/IS2bdsvnxuoskl1000000000.webp",
    width: 1,
    height: 1
  },
  {
    src:
      "https://photos.zillowstatic.com/cc_ft_384/ISqtjse7ajdkkl1000000000.webp",
    width: 1,
    height: 1
  }
];

const useStyles = makeStyles(theme => ({
  container: {
    height: "100%"
  },
  hero: {
    backgroundImage: `url(${photos[0].src})`,
    backgroundSize: "cover",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 10
  },
  moreButton: {
    backgroundColor: "#f2f2f2"
  }
}));

const MoreButton = withStyles(theme => ({
  root: {
    color: "#f2f2f2",
    backgroundColor: "#444",
    padding: 10,
    "&:hover": {
      backgroundColor: "#777"
    }
  }
}))(Button);

function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const classes = useStyles();

  const openLightbox = (photo, index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <div className={classes.hero} onClick={() => openLightbox(photos[0], 0)}>
        <MoreButton
          // classNames={classes.moreButton}
          size="small"
          disableElevation
          disableRipple
        >
          {`${photos.length - 1} more photos`}
        </MoreButton>
      </div>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
}

export default PhotoGallery;
