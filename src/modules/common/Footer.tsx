import { Col, Row } from "react-bootstrap";
import "./style.scss";
const Footer = () => {
    return (
        <div className="footer bg-light p-2">
            <Row>
                <Col>
                    All content &copy; dnd5eapi
                </Col>
            </Row>
        </div>)
}

export default Footer;