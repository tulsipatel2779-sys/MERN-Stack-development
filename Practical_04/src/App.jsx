import React from'react';import{Routes,Route,NavLink}from'react-router-dom';import'./App.css';
function Home(){return <section><p className="tag">ONE-DAY GUIDE</p><h1>Explore Ahmedabad</h1><p>Simple routes for a relaxed city day.</p></section>}
function Places(){return <section><h1>Places</h1><div className="cards"><div>Riverfront</div><div>Old City Pols</div><div>Adalaj Stepwell</div></div></section>}
function Plan(){return <section><h1>Day Plan</h1><ul><li>09:00 — Breakfast</li><li>11:00 — Heritage walk</li><li>15:00 — Riverfront</li><li>18:30 — Evening snacks</li></ul></section>}
function About(){return <section><h1>About</h1><p>This SPA demonstrates client-side routing with separate page components.</p></section>}
export default function App(){return <div className="shell"><nav><b>CityDay</b><div><NavLink to="/">Home</NavLink><NavLink to="/places">Places</NavLink><NavLink to="/plan">Plan</NavLink><NavLink to="/about">About</NavLink></div></nav><main><Routes><Route path="/" element={<Home/>}/><Route path="/places" element={<Places/>}/><Route path="/plan" element={<Plan/>}/><Route path="/about" element={<About/>}/></Routes></main></div>}
