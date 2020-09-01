import React, { ReactElement, FC } from "react";
import { Link } from "react-router-dom";

const Notary: FC = (): ReactElement => {
  return (
    <React.Fragment>
      <div>Notary route</div>
      <Link to="/bank" className="mb-4 block">
        Bank
      </Link>
      <Link to="/">Home</Link>
    </React.Fragment>
  );
};

export default Notary;
