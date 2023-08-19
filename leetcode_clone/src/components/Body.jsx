import { useEffect, useState } from "react";
import getProblemsData from "../../BackendData/mockedData";
import ProblemTable from "./ProblemTable";
import PageNavigator from "./PageNavigator";

function Body() {
  const defaultPage = 0;
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    setProblems(getProblemsData(defaultPage));
  }, []);

  const fetchProbOfPage = (page_number) => {
    setProblems(getProblemsData(page_number));
  };

  return (
    <div className="body">
      <ProblemTable problems={problems} />
      <PageNavigator getProb={fetchProbOfPage} />
    </div>
  );
}

export default Body;
