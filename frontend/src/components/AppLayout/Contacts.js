import { Facebook, LinkedIn, Mail } from "../../common/Icons";
import styles from "./AppLayout.module.css";
import classNames from "classnames";

import text from "../../mockText.json";

const socialMedia = [
  {
    href: text.socialMedia.facebook,
    icon: <Facebook />,
  },
  {
    href: text.socialMedia.linkedIn,
    icon: <LinkedIn />,
  },
  {
    href: text.socialMedia.mail,
    icon: <Mail />,
  },
];

const Contacts = ({ item }) => {
  return (
    <div
      className={classNames(styles.contacts, {
        [styles.contactsHidden]: !!item,
      })}
    >
      <h2>Contacts</h2>
      <div>
        {socialMedia.map(({ href, icon }, idx) => {
          return (
            <a key={idx.toString()} href={href}>
              {icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
