import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";

const CardExample = () => {
  return (
    <MDBRow>
      <MDBCol md="4">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Card Title</MDBCardTitle>
            <hr />
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </MDBCardText>
            <a href="#!" className="black-text d-flex justify-content-end">
              <h5>
                Read more
                <MDBIcon icon="angle-double-right" className="ml-2" />
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default CardExample;
