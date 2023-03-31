import React from "react";
import AdminContext from "./AdminContext";
import { useState, useEffect } from "react";

const AdminState = (props) => {
  const [isadmin, setAdmin] = useState(false);
  const [recruiters, setRecruiters] = useState([
    {
      id: 1,
      name: "Kheval",
      bio: "This is test bio",
      contact: 789456123,
    },
    {
      id: 2,
      name: "Pratham",
      bio: "This is test bio",
      contact: 789456123,
    },
    {
      id: 3,
      name: "Aditya",
      bio: "This is test bio",
      contact: 789456123,
    },
  ]);

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Software Development Intern",
      maxApplicants: 5,
      maxPositions: 1,
      deadline: "2021-02-22T18:17:24.519Z",
      skillsets: ["C", "C++", "Javascript"],
      jobType: "Internship",
      duration: 2,
      salary: 4000,
    },

    {
      id: 2,
      title: "Web Development(Full Time)",
      maxApplicants: 1,
      maxPositions: 1,
      deadline: "2021-02-20T18:17:24.519Z",
      skillsets: ["PHP", "Django"],
      jobType: "Full Time",
      duration: 0,
      salary: 5000,
    },
    {
      id: 3,
      title: "Full Stack Intern",
      maxApplicants: 5,
      maxPositions: 3,
      deadline: "2021-02-20T18:17:24.519Z",
      skillsets: ["ReactJS", "NodeJS", "Express"],
      jobType: "Internship",
      duration: 5,
      salary: 4500,
    },
  ]);

  return (
    <AdminContext.Provider
      value={{
        isadmin,
        setAdmin,
        recruiters,
        setRecruiters,
        jobs, 
        setJobs
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminState;
