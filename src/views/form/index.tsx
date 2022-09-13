import { useForm } from "./hooks";

export const Form = () => {
  const { form, inputs, formValues, formErrors } = useForm();

  return (
    <section className="global-centered global-direction-column">
      <h2>Form</h2>
      <form
        className="global-centered global-direction-column global-form"
        onSubmit={form.handleSubmit}
      >
        <div className="global-centered global-direction-column">
          <input
            className="global-input"
            name="name"
            type="text"
            placeholder="name"
            onChange={inputs.handleChangeName}
            value={formValues.name}
          />
          <span className="global-input-error">{formErrors.name}</span>
        </div>

        <div className="global-centered global-direction-column">
          <input
            className="global-input"
            name="email"
            type="email"
            placeholder="email"
            onChange={inputs.handleChangeEmail}
            value={formValues.email}
          />
          <span className="global-input-error">{formErrors.email}</span>
        </div>
        <button className="global-primary-button">Submit</button>
      </form>
    </section>
  );
};

export default Form;
