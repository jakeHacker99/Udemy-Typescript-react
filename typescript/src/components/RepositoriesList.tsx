import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { actionCreators } from "../state";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(actionCreators.searchRepositories(term));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3> {error} </h3>}
      {loading && <h3> loading .. </h3>}
      {!error && !loading && data}
    </div>
  );
};

export default RepositoriesList;
