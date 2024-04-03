import React from "react";
import "./Product.css";
function Products() {
  return (
    <section>
      <div className="container">
        <h1 className="c1">Featured Products</h1>
        <div className="c">
          <a href="#">Stay on Trend</a>
          <a href="#">Latest Flagship</a>
          <a href="#">Enjoy the Outdoors</a>
          <a href="#">Gaming Essential</a>
        </div>
        <div className="c8">
          <div className="c2">
            <img
              src="https://i02.appmifile.com/686_operator_global/03/04/2024/eb1caad847c2d7ef32a81c937ae1f844.jpg?thumb=1&w=660&f=webp&q=85"
              alt=""
            />
            <div className="c4">
              <img
                className="c3"
                src="https://i02.appmifile.com/164_operator_global/26/02/2024/9bd97e8a9caee91a33328c4f84a985f9.svg"
                alt=""
              />
              <h4>Xiaomi Fan Festival Special Edition</h4>
              <p>Limited availability | Mystic Silver</p>
              <button>Learn more</button>
            </div>
          </div>
          <div className="c5">
            <div className="c6">
              <img
                src="https://i02.appmifile.com/646_operator_global/01/04/2024/c520778e7d02c9d02e6a8b6f33734701.png?thumb=1&w=280&f=webp&q=85"
                alt=""
              />
              <img
                className="c7"
                src="https://i02.appmifile.com/463_operatorx_operatorx_opx/11/01/2024/e02e51cd6efb5f2282e6921128b2618a.png?thumb=1&w=160&f=webp&q=85"
                alt=""
              />
              <h1>Redmi Note 13 5G</h1>
              <p>Super-clear 108MP triple camera</p>
            </div>
            <div className="c6">
              <img
                src="https://i02.appmifile.com/646_operator_global/01/04/2024/c520778e7d02c9d02e6a8b6f33734701.png?thumb=1&w=280&f=webp&q=85"
                alt=""
              />
              <img
                className="c7"
                src="https://i02.appmifile.com/838_operatorx_operatorx_opx/11/01/2024/202caa28b52da75dbdcdd13564b89913.png?thumb=1&w=160&f=webp&q=85"
                alt=""
              />
              <h1>Redmi Watch 4</h1>
              <p>Ultra-large 1.97" AMOLED display</p>
            </div>
            <div className="c6">
              <img
                src="https://i02.appmifile.com/646_operator_global/01/04/2024/c520778e7d02c9d02e6a8b6f33734701.png?thumb=1&w=280&f=webp&q=85"
                alt=""
              />
              <img
                className="c7"
                src="https://i02.appmifile.com/413_operatorx_operatorx_opx/11/01/2024/c4dc8c66faa8d0a2f98de1d8657dd8c3.png?thumb=1&w=160&f=webp&q=85"
                alt=""
              />
              <h1>Redmi Buds 5 Pro</h1>
              <p>High-resolution, Hi-Fi sound quality</p>
            </div>
            <div className="c6">
              <img
                src="https://i02.appmifile.com/646_operator_global/01/04/2024/c520778e7d02c9d02e6a8b6f33734701.png?thumb=1&w=280&f=webp&q=85"
                alt=""
              />
              <img
                className="c7"
                src="https://i02.appmifile.com/735_operatorx_operatorx_opx/11/01/2024/34bf6081e4d7666038873f17cd02eb84.png?thumb=1&w=160&f=webp&q=85"
                alt=""
              />
              <h1>Redmi Buds 5</h1>
              <p>AI noise reduction for calls</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Products;
