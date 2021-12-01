import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { SkillBar } from 'react-skills';
let progressInterval = null;
const MySkills = () => {
    const [progress, setProgress] = useState(0);
    const [progress1, setProgress1] = useState(0);

    useEffect(() => {
        progressInterval = setInterval(() => {
            setProgress(prev => prev + 1);
        }, 100);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            clearInterval(progressInterval);
        }
    }, [progress]);
    useEffect(() => {
        if (progress1 >= 80) {
            clearInterval(progressInterval);
        }
    }, [progress1]);
    return (
        <Container className="my-5">
            <div className="text-center">
                <h1 className="text-success my-5">My Skills</h1>
                <h3 className="text-success">What I know</h3>
            </div>
            <div className="row row-cols-lg-2">
                <div className="mb-3 my-skills d-flex align-items-center">
                    <div>
                        <h3>My creative skills & experiences.</h3>
                        <p>
                            I have always been more enthusiastic about learning. I have successfully completed learning HTML , CSS , JavaScript, Bootstrap,ReactJS. I have also worked on Backend Technologies.I have experience working with GitHub, Firebase, Visual Studio Code, CodePen and many more.
                        </p>
                        <button className="btn btn-success">Read more</button>
                    </div>
                </div>
                <div className="about-me">
                    <div className="m-5">
                        <h5 className="mb-3">HTML</h5>
                        <div className="progress mb-3" style={{ height: 30, width: "100%" }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${progress}%` }}>{progress}%</div>
                        </div>
                        <h5 className="mb-3">CSS</h5>
                        <div className="progress mb-3" style={{ height: 30, width: "100%" }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${progress - 10}%` }}>{progress - 10}%</div>
                        </div>
                        <h5 className="mb-3">JavaScript</h5>
                        <div className="progress mb-3" style={{ height: 30, width: "100%" }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${progress - 20}%` }}>{progress - 20}%</div>
                        </div>
                        <h5 className="mb-3">React</h5>
                        <div className="progress mb-3" style={{ height: 30, width: "100%" }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${progress - 40}%` }}>{progress - 40}%</div>
                        </div>
                        <h5 className="mb-3">MongoDB</h5>
                        <div className="progress mb-3" style={{ height: 30, width: "100%" }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${progress - 40}%` }}>{progress - 40}%</div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MySkills;