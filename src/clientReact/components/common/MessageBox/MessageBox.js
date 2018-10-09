import React from 'react';

require('./MessageBox.scss');

export default class MessageBox extends React.Component {

  render() {
    const {hideSystemMessage, systemMessage: {message = '', type = '', show = false} = {}} = this.props;

    const showHideClassName = show ? 'showMessage' : 'hideMessage';

    // if (type === '') return null;

    let messageImage = '';
    let alertClass = '';

    switch (type) {
      case 'warning':
        messageImage = '/image/warning.png';
        alertClass = 'alert-warning';
        break;
      case 'error':
        messageImage = '/image/error.png';
        alertClass = 'alert-danger';
        break;
      case 'success':
      default:
        messageImage = '/image/success.png';
        alertClass = 'alert-success';
    }

    return (
      <div className={`MessageBox ${showHideClassName}`}>
        <div className={"alert "} role="alert">
          <div className="">
            <img className="imgWindow mr-2" src={messageImage}/>
            <button type="button" className="close" onClick={hideSystemMessage}>
              <span className="span">&times;</span>
            </button>
            {message}
          </div>
        </div>
      </div>
    );
  }
}
