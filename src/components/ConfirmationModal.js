import React from 'react'
import Modal from 'react-modal'

const ConfirmationModal = (props) => {
    
    const selectedYes = () => {
        props.handleModalClose()
        props.handleRemovePost()
    }

    return (
        <Modal
            isOpen={!!props.modalOpen}
            onRequestClose={props.handleModalClose}
            contentLabel="Post delete confirmation"
            closeTimeoutMS={200}
            className="modal"
            ariaHideApp={false}
        >
            <h3 className="modal__title">Are you sure you want to delete the post?</h3>
            <button className="button" onClick={selectedYes}>Yes</button>
            <button className="button" onClick={props.handleModalClose}>No</button>
        </Modal>
    )
}

export default ConfirmationModal