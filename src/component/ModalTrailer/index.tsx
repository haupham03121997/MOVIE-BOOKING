/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { FunctionComponent, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalTrailer : FunctionComponent = (props : any) => {
  // const {
  //   buttonLabel,
  //   className
  // } = props;
  const {isModal } = props;

  return (
    <div>
      <Modal isOpen={isModal} toggle={isModal}>
        <ModalHeader toggle={isModal}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Do Something</Button>
          <Button color="secondary" >Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalTrailer;