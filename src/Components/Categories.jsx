import React from "react";
import Image1 from "../Images/products/beds/bartlett2.jpg";
import Image2 from "../Images/vecteezy_modern-living-room-design-illustration-ai-generative_23902309.jpg";
import Image3 from "../Images/products/bedsidetables/baker2.jpg";
import Image4 from "../Images/products/sofas/cinsofa2.jpg";
import Image5 from "../Images/products/thumlime/armchair.jpg";
import Image6 from "../Images/products/thumlime/chestofdrawers.jpg";
import Image7 from "../Images/products/thumlime/centretables.jpg";

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
