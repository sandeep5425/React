// Soon we will build the backend server 
// where we actually get this data from a database.

export const PROBLEMS = [
    {
        ProblemID : '1',
        Status:"AC",
        Title:"two sum",
        Solution:"yy",
        Acceptance:"45%",
        Difficulty:"High",
        Frequency:"34"

    },
    {
        ProblemID : '2',
        Status:"WA",
        Title:"3 sum",
        Solution:"yy",
        Acceptance:"45%",
        Difficulty:"High",
        Frequency:"34"

    },
    {
        ProblemID : '3',
        Status:"TLE",
        Title:"ARRAYS",
        Solution:"yy",
        Acceptance:"45%",
        Difficulty:"High",
        Frequency:"34"

    },
    {
        ProblemID : '4',
        Status:"AC",
        Title:"MATRICES",
        Solution:"yy",
        Acceptance:"45%",
        Difficulty:"High",
        Frequency:"34"

    },
    {
        ProblemID : '5',
        Status:"AC",
        Title:"DP",
        Solution:"yy",
        Acceptance:"45%",
        Difficulty:"MEDIUM",
        Frequency:"34"

    },
    {
        ProblemID : '6',
        Status:"AC",
        Title:"two sum",
        Solution:"yy",
        Acceptance:"45%",
        Difficulty:"High",
        Frequency:"34"

    },
    {
        ProblemID : '7',
        Status:"AC",
        Title:"two sum",
        Solution:"yy",
        Acceptance:"45%",
        Difficulty:"EASY",
        Frequency:"34"

    },
    {
        ProblemID : '8',
        Status:"AC",
        Title:"two sum",
        Solution:"yy",
        Acceptance:"45%",
        Difficulty:"High",
        Frequency:"34"

    },
    {
        ProblemID : '9',
        Status:"AC",
        Title:"two sum",
        Solution:"yy",
        Acceptance:"45%",
        Difficulty:"High",
        Frequency:"34"

    },
    {
        ProblemID : '10',
        Status:"AC",
        Title:"two sum",
        Solution:"yy",
        Acceptance:"45%",
        Difficulty:"High",
        Frequency:"34"

    },
    {
        ProblemID : '11',
        Status:"AC",
        Title:"two sum",
        Solution:"yy",
        Acceptance:"45%",
        Difficulty:"High",
        Frequency:"34"

    },
];

// problems per page NOTE: > 1
export var  PROBLEMS_PER_PAGE = 4; 
export default function getProblemsData(page_num){
    var problemsPerPage =[];
    for(var i=page_num*PROBLEMS_PER_PAGE;i<(page_num*PROBLEMS_PER_PAGE+PROBLEMS_PER_PAGE) && (i<PROBLEMS.length);i++){
        problemsPerPage.push(PROBLEMS[i]);
    }
    return problemsPerPage;
}