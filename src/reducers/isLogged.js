const isLogged = (state = true, action) => {
  switch (action.type) {
    case "LOGGED":
      return (state = true);
    default:
      return (state = false);
  }
};
export default isLogged;
