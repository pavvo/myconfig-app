const signUserIn = async (email, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };

  const rawResponse = await fetch(
    `${process.env.REACT_APP_API_URL}/login`,
    requestOptions
  );

  const content = await rawResponse.json();

  if (content.token) {
    localStorage.setItem("currentUser", JSON.stringify(content.token));
    return "Logged in";
  } else {
    return "Error";
  }
};

const signUserUp = async (email, password, password2) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, password2 }),
  };

  const rawResponse = await fetch(
    `${process.env.REACT_APP_API_URL}/register`,
    requestOptions
  );

  const content = await rawResponse.json();

  return content;
};

const signUserOut = () => {
  localStorage.removeItem("currentUser");
  window.location = "/";
};

export const authService = {
  signUserIn,
  signUserOut,
  signUserUp,
};
