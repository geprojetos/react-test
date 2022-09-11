const apiGitHub = (saveValue: any, userName: string) => {
  fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .then((response) => saveValue(response))
    .catch((error) => console.log(error));
};

export { apiGitHub };
