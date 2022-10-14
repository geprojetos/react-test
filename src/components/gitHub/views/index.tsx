import { useGitHub } from "../hooks/";
import { apiGitHub } from "../api";
import "./styles.css";

export const GitHub = () => {
  const { userInfo, form, inputs, formValues } = useGitHub(apiGitHub);

  return (
    <section className="global-centered global-direction-column">
      <h1 className="global-text-centered">GitHub</h1>
      {userInfo?.login && (
        <div className="global-centered global-direction-column">
          <h3 className="global-text-centered">User name: {userInfo.login}</h3>
          <img
            className="github-image"
            src={userInfo?.avatar_url}
            alt="image"
          />
          <h3 className="global-text-centered">
            Repositórios: {userInfo?.public_repos}
          </h3>
        </div>
      )}
      {!userInfo?.login && (
        <section>
          <h3>Select user name</h3>
        </section>
      )}

      <form
        className="global-centered global-direction-column"
        onSubmit={form.handleSubmit}
      >
        <input
          className="global-input"
          name="name"
          type="text"
          placeholder="user name"
          onChange={inputs.handleChangeUserName}
          value={formValues.userName}
        />
        <button className="global-primary-button">Submit</button>
      </form>
    </section>
  );
};

export default GitHub;
