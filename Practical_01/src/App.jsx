import React from 'react';
import './App.css';
function WorkshopCard({title,mentor,level}){return <article className="workshop"><div className="badge">{level}</div><h2>{title}</h2><p>Mentor: {mentor}</p><button>View Workshop</button></article>}
function Header(){return <header><span className="logo">SkillNest</span><span>Weekend Workshops</span></header>}
export default function App(){const workshops=[{title:'UI Sketching',mentor:'Riya Shah',level:'Beginner'},{title:'Node Basics',mentor:'Arjun Mehta',level:'Starter'},{title:'Git Essentials',mentor:'Neel Patel',level:'Easy'}];return <main><Header/><section className="hero"><p className="eyebrow">LEARN • BUILD • SHARE</p><h1>Pick a workshop for this weekend</h1><p>Reusable React components keep every workshop card consistent.</p></section><section className="grid">{workshops.map((w,i)=><WorkshopCard key={i}{...w}/>)}</section></main>}
