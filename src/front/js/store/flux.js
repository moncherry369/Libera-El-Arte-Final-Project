const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token:"",
      msg:""
    },
    actions: {
      dehydrate: () => {
        sessionStorage.setItem("store", JSON.stringify(getStore()));
      },

      rehydrate: () => {
        setStore(JSON.parse(sessionStorage.getItem("store")));
      },

      login: (email, password) => {
        const options = {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ email: email, password: password }),
        };
        return fetch(`${process.env.BACKEND_URL}/api/login`, options)
          .then((resp) => resp.json())
          .then((data) => setStore(data))
          .then(() => getActions().dehydrate());
      },

      sign_up: (email, password, name) => {
        const options = {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            name: name,
          }),
        };
        return fetch(`${process.env.BACKEND_URL}/api/signup`, options)
          .then((resp) => resp.json())
          .then((data) => setStore(data));
      },
    },
  };
};

export default getState;
