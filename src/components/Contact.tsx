import { FormEvent, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { urlApi } from "../constants/api";

import formSvg from "../assets/svg/form.svg";

import "../styles/components/contact.sass";
import "../styles/components/form/input.sass";

const Form = () => {
  const [tokenRecaptcha, setTokenRecaptcha] = useState<string | null>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    const nameValue = nameRef.current?.value || "";
    const emailValue = emailRef.current?.value || "";
    const phoneValue = phoneRef.current?.value || "";
    const messageValue = messageRef.current?.value || "";

    const response = await fetch(urlApi + "/api/send_email.php", {
      method: "POST",
      body: JSON.stringify({
        name: nameValue,
        email: emailValue,
        phone: phoneValue,
        message: messageValue,
        tokenRecaptcha: tokenRecaptcha,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data["error"]);
      return;
    }

    console.log(response.text);
    setSubmissionSuccess(true);

    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  return (
    <section id="contact">
      <h2>Entre em contato!</h2>
      <div className="contact-container">
        <img src={formSvg} alt="Form" />
        <form onSubmit={handleSubmit}>
          <input
            className="input-pattern"
            type="text"
            placeholder="Seu nome aqui ..."
            id="name"
            ref={nameRef}
          />
          <input
            className="input-pattern"
            type="email"
            placeholder="Seu email aqui ..."
            id="email"
            ref={emailRef}
          />
          <input
            className="input-pattern"
            type="tel"
            placeholder="Seu whatsapp aqui ..."
            id="phone"
            ref={phoneRef}
          />
          <textarea
            className="input-pattern"
            name="textarea"
            id="textarea"
            cols={30}
            rows={5}
            placeholder="Sua mensagem aqui"
            ref={messageRef}
          ></textarea>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6Ld_1h8pAAAAAKKyMIioj4v2OsW8OVbW6J1TxVeT"
            onChange={(value: string | null) => {
              setTokenRecaptcha(value);
            }}
          />
          <button
            className="button-pattern"
            type="submit"
            disabled={isSubmitting}
          >
            Enviar
          </button>
        </form>
        {submissionSuccess && <p>Formulário enviado com sucesso!</p>}
      </div>
    </section>
  );
};

export default Form;
