const fetchConfigDetails = async (config_name, config_version) => {
  const token = JSON.parse(localStorage.getItem("currentUser"));

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/config/${config_name}?version=${config_version}`,
    requestOptions
  );

  const response = await res.json();
  return response;
};

const fetchConfigs = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/config`,
    requestOptions
  );

  const response = await res.json();
  return response;
};

export const configService = {
  fetchConfigs,
  fetchConfigDetails,
};
