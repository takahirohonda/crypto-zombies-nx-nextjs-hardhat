'use client'

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react'
import { WalletOptions } from './WalletOptions'

interface WalletConnectModalProps {
  isOpen: boolean
  onOpenChange: () => void
}
export const WalletConnectModal = ({
  isOpen,
  onOpenChange,
}: WalletConnectModalProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center">
              Connect Wallet
            </ModalHeader>
            <ModalBody>
              <WalletOptions />
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
