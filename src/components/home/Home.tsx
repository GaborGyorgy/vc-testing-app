import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import './Home.scss';

const Home: FC = (): ReactElement => {
  return (
    <React.Fragment>
      <div className="mb-4">Home route</div>
      <Link to="/bank" className="mb-4 block">
        Bank
      </Link>
      <Link to="/notary">Notary</Link>
    </React.Fragment>
  );
};

export default Home;
