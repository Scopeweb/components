import React, { Component } from 'react';
import { render } from "react-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe"

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
      <div className="uk-container">
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
            <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
            />
        )}
        {status === "success" && (
            <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
            />
        )}
        <h3>But there’s so much more to it.</h3>
        <p>We can’t do it justice in a single page, but we don’t want an information overload. Get to know us better by signing up for our newsletter and downloading our whitepaper.</p>
        <div className="uk-width-1-2@s">
            <input
                className="uk-input"
                ref={node => (name = node)}
                type="text"
                placeholder="Your name"
            />
        </div>
        <div className="uk-width-1-2@s">
            <input
                className="uk-input"
                ref={node => (email = node)}
                type="email"
                placeholder="Please enter your email address..."
            />
        </div>
        
    </div>
  );
};


class Newsletter extends Component {
    render() {
        const url =
          "https://nyc.us19.list-manage.com/subscribe/post?u=5b30200a7171ca08bf6501ce7&amp;id=a528350254";
        return (
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
                )}
            />
        );
      }
}

export default Newsletter;