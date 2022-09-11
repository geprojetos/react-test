import { useForm } from "./hooks";

export const Form = () => {
  const { form, inputs, formValues } = useForm();

  return (
    <section className="global-centered global-direction-column">
      <h2>Form</h2>
      <form
        className="global-centered global-direction-column"
        onSubmit={form.handleSubmit}
      >
        <input
          className="global-input"
          name="name"
          type="text"
          placeholder="name"
          onChange={inputs.handleChangeName}
          value={formValues.name}
        />
        <input
          className="global-input"
          name="email"
          type="email"
          placeholder="email"
          onChange={inputs.handleChangeEmail}
          value={formValues.email}
        />
        <button className="global-primary-button">Submit</button>
      </form>
    </section>
  );
};

export default Form;
