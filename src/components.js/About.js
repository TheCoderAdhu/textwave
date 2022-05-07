import React from "react";

function About(props) {
  return (
    <div className="accordion container my-5" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            AboutMe
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              <strong>Hello I Am Ashirwad</strong> I am now going to 14 and I
              know languages like HTML CSS JAVASCRIPT C and little bit of PYTHON
              I started my journey of web development in november 17nt 2021 till
              now mentor was one and only CodeWithHarry who thought all this
              concept to me and I can surely tell that my favourie channel is
              that only. If any other person also want to learn coding I will
              recomend that channel only.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            AboutWebsite
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classNamees that we use to style each element. These classNamees
            control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within , though the transition does limit
            overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            AboutReact
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              <strong> React.js is an open-source JavaScript library </strong>
              that is used for building user interfaces specifically for
              single-page applications. It’s used for handling the view layer
              for web and mobile apps. React also allows us to create reusable
              UI components. React was first created by Jordan Walke, a software
              engineer working for Facebook. React first deployed on Facebook’s
              newsfeed in 2011 and on Instagram.com in 2012. React allows
              developers to create large web applications that can change data,
              without reloading the page. The main purpose of React is to be
              fast, scalable, and simple. It works only on user interfaces in
              the application. This corresponds to the view in the MVC template.
              It can be used with a combination of other JavaScript libraries or
              frameworks, such as Angular JS in MVC.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
