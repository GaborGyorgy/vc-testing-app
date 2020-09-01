import React, { ComponentType } from "react";
import { SessionProvider } from "@inrupt/solid-ui-react";

const withSessionProvider = <P extends unknown>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> => (props) => {
  return (
    <SessionProvider>
      <WrappedComponent {...props} />
    </SessionProvider>
  );
};

export default withSessionProvider;
