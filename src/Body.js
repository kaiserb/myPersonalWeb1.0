import React from "react";

function Body() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Education:</h2>
          <p>SUNY Buffalo State Class of 2017</p>
          <a id="school" href="https://suny.buffalostate.edu/">
            <img
              height="70%"
              width="60%"
              alt="Buffalo State College"
              src="http://collegerelations.buffalostate.edu/sites/collegerelations.buffalostate.edu/files/uploads/Images/Logos%20Print/3.%20Crest%20Logo%20in%20Circle_CG9.jpg"
            />
          </a>
        </div>
        <div className="col">
          <h2 id="bio">Biography:</h2>
          <p id="bioPara">
            Hi my name is Mustapha Barrie I am a fairly recent college graduate.
            <br />
            I attended SUNY Buffalo State from 2013 to 2017. I was an Electrical
            Engineering major.
            <br />
            I got expose to programming when I took my C++ programming course,
            which was a great way to get started programming. I learn some key
            concept of computer science,
            <br /> such as: OOP, Stack, Que, heap.
            <br />I am a life long learner; I am always looking for something
            new to learn. Lastly, I enjoy collaborating with others to deliver.
          </p>
        </div>

        <div className="row">
          <div className="col">
            <h4>Technologies:</h4>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>React</li>
              <li>SQL</li>
              <li>C++</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
