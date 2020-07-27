import React, {Component} from 'react';
import Link from 'next/link';
import Layout from '../layouts/layout';

class Landingpage extends Component{
  render(){
    return (
      <Layout>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="/images/7.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/6.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/9.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
<br>
</br>
<div class="card-group">
  <div class="card">
    <img src="/images/1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">How To Order</h5>
      <p class="card-text">Isi Form Order dengan Klik Tombol di bawah ini</p>
     <a  href="/daftar" className="dropdown-item active"><i class="fas fa-sign-out-alt mr-2"></i>Order</a>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="/images/2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">ShoesCare</h5>
      <p class="card-text">Selamat datang di website Paijo Shoescare. Salah satu jasa perawatan dan service sepatu yang ada diBanyuwangi.
Paijo Shoescare melakukan perawatan sepatu secara proresional. Serta menggunakan alat dan bahan premium untuk perawatan sepatu, baik produk lokal maupun produk luar negri</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="/images/3.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Open Schedule</h5>
      <p class="card-text">We Are Open
Senin-Minggu 10.00 WIB - 21.00 WIB</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
       
      </Layout>
    );
  }
}

export default Landingpage;