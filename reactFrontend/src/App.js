import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Modal from "react-modal";
import axios from "axios"




Modal.setAppElement("#root")
function App() {
  //profile details
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [linkedIn, setLinkedIn] = useState('')
  const [github, setGithub] = useState('')
  //skills
  const [interests, setInterests] = useState('')
  const [programmingLanguages, setProgrammingLanguages] = useState('')
  const [webFrameworks, setWebFrameworks] = useState('')
  const [database, setDatabases] = useState('')
  const [tools, setTools] = useState('')
  //github project 1 
  const [gitProjectName1, setGitProjectName1] = useState('')
  const [gitProjectTagline1, setGitProjectTagline1] = useState('')
  const [gitProjectDescription1, setGitProjectDescription1] = useState('')
  const [gitProjectTools1, setGitProjectTools1] = useState('')
  //github project 2
  const [gitProjectName2, setGitProjectName2] = useState('')
  const [gitProjectTagline2, setGitProjectTagline2] = useState('')
  const [gitProjectDescription2, setGitProjectDescription2] = useState('')
  const [gitProjectTools2, setGitProjectTools2] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  //other project 1
  const [otherProjectName1, setOtherProjectName1] = useState('')
  const [otherProjectDescription1, setOtherProjectDescription1] = useState('')
  const [otherProjectTools1, setOtherProjectTools1] = useState('')
  //other project 2
  const [otherProjectName2, setOtherProjectName2] = useState('')
  const [otherProjectDescription2, setOtherProjectDescription2] = useState('')
  const [otherProjectTools2, setOtherProjectTools2] = useState('')
  //work experience
  const [jobTitle, setJobTitle] = useState('')
  const [organisation, setOrganisation] = useState('')
  const [jobLocation, setJobLocation] = useState('')
  const [jobStartDate, setJobStartDate] = useState('')
  const [jobEndDate, setJobEndDate] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [jobTools, setJobTools] = useState('')
  const [volunteer, setVolunteer] = useState('')
  //education
  const [degree, setDegree] = useState('')
  const [major, setMajor] = useState('')
  const [institution, setInstitution] = useState('')
  const [gradYear, setGradYear] = useState('')
  //research experience
  const [title, setTitle] = useState('')
  const [researchOrg, setResearchOrg] = useState('')
  const [researchStartDate, setResearchStartDate] = useState('')
  const [researchEndDate, setResearchEndDate] = useState('')
  const [researchDescription, setResearchDescription] = useState('')
  //functions
  const handleFirstName = e => {
    setFirstname(e.target.value)
  }
  const handleLastName = e => {
    setLastname(e.target.value)
  }
  const handleEmail = e => {
    setEmail(e.target.value)
  }
  const handlePhone = e => {
    setPhone(e.target.value)
  }
  const handleWebsite = e => {
    setWebsite(e.target.value)
  }
  const handleLinkedIn = e => {
    setLinkedIn(e.target.value)
  }
  const handleGithub = e => {
    setGithub(e.target.value)
  }
const handleInterests = e => {
  setInterests(e.target.value)
}
//skills
const handleProgrammingLanguages = e => {
  setProgrammingLanguages(e.target.value)
}
const handleWebFrameworks = e => {
  setWebFrameworks(e.target.value)
}
const handleDatabases = e => {
  setDatabases(e.target.value)
}
const handleTools = e => {
  setTools(e.target.value)
}
//git project 1
const handleGitProjectName1 = e => {
  setGitProjectName1(e.target.value)
}
const handleGitTagline1 = e => {
  setGitProjectTagline1(e.target.value)
}
const handleGitProjectDescription1 = e => {
  setGitProjectDescription1(e.target.value)
}
const handleGitProjectTools1 = e => {
  setGitProjectTools1(e.target.value)
}
//git project 2
const handleGitProjectName2 = e => {
  setGitProjectName2(e.target.value)
}
const handleGitTagline2 = e => {
  setGitProjectTagline2(e.target.value)
}
const handleGitProjectDescription2 = e => {
  setGitProjectDescription2(e.target.value)
}
const handleGitProjectTools2 = e => {
  setGitProjectTools2(e.target.value)
}
//other project 1 
const handleOtherProjectName1 = e => {
  setOtherProjectName1(e.target.value)
}
const handleOtherProjectDescription1 = e => {
  setOtherProjectDescription1(e.target.value)
}
const handleOtherProjectTools1 = e => {
  setOtherProjectTools1(e.target.value)
}
//other project 2 
const handleOtherProjectName2 = e => {
  setOtherProjectName2(e.target.value)
}
const handleOtherProjectDescription2 = e => {
  setOtherProjectDescription2(e.target.value)
}
const handleOtherProjectTools2 = e => {
  setOtherProjectTools2(e.target.value)
}
//work experience
const handleJobTitle = e => {
  setJobTitle(e.target.value)
}
const handleOrganisation = e => {
  setOrganisation(e.target.value)
}
const handleJobLocation = e => {
  setJobLocation(e.target.value)
}
const handleJobStartDate = e => {
  setJobStartDate(e.target.value)
}
const handleJobEndDate = e => {
  setJobEndDate(e.target.value)
}
const handleJobDescription = e => {
  setJobDescription(e.target.value)
}
const handleJobTools = e => {
  setJobTools(e.target.value)
}
const handleVolunteer = e => {
  setVolunteer(e.target.value)
}
//education
const handleDegree = e => {
  setDegree(e.target.value)
}
const handleMajor = e => {
  setMajor(e.target.value)
}
const handleInstitution = e => {
  setInstitution(e.target.value)
}
const handleGradYear = e => {
  setGradYear(e.target.value)
}
//research experience
const handleResearchTitle = e => {
  setTitle(e.target.value)
}
const handleResearchOrg = e => {
  setResearchOrg(e.target.value)
}
const handleReseatchStartDate = e => {
  setResearchStartDate(e.target.value)
}
const handleReseatchEndDate = e => {
  setResearchEndDate(e.target.value)
}
const handleResearchDescription = e => {
  setResearchDescription(e.target.value)
}
  const handlesubmit = e => {
    e.preventDefault()
    const data = {
      firstname:firstname,
      lastname:lastname,
      contact: {
        email: email,
        website: website,
        linkedin: linkedIn,
        github: github
      },
      skills:{
        details: [
          {
            type:"Programming Languages",
            items: programmingLanguages.split(",")
          },
          {
            type:"Web Frameworks",
            items: webFrameworks.split(",")
          },
          {
            type:"Databases",
            items: database.split(",")
          },
          {
            type:"Tools",
            items: tools.split(",")
          },
          {
            type:"Interests",
            items: interests.split(",")
          }
        ]
      },
      github_projects: {
        items: [
          {
            project_name: gitProjectName1,
            tagline: gitProjectTagline1,
            description: [
              gitProjectDescription1
            ],
            technology_used: {
              tools: gitProjectTools1.split(",")
            }
          },
          {
            project_name: gitProjectName2,
            tagline: gitProjectTagline2,
            description: [
              gitProjectDescription2
            ],
            technology_used: {
              tools: gitProjectTools2.split(",")
            }
          }
        ]
      },
      other_projects:{
        items:[
          {
            headline: otherProjectName1,
            points: [ otherProjectDescription1],
            technology_used: {
              tools: otherProjectTools1.split(",")
            }
          },
          {
            headline: otherProjectName2,
            points: [ otherProjectDescription2],
            technology_used: {
              tools: otherProjectTools2.split(",")
            }
          }
        ]
      },
      work_experience: {
        items: [
          {
            title: jobTitle,
            organisation: organisation,
            location: jobLocation,
            from: jobStartDate,
            to: jobEndDate,
            details:[jobDescription],
            technology_used: {
              tools: jobTools.split(",")
            }
          }
        ]
      },
      involvement:{
        organizations:[volunteer]
      },
      education:{
        schools: [
          {
            degree: degree,
            major: major,
            institution: institution,
            graduation_year: gradYear
          }
        ]
      },
      research_experience:{
        items: [
          {
            title: title,
            organisation: researchOrg,
            from: researchStartDate,
            to: researchEndDate,
            points: [researchDescription]
          }
        ]
      },
    }
    console.log(data)
    axios.post("http://localhost:3000/generate", data).then(res => {
      let resumeFile = res.data.filename;
      console.log(resumeFile)
      let fileUrl = `http://localhost:3000/${resumeFile}`
      window.location = fileUrl
    }).catch(err => console.log(`Error: ${err}`))
  }
  return (
    <div className="container-fluid">
    {/* help modal dialog */}
    <Modal isOpen={modalIsOpen}>
      <div className="help">
      <p>You don't have to fill everything, just the required sections, which are:</p>
        <ul>
          <li>YOUR PROFILE DETAILS</li>
          <li>YOUR SKILLS</li>
          <li>WORK EXPERIENCE</li>
          <li>EDUCATION</li>
        </ul>
        <p>You can also just fill One GITHUB PROJECT and one OTHER PROJECT.</p>
      </div>
        <button onClick={() => setModalIsOpen(!modalIsOpen)} className="btn">Close</button>
    </Modal>
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>Generate Resume</h1>
        </div>
      </div>
      <div className="form-container">
        <form action="" onSubmit={e => handlesubmit(e)}>
        {/* first row */}
          <div className="row">
            <div className="mb-3 github">
                <h1>Your Profile Details</h1>
            </div>
            <div className="mb-3 col-md-6">
              <input type="text" value={firstname} onChange={e => handleFirstName(e)} className="form-control" placeholder="First Name..." required/>
            </div>
            <div className="mb-3 col-md-6">
              <input type="text" value={lastname} onChange={e => handleLastName(e)} className="form-control" placeholder="Last Name..." required/>
            </div>
            <div className="mb-3 col-md-6">
              <input type="email" value={email} onChange={e => handleEmail(e)} className="form-control" placeholder="Email..." required/>
            </div>
            <div className="mb-3 col-md-6">
              <input type="text" value={phone} onChange={e => handlePhone(e)} className="form-control" placeholder="Phone..." required/>
            </div>
            <div className="mb-3 col-md-6">
              <input type="text" value={website} onChange={e => handleWebsite(e)} className="form-control" placeholder="Website..."/>
            </div>
            <div className="mb-3 col-md-6">
              <input type="text" value={linkedIn} onChange={e => handleLinkedIn(e)} className="form-control" placeholder="LinkedIn Profile URL..." required/>
            </div>
            <div className="mb-3 col-md-6">
              <input type="text" value={github} onChange={e => handleGithub(e)} className="form-control" placeholder="GitHub URL..." required/>
            </div>
            <div className="mb-3 col-md-6">
              <input type="text" value={interests} onChange={e => handleInterests(e)} className="form-control" placeholder="Your Interests, separated with a comma" required/>
            </div>
          </div>
          {/* second row */}
          <div className="row">
              <div className="mb-3 github">
                <h1>Your Skills</h1>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={programmingLanguages} onChange={e => handleProgrammingLanguages(e)} className="form-control" placeholder="Programming Languages e.g python, java etc. separated with a comma" />
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={webFrameworks} onChange={e => handleWebFrameworks(e)} className="form-control" placeholder="Web Frameworks e.g Bootstrap, Rails etc. separated with a comma"/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={database} onChange={e => handleDatabases(e)} className="form-control" placeholder="Databases e.g SQL, MongoDB etc. separated with a comma"/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={tools} onChange={e => handleTools(e)} className="form-control" placeholder="Tools e.g Git, Sketch, Xcode etc. separated with a comma"/>
              </div>
          </div>
          {/* third row */}
          <div className="row">
              <div className="mb-3 github">
                  <h1>GitHub Project 1</h1>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={gitProjectName1} onChange={e => handleGitProjectName1(e)} className="form-control" placeholder="Project Name..."/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={gitProjectTagline1} onChange={e => handleGitTagline1(e)} className="form-control" placeholder="Tag Line e.g [iOS App ](https://github.com/orifavour/iOSHonorsCollege)"/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={gitProjectDescription1} onChange={e => handleGitProjectDescription1(e)} className="form-control" placeholder="Project Description..."/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={gitProjectTools1} onChange={e => handleGitProjectTools1(e)} className="form-control" placeholder="Tools Used e.g Java, MySQL etc. Separated with a comma "/>
              </div>
          </div>
          {/* fourth row */}
          <div className="row">
              <div className="mb-3 github">
                  <h1>GitHub Project 2</h1>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={gitProjectName2} onChange={e => handleGitProjectName2(e)} className="form-control" placeholder="Project Name..."/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={gitProjectTagline2} onChange={e => handleGitTagline2(e)} className="form-control" placeholder="Tag Line e.g [iOS App ](https://github.com/orifavour/iOSHonorsCollege)"/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={gitProjectDescription2} onChange={e => handleGitProjectDescription2(e)} className="form-control" placeholder="Project Description..."/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={gitProjectTools2} onChange={e =>handleGitProjectTools2(e)} className="form-control" placeholder="Tools Used e.g Java, MySQL etc. Separated with a comma "/>
              </div>
          </div>
          {/* fifth row */}
          <div className="row">
              <div className="mb-3 github">
                  <h1>Other Project 1</h1>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={otherProjectName1} onChange={e => handleOtherProjectName1(e)} className="form-control" placeholder="Project Name..."/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={otherProjectDescription1} onChange={e => handleOtherProjectDescription1(e)} className="form-control" placeholder="Project Description..."/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={otherProjectTools1} onChange={e => handleOtherProjectTools1(e)} className="form-control" placeholder="Tools Used e.g Java, MySQL etc. Separated with a comma "/>
              </div>
          </div>
          {/* sixth row */}
          <div className="row">
              <div className="mb-3 github">
                  <h1>Other Project 2</h1>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={otherProjectName2} onChange={e => handleOtherProjectName2(e)} className="form-control" placeholder="Project Name..."/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={otherProjectDescription2} onChange={e => handleOtherProjectDescription2(e)} className="form-control" placeholder="Project Description..."/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={otherProjectTools2} onChange={e => handleOtherProjectTools2(e)} className="form-control" placeholder="Tools Used e.g Java, MySQL etc. Separated with a comma "/>
              </div>
          </div>
          {/* seventh row */}
          <div className="row">
              <div className="mb-3 github">
                  <h1>Work Experience</h1>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={jobTitle} onChange={e => handleJobTitle(e)} className="form-control" placeholder="Job Title..."/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={organisation} onChange={e => handleOrganisation(e)} className="form-control" placeholder="Organization..."/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={jobLocation} onChange={e => handleJobLocation(e)} className="form-control" placeholder="Location..."/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={jobStartDate} onChange={e => handleJobStartDate(e)} className="form-control" placeholder="Start Date e.g January 2017"/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={jobEndDate} onChange={e => handleJobEndDate(e)} className="form-control" placeholder="End Date e.g January 2020/Present"/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={jobDescription} onChange={e => handleJobDescription(e)} className="form-control" placeholder="Job Description..."/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={jobTools} onChange={e => handleJobTools(e)} className="form-control" placeholder="Tools Used e.g Java, MySQL etc. Separated with a comma"/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={volunteer} onChange={e => handleVolunteer(e)} className="form-control" placeholder="Organizations Involved With  e.g Volunteer, Magnolia Blossom, OCT 2016"/>
              </div>
          </div>
          {/* eighth row */}
          <div className="row">
              <div className="mb-3 github">
                  <h1>Education</h1>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={degree} onChange={e => handleDegree(e)} className="form-control" placeholder="Degree..."/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={major} onChange={e => handleMajor(e)} className="form-control" placeholder="Major..."/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={institution} onChange={e => handleInstitution(e)} className="form-control" placeholder="Institution..."/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={gradYear} onChange={e => handleGradYear(e)} className="form-control" placeholder="Graduation Year e.g June 2014 "/>
              </div>
          </div>
          {/* ninth row */}
          <div className="row">
              <div className="mb-3 github">
                  <h1>Research Experience</h1>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={title} onChange={e => handleResearchTitle(e)} className="form-control" placeholder="Title..."/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={researchOrg} onChange={e => handleResearchOrg(e)} className="form-control" placeholder="Organisation..."/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={researchStartDate} onChange={e => handleReseatchStartDate(e)} className="form-control" placeholder="Start Date e.g February 2017"/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={researchEndDate} onChange={e => handleReseatchEndDate(e)} className="form-control" placeholder="End Date e.g April 2017"/>
              </div>
              <div className="mb-3 col-md-6">
                <input type="text" value={researchDescription} onChange={e => handleResearchDescription(e)} className="form-control" placeholder="Research Description..."/>
              </div>
              <div className="mb-3 col-md-6">
                <button className="btn">Generate</button>
              </div>
          </div>
        </form>
      </div>
      <button onClick={() => setModalIsOpen(!modalIsOpen)} className="btn btn-primary circle" id="myBtn" title="Go to top">Help</button>
    </div>
  );
}

export default App;
