import React from "react";
import Image1 from "./thumbs/lamp.png";
import Image2 from "../Images/vecteezy_modern-living-room-design-illustration-ai-generative_23902309.jpg";
import Image3 from "./thumbs/triangle-wooden-table-on-white-background-close-up-PKFQZSQ-pd1o8lv0mhp9e9ih6kubtjqsawxilc5p1xqo6vlwy8.png";
import Image4 from "./thumbs/nightstand.png";
import Image5 from "./09/armchair-isolated-on-white-background-3d-rendering-P9MJ7CJ-300x300.png";
import Image6 from "./09/three-seats-cozy-grey-sofa-PU2KRQE-300x300.png";
import Image7 from "./09/wooden-table-on-white-background-P6CQMJC-300x300.png";

function Categories() {
  return (
    <div>
      <div className="categories">
        <h3 className="categoryMessage">All Categories</h3>
        <div className="catImages">
          <div class="c">
            <a href="beds.html">
              <div class="category-icon">
                <img src={Image1} alt="beds" class="img-responsive" />
              </div>
              <span class="category-title">Beds</span>
            </a>
          </div>
          <div class="c">
            <a href="beds.html">
              <div class="category-icon">
                <img src={Image3} alt="beds" class="img-responsive" />
              </div>
              <span class="category-title">BedSide Tables</span>
            </a>
          </div>
          <div class="c">
            <a href="beds.html">
              <div class="category-icon">
                <img src={Image4} alt="beds" class="img-responsive" />
              </div>
              <span class="category-title">Sofas</span>
            </a>
          </div>
          <div class="c">
            <a href="beds.html">
              <div class="category-icon">
                <img src={Image6} alt="beds" class="img-responsive" />
              </div>
              <span class="category-title">Drawers</span>
            </a>
          </div>
          <div class="c">
            <a href="beds.html">
              <div class="category-icon">
                <img src={Image5} alt="beds" class="img-responsive" />
              </div>
              <span class="category-title">ArmChairs</span>
            </a>
          </div>
          <div class="c">
            <a href="beds.html">
              <div class="category-icon">
                <img src={Image7} alt="beds" class="img-responsive" />
              </div>
              <span class="category-title">Mini Tables </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
