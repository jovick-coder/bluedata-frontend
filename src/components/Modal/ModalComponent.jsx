import React from "react";

function ModalComponent({ btnText, modalTitle, children, modalId }) {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      {/* <button
        type="button"
        className="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        {btnText}
      </button> */}

      {/* <!-- Modal --> */}
      <div
        className="modal fade mt-5"
        id={`${modalId}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        // aria-labelledby={`${modalId}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                // id={`${modalId}Label`}
              >
                {modalTitle}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="closeModal"
              ></button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button type="button" className="button" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalComponent;
