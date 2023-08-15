import "./Shop.css";

const Shop = () => {
  return (
    <div className="Shop">
      <ul>
        <li>
          <h2>Amazon</h2>
          <div className="link-container">
            <p>
              {" "}
              Order a{" "}
              <a href="https://www.amazon.com/Love-Dirt-Jill-Dudek/dp/057850085X/?_encoding=UTF8&pd_rd_w=hIHuX&content-id=amzn1.sym.ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_p=ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_r=131-2001276-2663424&pd_rd_wg=0FHsO&pd_rd_r=90e3b7c8-b449-4ace-9e85-40c736d61329&ref_=aufs_ap_sc_dsk">
                Hardcover
              </a>{" "}
              - $15.99
            </p>
            <p>
              Order a{" "}
              <a href="https://www.amazon.com/Love-Dirt-Jill-Dudek/dp/0692504621/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=">
                Softcover
              </a>{" "}
              - $9.99
            </p>
          </div>
        </li>
        <li>
          <h2>Barnes & Noble</h2>
          <div>
            <div className="link-container">
              <p>
                {" "}
                Order a{" "}
                <a href="https://www.barnesandnoble.com/w/for-the-love-of-dirt-jill-dudek/1131928360?ean=9780578500850">
                  Hardcover
                </a>{" "}
                - $20.99
              </p>
              <p>
                Order a{" "}
                <a href="https://www.barnesandnoble.com/w/for-the-love-of-dirt-jill-dudek/1131928360?ean=9780692504628">
                  Softcover
                </a>{" "}
                - $9.99
              </p>
            </div>
          </div>
        </li>
        <li>
          <h2>Google Shopping</h2>
          <div>
            <div className="link-container">
              <p>
                {" "}
                Order a{" "}
                <a href="https://www.google.com/shopping/product/13972305991039475740?q=for+the+love+of+dirt+book&prds=eto:8370713787097129660_0;13279482178165148536_0;6575565190824680365_1&sa=X&ved=0ahUKEwjYrKXf6a3tAhXbGs0KHRIhARYQ9pwGCAY">
                  Hardcover
                </a>{" "}
                - $20.99
              </p>
              <p>
                Order a{" "}
                <a href="https://www.google.com/shopping/product/4850809293413657164?q=for+the+love+of+dirt+book&prds=opd:13362513714767344403,">
                  Softcover
                </a>{" "}
                - $9.99
              </p>
            </div>
          </div>
        </li>
        <li>
          <h2>Bookshop.org</h2>
          <div>
            <div className="link-container">
              <p>
                {" "}
                Order a{" "}
                <a href="https://bookshop.org/p/books/for-the-love-of-dirt-jill-dudek/12033687?ean=9780578500850">
                  Hardcover
                </a>{" "}
                - $20.99
              </p>
            </div>
          </div>
        </li>
        <li>
          <h2>Walmart</h2>
          <div>
            <div className="link-container">
              <p>
                {" "}
                Order a{" "}
                <a href="https://www.walmart.com/ip/For-the-Love-of-Dirt-Hardcover-9780578500850/577611576?wmlspartner=wlpa&selectedSellerId=0&adid=22222222227000000000&wl0=&wl1=g&wl2=c&wl3=42423897272&wl4=pla-51320962143&wl5=9016921&wl6=&wl7=9016971&wl8=&wl9=pla&wl10=8175035&wl11=online&wl12=577611576&veh=sem&gclid=CjwKCAjwhOD0BRAQEiwAK7JHmNBsyb1rtuxJy3pzMpKN2oCaRsN2WZhRcIPVpkDtnGpCUZTvE3FN9RoC--YQAvD_BwE">
                  Hardcover
                </a>{" "}
                - $15.99
              </p>
            </div>
          </div>
        </li>
        <li>
          <h2>triftbooks</h2>
          <div>
            <div className="link-container">
              <p>
                {" "}
                Order a{" "}
                <a href="https://www.thriftbooks.com/w/for-the-love-of-dirt_jill-dudek/21737545/#edition=23574523&idiq=33298197">
                  Hardcover
                </a>{" "}
                - $18.02
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Shop;
