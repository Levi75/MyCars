import React from "react";
import { MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";

const FormPage = () => {
  return (
    // <MDBContainer>
    //   <MDBRow>
    <MDBCol md="6">
      <MDBCard>
        <MDBCardBody>
          <form>
            <p className="h4 text-center py-4">Sign up</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
            </div>
            <div className="text-center py-4 mt-3">
              <MDBBtn color="cyan" type="submit">
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    //   </MDBRow>
    // </MDBContainer>
  );
};

export default FormPage;
