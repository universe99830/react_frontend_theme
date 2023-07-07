import React from 'react';
import { Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { VectorMap } from "react-jvectormap";
import "../Maps/jquery-jvectormap.scss";

const Locations = (props) => {
    const map = React.createRef(null);
    return (
        <React.Fragment>
            <Col xl={4}>
                <Card>
                    <CardBody>
                        <div className="d-flex flex-wrap align-items-center mb-4">
                            <h5 className="card-title me-2">Sales by Location</h5>
                            <div className="ms-auto">
                                <UncontrolledDropdown>
                                    <DropdownToggle className="text-reset" to="#" tag="a">
                                        <span className="text-muted font-size-12">Sort By:</span> <span className="fw-medium">World<i className="mdi mdi-chevron-down ms-1"></i></span>
                                    </DropdownToggle>

                                    <DropdownMenu className="dropdown-menu-end">
                                        <DropdownItem to="#">USA</DropdownItem>
                                        <DropdownItem to="#">Russia</DropdownItem>
                                        <DropdownItem to="#">Australia</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </div>
                        </div>

                        <div id="sales-by-locations" data-colors='["#5156be"]' style={{ height: "250px" }}>
                            <div style={{ width: props.width, height: 500 }}>
                                <VectorMap
                                    map={"us_aea"}
                                    backgroundColor="transparent"
                                    normalizeFunction='polynomial'
                                    hoverOpacity={0.7}
                                    hoverColor={false}
                                    ref={map}
                                    containerStyle={{
                                        width: "100%",
                                        height: "50%",
                                    }}
                                    regionStyle={{
                                        initial: {
                                            fill: "#e9e9ef",
                                            'fill-opacity': 0.9,
                                            stroke: "#fff",
                                            "stroke-width": 7,
                                            "stroke-opacity": 0.4,
                                        },
                                        hover: {
                                            'stroke': '#fff',
                                            'fill-opacity': 1,
                                            'stroke-width': 1.5,
                                            cursor: "pointer",
                                        },
                                        selected: {
                                            fill: "#2938bc", //what colour clicked country will be
                                        },
                                        selectedHover: {},
                                    }}
                                    containerClassName="map"
                                />
                            </div>
                        </div>

                        <div className="px-2 py-2">
                            <p className="mb-1">USA <span className="float-end">75%</span></p>
                            <div className="progress mt-2" style={{ height: "6px" }}>
                                <div className="progress-bar progress-bar-striped bg-primary" role="progressbar"
                                    style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="75">
                                </div>
                            </div>

                            <p className="mt-3 mb-1">Russia <span className="float-end">55%</span></p>
                            <div className="progress mt-2" style={{ height: "6px" }}>
                                <div className="progress-bar progress-bar-striped bg-primary" role="progressbar"
                                    style={{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="55">
                                </div>
                            </div>

                            <p className="mt-3 mb-1">Australia <span className="float-end">85%</span></p>
                            <div className="progress mt-2" style={{ height: "6px" }}>
                                <div className="progress-bar progress-bar-striped bg-primary" role="progressbar"
                                    style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="85">
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default Locations;