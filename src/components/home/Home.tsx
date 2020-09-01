import React, { FC, ReactElement } from "react";
import { Text, LoginButton } from "@inrupt/solid-ui-react";

const Home: FC<{}> = (): ReactElement => {
  return (
    <div>
      <Text property="Hello there, general kenobi." />
      <LoginButton oidcIssuer="https://inrupt.com" redirectUrl="http://localhost:3000">
        Login, bruh
      </LoginButton>
      asd
    </div>
  );
};

export default Home;
