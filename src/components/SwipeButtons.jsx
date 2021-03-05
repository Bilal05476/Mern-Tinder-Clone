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
      <IconButton className="swipebuttons__repeat">
        <ReplayIcon color="" fontSize="large" />
      </IconButton>
      <IconButton className="swipebuttons__left">
        <CloseIcon color="" fontSize="large" />
      </IconButton>
      <IconButton className="swipebuttons__star">
        <StarRateIcon color="" fontSize="large" />
      </IconButton>
      <IconButton className="swipebuttons__right">
        <FavoriteIcon color="" fontSize="large" />
      </IconButton>
      <IconButton className="swipebuttons__lightning">
        <FlashOnIcon color="" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
