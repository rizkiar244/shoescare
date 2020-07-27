import Layout from '../layouts/layout';

 export default function Service(){
  return(
      <Layout>
          <div className="container">
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
      <img src="/images/4.jpg" class="d-block w-100" alt="..."/>
  </div>
  </div>
</div>
<ul class="list-group">
  <center><li class="list-group-item  font-weight-bold active">Our Service</li></center>
  <li class="list-group-item">Repaint</li>
  <li class="list-group-item">Fast Cleaning</li>
  <li class="list-group-item">Deep Cleaning</li>
  <li class="list-group-item">Repair & Reglue</li>
  <li class="list-group-item">Unyellowing</li>
</ul>
</div>
</Layout>
  )
 }