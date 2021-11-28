import ContactForm from '../components/contact/ContactForm';
import PageLayout from '../components/layouts/page';

const ContactPage = () => {
  return (
    <PageLayout className="flex flex-col items-center">
      <h1 className="page-title">Contacto</h1>
      <ContactForm />
    </PageLayout>
  )
}

export default ContactPage