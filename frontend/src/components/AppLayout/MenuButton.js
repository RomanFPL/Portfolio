import styles from "./AppLayout.module.css";
import cn from "classnames";

const MenuButton = ({ menuStatus, menuAction }) => {
    
  const spans = new Array(9)
    .fill(1, 0, 9)
    .map((span, idx) => (
      <span className={idx % 2 === 1 || idx === 4 ? "" : styles.transparent} />
    ));

  return (
    <button
      className={cn(styles.menuBtn, { [styles.menuBtnClose]: !menuStatus })}
      onClick={() => menuAction(!menuStatus)}
    >
      {spans}
    </button>
  );
};

export default MenuButton;
