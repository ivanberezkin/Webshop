const navbarCreaterHTML = `  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container">
        <a href="main.html" class="navbar-brand">Webshop</a>
        <button
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-label="Expand Navigation"
        >
          <div class="navbar-toggler-icon"></div>
        </button>
        <div class="collapse navbar-collapse" id="nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="main.html" class="nav-link">Home</a>
            </li>
          </ul>

          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a href="cart.html" class="nav-link">
                <i class="bi bi-cart3"></i>
                <span id="cart-count" class="badge bg-secondary">0</span>
              </a>
            </li>
        </div>
      </div>
    </nav>`;

document.querySelector("#navbar").innerHTML = navbarCreaterHTML;
