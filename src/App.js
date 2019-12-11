import React from 'react';
import './App.css';
import Jobs from './components/jobs';

const JOB_API_URL='http://localhost:3001/jobs';

const jobs=[
  {
    title: "SWE",
    company: "Google"
  },
  {
    title:"SDE-1",
    company: "Amazon"
  }
]

async function fetchJobs(updateJobs){
  const res=await fetch(JOB_API_URL);
  const json=await res.json();
  updateJobs(json)
  console.log({json});
}

function App() {

  const [jobList,updateJobs] =React.useState([]);
  React.useEffect(()=>{
    fetchJobs(updateJobs);
  },[])
  return (
    <div className="App">
      <Jobs jobs={jobList}></Jobs>
    </div>
  );
}

export default App;
