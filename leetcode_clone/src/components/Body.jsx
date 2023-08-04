import { useEffect, useState } from "react";
import getProblemsData from "../../BackendData/mockedData";
import ProblemTable from "./ProblemTable";
 
function Body(){
    const [problems,setProblems] = useState(getProblemsData());
    
    useEffect(()=>{
        setProblems(getProblemsData())
    },[])
    
    return(
        <div className="body">
            <ProblemTable problems={problems} />
        </div>
    );
}

export default Body;