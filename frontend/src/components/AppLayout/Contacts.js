import { Facebook, LinkedIn, Mail } from "../../common/Icons";
import styles from "./AppLayout.module.css";
import cn from "classnames";

const Contacts = ({ item }) => {
  return (
    <div className={cn(styles.contacts, { [styles.contactsHidden]: !!item })}>
      <h2>Contacts</h2>
      <div>
        <a href="https://www.facebook.com/">
          <Facebook />
        </a>
        <a href="/">
          <LinkedIn />
        </a>
        <a href="/">
          <Mail />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
