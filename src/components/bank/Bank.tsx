import React, { ReactElement, FC } from "react";
import Header from "./header/Header";
import { Link } from "react-router-dom";

const Bank: FC = (): ReactElement => {
  return (
    <React.Fragment>
      <Header />
      <div>Bank route</div>

      <Link to="/" className="mb-4 block">
        Home
      </Link>
      <Link to="/notary">Notary</Link>
    </React.Fragment>
  );
};

export default Bank;
