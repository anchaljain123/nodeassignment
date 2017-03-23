/**
 * Created by anchal on 21/3/17.
 */

import './App.css';
import todo3 from './images/todo3.jpg'
import todo1 from './images/todo1.jpg'
import React  from    'react'


const Home =(props)=>(
    <div class="container">
        <br/>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" role="listbox">
                    <div class="item active" style={{marginLeft:'45px'}}>
                        <img src={todo3} alt="todo3" />
                    </div>

                </div>
            </div>

        <h3>
            Keep your tasks, lists and reminders in one place, always in-sync across all your devices
        </h3>




    </div>

                );

export default Home;

