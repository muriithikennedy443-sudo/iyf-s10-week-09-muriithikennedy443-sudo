import useForm from '../hooks/useForm';

function ContactForm() {
  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Name is required';
    if (!values.email.includes('@')) errors.email = 'Invalid email';
    return errors;
  };

  const { values, errors, touched, handleChange, handleBlur, reset } = useForm(
    { name: '', email: '' },
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Your name"
      />
      {touched.name && errors.name && (
        <span className="error">{errors.name}</span>
      )}
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Your email"
      />
      {touched.email && errors.email && (
        <span className="error">{errors.email}</span>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;