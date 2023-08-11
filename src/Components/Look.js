import React from 'react'

function Look() {
  return (
    <div>
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i03.appmifile.com/535_operator_in/08/08/2023/021847bb270aa3644ceb4e5bf751d826.jpg?f=webp" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Redmi Note 12 5G</h5>
        <p>Now Available in Sunrise Gold</p>
        <button type="button" class="btn btn-warning">Buy Now</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i03.appmifile.com/728_operator_in/05/08/2023/fbecd7cbf1212fd4ab3ce250651b3f74.jpg?f=webp" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Redmi Note 12 Pro</h5>
        <p>All New 12GB RAM Variant</p>
        <button type="button" class="btn btn-warning">Buy Now</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i03.appmifile.com/985_operator_in/08/08/2023/4b33fae88eb4dc0041eab1d7f7f83b56.jpg?f=webp" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Redmi 12</h5>
        <p>Biggest Display</p>
        <button type="button" class="btn btn-warning">Buy Now</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Look