import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

const ModalView = (props) => {
  return (
    <div className="backdrop" onClick={props.closePreview}>
      <div className="modal-overlay">
        <div className="modal-view">
          <div className="modal-title">
            {props.title}
            <button className="close">X</button>
          </div>
          <div className="modal-content">
            {props.renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

ModalView.propTypes = {
  title: PropTypes.string.isRequired,
  closePreview: PropTypes.func.isRequired,
  renderContent: PropTypes.func.isRequired
}


export default ModalView;