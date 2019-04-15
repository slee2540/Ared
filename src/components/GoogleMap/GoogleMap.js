import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

const Wrapper = styled.main`
  width: 50rem;
  height: 50rem;
`;

const GoogleMap = ({ children, ...props }) => (
  <Wrapper>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: "AIzaSyAzehyo6waEuC1kGd8Dm1j2xgx8zjijr5g"
      }}
      {...props}
    >
      {children}
    </GoogleMapReact>
  </Wrapper>
);

GoogleMap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

GoogleMap.defaultProps = {
  children: null
};

export default GoogleMap;
