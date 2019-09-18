import React, { Component } from "react";

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "505652205820-im75sup49v1p1fllje1ucvvegqn3j68r.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();
          console.log(auth.isSignedIn.get());
        });
    });
  }
  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
