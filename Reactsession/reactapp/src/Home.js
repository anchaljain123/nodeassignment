import logo from './logo.svg';
import './App.css';
import React  from    'react'


const Home =(props)=>( //routing props like match etc //1st arg is props in => fn
    <div>
        {props.name}
        Home Component
    </div>
);

export default Home;

