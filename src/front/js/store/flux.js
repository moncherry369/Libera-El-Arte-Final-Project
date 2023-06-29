const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: "",
      msg: "",
      user: null,
    },
    actions: {
      dehydrate: () => {
        sessionStorage.setItem("store", JSON.stringify(getStore()));
      },

      rehydrate: () => {
        setStore(JSON.parse(sessionStorage.getItem("store")));
      },

      login: async (email, password) => {
        const options = {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ email: email, password: password }),
        };
        const resp = await fetch(
          `${process.env.BACKEND_URL}/api/login`,
          options
        );
        const data = await resp.json();
        setStore(data);
        getActions().dehydrate();
      },
      log_out: () => {setStore({
        token: "",
        msg: "",
        user: null,
      })
      getActions().dehydrate();
      },

      sign_up: async (email, password, name) => {
        const options = {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            name: name,
            phone_number: phone_number
          }),
        };
        const resp = await fetch(
          `${process.env.BACKEND_URL}/api/signup`,
          options
        );
        const data = await resp.json();
        return setStore(data);
      },
    },
  };
};

export default getState;
