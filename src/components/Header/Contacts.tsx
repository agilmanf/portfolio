import ContactItem from "src/components/Header/ContactItem";

import { contacts } from "src/data";

export default function Contacts() {
  return (
    <div className="flex flex-row justify-center lg:flex-1 lg:flex-col lg:justify-end pb-7 2xl:pb-12">
      <div className="icon-container inline-flex gap-3 lg:flex-col text-sm 2xl:text-xl">
        {contacts.map((contact, index) => (
          <ContactItem
            key={index}
            title={contact.title}
            icon={contact.icon}
            href={contact.href}
            aos={contact.aos}
          />
        ))}
      </div>
    </div>
  );
}
