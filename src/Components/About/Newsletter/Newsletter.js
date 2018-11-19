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
    <form className="uk-form-stacked">
        <div className="uk-width-1-2@s">
            <input className="uk-input" type="text" placeholder="50" />
        </div>
        <div className="uk-width-1-2@s">
            <input claclassNamess="uk-input" type="text" placeholder="50" />
        </div>
    </form>
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