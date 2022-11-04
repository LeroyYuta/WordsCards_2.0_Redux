import React from 'react';

const ModalGame = ({
    modalActive,
    setModalActive
}) => {
    return (
        <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
            <div className={modalActive ? 'modal-content active' : 'modal-content'} onClick={(e) => e.stopPropagation()}>
                <p style={{ color: 'white', fontSize: 24 + 'px' }}>BYE...</p>
            </div>
        </div>
    )
}

export default ModalGame;
