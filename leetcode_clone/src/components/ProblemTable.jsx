import '../styling/ProblemTable.css'
function ProblemTable({ problems }) {
    return (
        <div>
            <table>
                <thead className="problemsHeader">
                    <tr>
                        <td><b>Status</b></td>
                        <td><b>Tittle</b></td>
                        <td><b>Solution</b></td>
                        <td><b>Acceptance</b></td>
                        <td><b>Difficulty</b></td>
                        <td><b>Frequency</b></td>
                    </tr>
                </thead>
                <tbody className="problemsBody">
                    {problems.map((problem, id) => {
                        return (
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