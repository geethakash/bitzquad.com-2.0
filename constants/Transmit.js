class Transmit {
  constructor(data, status = 200, message = "Success") {
    this.data = data;
    this.status = status;
    this.message = message;
    this.invoker = {
      authenticated: false,
      key: "",
      nickname: "",
      type: "",
      user: {},
    };
    this.redirect = null;
    return this;
  }
}

export default Transmit;
