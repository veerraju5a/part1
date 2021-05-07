import React from 'react'

const Header = ({props}) => {
    return (
        <h1>{props}</h1>
    );
};

const Part = ({part}) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    );
};

const Content = ({props}) => {
    return (
        <div>
            <Part part={props[0]} />
            <Part part={props[1]} />
            <Part part={props[2]} />
        </div>
    );
};

const Total = ({props}) => {
    return (
        <p>Number of exercises {props[0].exercises + props[1].exercises + props[2].exercises}</p>
    );
};

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
            name: 'Fundamentals of React',
            exercises: 10
            },
            {
            name: 'Using props to pass data',
            exercises: 7
            },
            {
            name: 'State of a component',
            exercises: 14
            }
        ]
    };

    return (
        <div>
            <Header props={course.name} />
            <Content props={course.parts} />
            <Total props={course.parts} />
        </div>
    );
};



export default App