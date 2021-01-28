import React from "react";
import id from "./id.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitterSquare,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="cover-container d-flex w-100 p-3 mx-auto flex-column ">
      <header className="mb-4">
        <div>
          <h3 className="float-md-start mb-0 text-center">Jicking</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Projects
            </a>
            <a className="nav-link" href="#">
              Posts
            </a>
            <a className="nav-link" href="#">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="px-3 text-center">
        <div className="text-center ">
          <img src={id} className="rounded-circle profile-id" alt="..." />
        </div>
        <h1>Jicking Bebiro</h1>
        <p className="lead ">
          I'm a Full Stack Web Developer from PH who loves OSS.
          <br />I make art and games using{" "}
          <a href="https://krita.org/" className="font-weight-bold">
            KRITA
          </a>{" "}
          and{" "}
          <a href="https://godotengine.org/" className="font-weight-bold">
            GODOT
          </a>{" "}
          too.
          <br />
          Connect with me:
        </p>
        <p className="lead">
          <a
            href="https://twitter.com/jicking"
            className="btn btn-lg btn-secondary fw-bold border-white bg-white mx-2"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
          <a
            href="https://github.com/jicking"
            className="btn btn-lg btn-secondary fw-bold border-white bg-white mx-2"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/jicking/"
            className="btn btn-lg btn-secondary fw-bold border-white bg-white mx-2"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://drive.google.com/file/d/1ViCMvwd8lf7fJXCWJ351Y_1LamjXLLhI/view?usp=sharing"
            className="btn btn-lg btn-secondary fw-bold border-white bg-white mx-2"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFilePdf} />
          </a>
        </p>
      </main>

      <footer className="mt-auto text-white-50 text-center">
        <p>
          Cover template for
          <a href="https://getbootstrap.com/" className="text-white">
            Bootstrap
          </a>
          , by{" "}
          <a href="https://twitter.com/mdo" className="text-white">
            @mdo
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
