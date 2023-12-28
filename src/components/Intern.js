import {
    Button,
    Card,
    Form,
    Row,
    Col,
    Modal,
    CloseButton,
} from "react-bootstrap";
import { TextField, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import MaterialTable from 'material-table';

export default function Intern() {
    const [show, setShow] = useState(false);
    const [noOfSharesFix, setNoOfSharesFix] = useState("");
    const [sharePriceFix, setSharePriceFix] = useState("");
    const [dateOfFix, setDateOfFix] = useState("");

    const [companyBuy, setCompanyBuy] = useState("");
    const [shareHolderBuy, setShareHolderBuy] = useState("");

    const [sharesBuy, setSharesBuy] = useState("");

    const [sharesBuy1, setSharesBuy1] = useState("");
    const [dateOfFix1, setDateOfFix1] = useState("");

    const [data, setData] = useState([]);
    const [certificateId, setCertificateId] = useState(1);


    const handleFixShares = () => {
        // Gather values from the Company modal
        const companyShares = noOfSharesFix;
        const companySharePrice = sharePriceFix;
        const companyDate = dateOfFix;

        // Update the state of the Buyer modal
        // setCompanyBuy("Company"); // Set to the selected company (modify as needed)
        setSharesBuy(companyShares); // Set the number of shares
        setSharePriceFix(companySharePrice); // Set the share price

        // Update other Buyer modal state values based on your requirements
    };

    const buyerCompany = companyBuy;
    const buyerShareHolder = shareHolderBuy;
    const buyerShares = sharesBuy1;
    const buyerDate = dateOfFix1;

    const handleBuy = () => {
        setShow(true);

        // const certificateId = new Date().getTime();
        const currentCertificateId = certificateId;
        setCertificateId(currentCertificateId + 1);

        const buyerCompany = companyBuy;
        const buyerShareHolder = shareHolderBuy;
        const buyerShares = sharesBuy1;
        const buyerDate = dateOfFix1;

        setCompanyBuy(buyerCompany);
        setShareHolderBuy(buyerShareHolder);
        setSharesBuy1(buyerShares);
        setDateOfFix1(buyerDate);

        const newData = data.filter((item) => item["Shareholder name"] === buyerShareHolder);

        // Add data for the new shareholder
        newData.push({
            CertificateId: currentCertificateId,
            Company: "Company", // Replace with actual company name
            "Shareholder name": buyerShareHolder,
            "No.of shares": buyerShares,
            "Date": buyerDate,
        });

        setData(newData);

        setCompanyBuy('');
        setShareHolderBuy('');
        setSharesBuy1('');
        setDateOfFix1('');

        setShow(true);
    };


    return (
        <>
            <div style={{ background: '', justifyContent: 'center', display: 'flex', alignItems: "center" }}>
                <Row>
                    <Col sm={6}>
                        <Card style={{ width: "400px" }}>
                            <Card.Header>Company</Card.Header>
                            <Card.Body>
                                <Row>
                                    <Form.Label>No.of shares:</Form.Label>
                                </Row>
                                <Row>
                                    <Form.Control
                                        type="text"
                                        value={noOfSharesFix}
                                        onChange={(e) => setNoOfSharesFix(e.target.value)}
                                    />
                                </Row>
                                <Row className="mt-2">
                                    <Form.Label>share price:</Form.Label>
                                </Row>
                                <Row>
                                    <Form.Control
                                        type="text"
                                        value={sharePriceFix}
                                        onChange={(e) => setSharePriceFix(e.target.value)}
                                    />
                                </Row>
                                <Row className="mt-2">
                                    <Form.Label>Date:</Form.Label>
                                </Row>
                                <Row>
                                    <TextField
                                        type="date"
                                        value={dateOfFix}
                                        onChange={(e) => setDateOfFix(e.target.value)}
                                    />
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                <Col className="d-flex justify-content-end">
                                    <Button onClick={handleFixShares} className="border-0 shadow">
                                        Fix Shares
                                    </Button>
                                </Col>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <Card style={{ width: "400px" }} className="hover-20deg">
                            <Card.Header>Buyer </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Form.Label>Company Shares:</Form.Label>
                                        {sharesBuy}
                                    </Col>
                                    <Col>
                                        <Form.Label> share price:</Form.Label>
                                        {sharePriceFix}
                                    </Col>
                                </Row>
                                <Row>
                                    <Form.Label>Company</Form.Label>
                                </Row>
                                <Row>



                                    <Select>
                                        <MenuItem value="Company"
                                            onChange={(e) => setCompanyBuy(e.target.value)}> Company</MenuItem>

                                        {/* Add more seller options as needed */}
                                    </Select>
                                </Row>
                                <Row className="mt-2">
                                    <Form.Label>Shareholder name:</Form.Label>
                                </Row>
                                <Row>
                                    <Form.Control type="text"
                                        value={shareHolderBuy}
                                        onChange={(e) => setShareHolderBuy(e.target.value)}></Form.Control>
                                </Row>
                                <Row className="mt-2">
                                    <Form.Label>No.of shares:</Form.Label>
                                </Row>
                                <Row>
                                    <Form.Control type="text"
                                        value={sharesBuy1}
                                        onChange={(e) => setSharesBuy1(e.target.value)}
                                    ></Form.Control>
                                </Row>
                                <Row className="mt-2">
                                    <Form.Label>Date</Form.Label>
                                </Row>
                                <Row>
                                    <TextField type="date"
                                        value={dateOfFix1}
                                        onChange={(e) => setDateOfFix1(e.target.value)}
                                    ></TextField>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                <Col className="d-flex justify-content-end">
                                    <Button
                                        className="border-0 shadow"
                                        onClick={handleBuy}
                                    >
                                        Buy
                                    </Button>
                                    <Modal show={show}>
                                        <Modal.Header>
                                            <CloseButton onClick={() => setShow(false)}></CloseButton>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div>
                                                <MaterialTable
                                                    title="Buy:"
                                                    columns={[
                                                        { title: 'Certificate ID', field: 'CertificateId' },
                                                        { title: 'Company', field: 'Company' },
                                                        { title: 'Shareholder name', field: 'Shareholder name' },
                                                        { title: 'No.of shares', field: 'No.of shares', type: 'numeric' },
                                                        { title: 'Date', field: 'Date', type: 'numeric' },
                                                    ]}
                                                    data={data}
                                                    options={{
                                                        exportButton: true,
                                                    }}
                                                />

                                            </div>

                                        </Modal.Body>
                                    </Modal>
                                </Col>
                            </Card.Footer>
                        </Card>
                    </Col>

                </Row>
            </div>
        </>
    );
}
