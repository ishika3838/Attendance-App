import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Wrapper } from "./style";
import { useState, useEffect } from "react";
import { services } from "../../services";
import { useNavigate } from "react-router-dom";
import search_icon from "../assets/search.png";
import { Link } from "react-router-dom";
function Faculty({ setSelectedRole }) {
  const [sections, setSections] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [filteredSections, setFilteredSections] = useState(sections);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("USER"))
     window.location = "/";
  }, []);
  useEffect(() => {
    services.getSections().then((res) => {
      setSections(res.data);
      setFilteredSections(res.data);
    });
  }, []);

  const filter = (e) => {
    setFilteredSections(
      [...sections].filter((section) =>
        section.name.toLowerCase().startsWith(e.target.value.toLowerCase())
      )
    );
  };

  const gotoSheet = () => {
    if (selectedSection && selectedSubject) {
      navigate(
        `/attendanceSheet?sectionId=${selectedSection}&subjectId=${selectedSubject}`
      );
    } else {
      alert("Please select both subject and section before proceeding.");
    }
  };
  const handleLogout = () => {
    setSelectedRole("");
    localStorage.clear();
    window.location = "/";
  };
  return (
    <Wrapper>
      <h2>Attendance</h2>
      <Menu left>
        <Link to="/teacher-profile">My Profile</Link>
        <Link to="/mark-attendance">Mark Attendance</Link>
        <Link to="/view-attendance">View Attendance</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/" onClick={handleLogout}>
          Logout
        </Link>
      </Menu>
      <section>
        <div className="inner">
          <div className="imginner">
            <img src={search_icon} alt="search_icon" />
            <input
              type="search"
              placeholder="Filter the sections here ..."
              onChange={filter}
            />
          </div>

          <div className="sections">
            <div className="selectbutton">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                <option value="" disabled selected>
                  ---Select Subject---
                </option>
                <option value="Dbms">DBMS</option>
                <option value="OOPS">OOPs</option>
                <option value="DSA">DSA</option>
                <option value="Software Engineering">SE</option>
              </select>
            </div>
            <div className="sectiondiv">
              {filteredSections.map((section) => (
                <div key={section.id} className="section">
                  <input
                    type="button"
                    value={section.name}
                    onClick={() => setSelectedSection(section.id)}
                  />
                </div>
              ))}
            </div>
            <div className="gobutton">
              <button onClick={gotoSheet}>Go to Attendance Sheet</button>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
export default Faculty;
