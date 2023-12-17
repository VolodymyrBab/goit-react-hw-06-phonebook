import ContactForm from './СontactForm/ContactForm';
import Contacts from './ContactList/Contacts';
import Filter from './Filter/Filter';
import { WrapperContent } from './App.styled';

export const App = () => {
  return (
    <WrapperContent>
      <ContactForm />
      <Filter />
      <Contacts />
    </WrapperContent>
  );
};