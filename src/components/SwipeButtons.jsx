import "./css/SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

const SwipeButtons = () => {
  return (
    <div className="swipeBtn">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon color="" fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon color="" fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateIcon color="" fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon color="" fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon color="" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
