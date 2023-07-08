import React from "react";

import {
  NotFoundContainer,
  NotFoundHeading,
  NotFoundDescription,
  GoToHomeBtn,
  HomeLink,
} from "./styledComponents";

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundDescription>
        We're sorry, the page you requested could not be found
      </NotFoundDescription>
      <NotFoundDescription>Please go back to homepage</NotFoundDescription>
      <HomeLink to="/">
        <GoToHomeBtn>GO HOME</GoToHomeBtn>
      </HomeLink>
    </NotFoundContainer>
  );
}

export default NotFound;
