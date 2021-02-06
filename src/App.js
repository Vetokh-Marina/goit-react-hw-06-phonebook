// import { connect } from 'react-redux';

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Section from './components/Section';

export default function App() {
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
}