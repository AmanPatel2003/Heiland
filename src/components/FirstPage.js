import React from 'react'
import './style.css'

const Box = ({ title, content }) => {
	return (
	  <div className="box">
		<h2>{title}</h2>
		<p>{content}</p>
	  </div>
	);
  };
export default function FirstPage() {
  return (
	<>
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
	<div class="container-fluid">
	<a class="navbar-brand" href="#">
	<img src="https://m.media-amazon.com/images/I/61it9ljiKqL.jpg" alt="" width="60" height="60" style={{ marginRight: "10px"}} />HEILAND</a>
	  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav me-auto mb-2 mb-lg-0">
		<li class="nav-item">
          <a class="nav-link" href="#">Product</a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="#">Company</a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="#">Learn</a>
        </li>
		  <li class="nav-item">
          <a class="nav-link" href="#">Run</a>
        </li>
		</ul>
		  <button class="btn" type="submit">Where To Buy</button>
	  </div>
	</div>
  </nav>
  <div className='container'>
		<h1 className='h11'>THE GOLD STANDARDS IN</h1>
		<h1 className='h12'>VITAMINS</h1>
		<p>For 75 years solgar has been commited to quality.</p>
		<p>Health,and well-being.Our mission is to create the</p>
		<p>Finest nutritional supplements in small batches.</p>
		<p>made possibale through tireless research,using only</p>
		<p className='p1'>the Finest raw materials.</p>
		<button class="btn2" type="submit">BROWSE PRODUCTS</button>
  </div>
 <br />
 <br />
 <br />
 <br />

  <div className='body11'>
	<h1>INNOVAVITE PRODUCTS MADE WITH YOU</h1>
	<p>As a gold standard in vitamins , solgar is commited to creation of unique bjdsf sfhshfhsfhs shfhsfhsvh bfskjdfskabfhadbskj dhsfkhas</p>
	<p>As a gold standard in vitamins , solgar is commited to creation of unique bjdsf sfhshfhsfhs jkfjskdjk jfdbsdbgjkd hsfhbsfkhas</p>
	<div className="box-container">
        <Box
          title="Box 1"
          content="Content of Box 1"
        />
        <Box
          title="Box 2"
          content="Content of Box 2"
        />
        <Box
          title="Box 3"
          content="Content of Box 3"
        />
      </div>

  </div>
  </>
  )
  
}
