Table candidate {
  _id integer
  username integer
  fullName varchar
  email varchar
  password varchar
  profileImage varchar
  about text
  experiance varchar
  skills varchar
  jobrole varchar
  resume varchar
  appliedJob array
  followingJob array
  refreshtoken string
  applicationstatus  array
  upated_at timestamp
  created_at timestamp 
}

Table jobprovider {
  _id integer
  username integer
  fullName varchar
  email varchar
  password varchar
  profileImage varchar
  upated_at timestamp
  created_at timestamp 
}

Table Job {
  _id integer 
  title varchar
  discription text [note: 'Content of the post']
  jobPostedBy integer
  upated_at timestamp
  created_at timestamp
  jobrole varchar
  applybefore timestamp
  experiancelevel varchar
  jobskills array
}
Table experiance {
  _id varchar
  candiate_id integer
  companyName varachr
  jobrole varchar
  workedFrom timestamp
  workedTo timestamp
  about varchar
  skills array
}
Table education {
  _id varchar
  candiate_id integer
  intitutename varchar
  course varchar
  studyFrom timestamp
  studedTo timestamp
  about varchar
}