import { useState } from "react"
import {Button, InputGroup, Modal, FormControl} from "react-bootstrap"

interface ModalProps {
    text: string,
    variant: "primary" | "secondary" | "danger",
    modelHeading: string
}

const ModalComponent = ({text, variant, modelHeading}: ModalProps) => { 

    const [show, setShow] = useState(false)
    const handleShow = () => {setShow(true)}
    const handleClose = () => {setShow(false)}

    return <div className="d-inline mx-1">
        <Button variant={variant} onClick={handleShow} size="lg" style={{padding: "0.5rem 3rem", marginRight: "1rem"}}>{text}</Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{modelHeading}</Modal.Title>
            </Modal.Header>
            <InputGroup className="mb-3">
                <InputGroup.Text>Email</InputGroup.Text>
                <FormControl type="email"></FormControl>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>Password</InputGroup.Text>
                <FormControl type="password"></FormControl>
            </InputGroup>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>Close</Button>
                <Button variant="primary">{text}</Button>
            </Modal.Footer>
        </Modal>
    </div>
}

export default ModalComponent