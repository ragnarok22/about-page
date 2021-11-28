import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "./config";
import styles from "../../styles/ContactForm.module.scss";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    console.assert(errors, errors);
    setLoading(true);
    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then((result) => {
      setLoading(false);
      console.log(result);
    });

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contact}>
      <div className="flex w-full justify-between mb-3">
        <input
          type="text"
          className="mr-2"
          placeholder="Nombre"
          {...register("name", { required: true, maxLength: 80 })}
        />
        <input
          type="email"
          className="ml-2"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>
      <textarea {...register("message", { required: true })} cols="15" rows="5" />

      <button type="submit" disabled={loading}>
        {loading ? 'loading': 'Enviar'}
      </button>
    </form>
  );
};

export default ContactForm;
