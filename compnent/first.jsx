import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,{ Component } from "react";
import img from 'image/me.jpg';
export default class First extends React.component{
    render(){
      return(
      <div  className='first2'>
          <div className='first1'>
            <img src={img}  alt={ahmed}/>
            <div  className='w3-display-bottommiddle w3-hide-small'><h2 >Ahmed M. Allam</h2></div>
          </div>
          <table>
            <tr>
              <th><img src={image/j.png}  alt={j}/></th>
              <th>Back end</th>
            </tr>
            <tr>
              <td><img src={image/h.png}  alt={h}/></td>
              <td>Egypt,menofia</td>
            </tr>
            <tr>
              <td><img src={image/e.png}  alt={e}/></td>
              <td>ahmedmohamedallam230@gmail.com</td>
            </tr>
            <tr>
              <td><img src={image/p.png}  alt={p}/></td>
              <td>+201014782114</td>
           </tr>
          </table>
          <hr/><br/>
          <table>
            <tr>
              <th><img src={image/s.png}  alt={s}/></th>
              <th>Skills</th>
            </tr>
          </table>
          <p>HTML</p>
            <div  className='main'> 
              <div id="sub1">97%
            </div></div><br/>        
          <p>CSS</p>
            <div  className='main'> 
              <div id="sub2">90%
            </div></div><br/>
          <p>JAVASCRIPT</p>
            <div  className='main'> 
              <div id="sub3">70%</div>
            </div>
          <br/>
          <table>
            <tr>
              <th><img src={image/l.png}  alt={l}/></th>
              <th>Languages</th>
            </tr>
          </table>
          <p>Arabic</p>
          <div  className='main'> 
            <div id="sub4"></div><br/>
          </div><br/>
          <p>English</p>
          <div  className='main'> 
            <div id="sub5"></div>
          </div><br/>
          <p>French</p>
          <div  className='main'> 
            <div id="sub6"></div>
          </div>
          <br/>
      </div>
      )}
  }