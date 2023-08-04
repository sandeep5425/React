function ProblemTable({problems}){
    return(
        <div>
            <table>
                <thead className="problemsHeader">
                    <tr>
                        <td>Status</td>
                        <td>Tittle</td>
                        <td>Solution</td>
                        <td>Acceptance</td>
                        <td>Difficulty</td>
                        <td>Frequency</td>
                    </tr>
                </thead>
                <tbody className="problemsBody">
                    {problems.map((problem,id)=>{
                        return(
                            <tr key={id}>
                            <td>{problem.Status}</td>
                            <td>{problem.Title}</td>
                            <td>{problem.Solution}</td>
                            <td>{problem.Acceptance}</td>
                            <td>{problem.Difficulty}</td>
                            <td>{problem.Frequency}</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ProblemTable;