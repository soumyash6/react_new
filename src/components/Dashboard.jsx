import React, { Component } from "react";
import Projectitem from "./Project/Projectitem";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateProjectbutton from "./Project/CreateProjectbutton";
import { connect } from "react-redux";
import { getAllProject } from "../actions/projectActions";
import PropTypes from "prop-types";
class Dashboard extends Component {
  componentDidMount() {
    this.props.getAllProject();
  }
  render() {
    const { projects } = this.props.projects;
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectbutton />
              <br />
              <hr />
              {projects.map(project => (
                <Projectitem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  projects: PropTypes.object.isRequired,
  getAllProject: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(mapStateToProps, { getAllProject })(Dashboard);
