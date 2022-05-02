import { Facebook, LinkedIn, Mail } from "../../common/Icons";
import styles from "./AppLayout.module.css";
import cn from "classnames";

const socialMedia = [
  {
    href: "https://www.facebook.com/",
    icon: <Facebook />,
  },
  {
    href: "/",
    icon: <LinkedIn />,
  },
  {
    href: "/",
    icon: <Mail />,
  },
];

const Contacts = ({ item }) => {
  return (
    <div className={cn(styles.contacts, { [styles.contactsHidden]: !!item })}>
      <h2>Contacts</h2>
      <div>
        {socialMedia.map(({ href, icon }) => {
          return <a href={href}>{icon}</a>;
        })}
      </div>
    </div>
  );
};

export default Contacts;
