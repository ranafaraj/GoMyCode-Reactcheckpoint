 

function App() {
  return (
    
    <div id= "main"> 
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <a className="navbar-brand" href="#">Ranz palnet</a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
              <a className="nav-link" href="#">About us</a>
              <a className="nav-link" href="#">Contact us</a>
            </div>
           </div>
       </nav>
       
       <figure className="figure">
         <img src="/imgs/22.png" className="figure-img img-fluid rounded" alt="ranz"/> 
         <figcaption className="figure-caption"><h3>Welcome to Ranz's planet please register so we can decide if we want to let you in</h3></figcaption>
      </figure>
     
      <form>
       <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>

         <div class="form-group">
           <label for="exampleInputPassword1">Password</label>
           <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
         </div>

        <div class="form-check">
           <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
           <label class="form-check-label" for="exampleCheck1">Check me out</label>
         </div>
       <button type="submit" class="btn btn-primary">Submit</button>
      </form>

      <footer class="main-footer">
		<div class="inside-section">
			
			<p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
	
			www.RanzPlanet.com © 2020
		</div>
	</footer>

      
    </div>
  );
}

export default App;
