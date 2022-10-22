const gitHubApi = async (userName: string) => {
  const userInfo = await fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });

  return {
    userInfo,
  };
};

export { gitHubApi };
