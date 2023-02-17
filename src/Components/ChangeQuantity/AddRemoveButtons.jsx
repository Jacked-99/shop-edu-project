import styles from "./AddRemoveButtons.module.scss";
import { Button } from "@mui/material";
const AddRemoveButtons = ({
  onIncreaseClick,
  onDecreaseClick,
  displayedValue,
}) => {
  return (
    <div>
      <Button
        style={{
          fontSize: "1.2rem",
          color: "#FFF",
          borderColor: "#fff",
          backgroundColor: "rgba(#FFF,0.4)",
        }}
        variant="outlined"
        onClick={onDecreaseClick}
      >
        —
      </Button>
      <span className={styles.quantity}>{displayedValue}</span>
      <Button
        style={{
          fontSize: "1.2rem",
          color: "#FFF",
          borderColor: "#fff",
          backgroundColor: "rgba(#023e8a,0.5)",
          marginRight: "0.5",
        }}
        variant="outlined"
        onClick={onIncreaseClick}
      >
        +
      </Button>
    </div>
  );
};

export default AddRemoveButtons;
