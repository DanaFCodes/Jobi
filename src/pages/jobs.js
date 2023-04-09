// import { getJobs } from "../../utils/jobs";
import { useEffect, useState } from "react";
import { firestore } from "../../utils/firebase"

export default function Job() {
  const [jobs, setJobs] = useState([]);
  
  const getJobs = async () => {
    // getting database
    const snapshot = await firestore.collection("jobs").get();

    // mapping through 
    const docs = snapshot.docs.map((doc) => {
      // storing data in data var
      const data = doc.data()
      data.id = doc.id
      return data
    })
    setJobs(docs);
    // console.log(docs);
};
  
  useEffect(() => {
    getJobs();
  }, []);

  return (
    <>
      <main>
        <div>
          <h2 className="planDiv">styling coming soon🥲🪄</h2>
          {jobs.map((job) => {
            return (
              <div key={job.id}>
                <p>job title: {job.jobTitle}</p>
                <p>job description: {job.jobDesc}</p>
                <p>location: {job.jobLocation}</p>
                <p>{job.jobType}</p>
                <p>~</p>
              </div>
            )
          })}
          <div>
          </div>
        </div>
      </main>
    </>
  );
}
