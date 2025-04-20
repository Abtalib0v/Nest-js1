const productBoxes = document.querySelector("#pro-cards");

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000
});

const getApiData = async (url) => {
  const promise = await axiosInstance.get(url);
  return promise.data;
};

const renderCards = (data) => {
  return  `<div class="cards">
                                       <div class="left">
                                           <div class="image">
                                             <img class="imageone" src=${data.images.main} alt="">
                                              <img class="imagethree" src=${data.images.hover} alt="">
                                          </div>
                                      </div>
                                       <div class="right">
                                           <div class="text">
                                               <h1>${data.title}</h1>
                                               <h2>${data.subtitle}</h2>
                                               <div class="pro_rate">
                                <div class="pro_rating" style="${data.rating};"></div>
                            </div>
                                               <p>${data.description}
                                               </p>
                                               <div class="price">
                                                   <h3>${data.price}</h3>
                                                   <span>${data.oldPrice}</span>
                                               </div>
                                               <div class="card_button">
                                                   <button><svg xmlns="http://www.w3.org/2000/svg"
                                                          viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                                                          <path fill="#ffffff"
                                                              d="M528.1 301.3l47.3-208C578.8 78.3 567.4 64 552 64H159.2l-9.2-44.8C147.8 8 137.9 0 126.5 0H24C10.7 0 0 10.7 0 24v16c0 13.3 10.7 24 24 24h69.9l70.2 343.4C147.3 417.1 136 435.2 136 456c0 30.9 25.1 56 56 56s56-25.1 56-56c0-15.7-6.4-29.8-16.8-40h209.6C430.4 426.2 424 440.3 424 456c0 30.9 25.1 56 56 56s56-25.1 56-56c0-22.2-12.9-41.3-31.6-50.4l5.5-24.3c3.4-15-8-29.3-23.4-29.3H218.1l-6.5-32h293.1c11.2 0 20.9-7.8 23.4-18.7z" />
                                                      </svg>Add to Card
                                                  </button>
                                                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                                          viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                                                          <path fill="#7e7e7e"
                                                              d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z" />
                                                      </svg>
                                                      Add Compare</a>
                                              </div>
  
                                          </div>
  
                                      </div>
                                      <div class="badges">
                                          <span class="hot" style="background-color: ${data.value}">${data.isHot}</span>
                                      </div>
                                  </div>
  ` 
};
getApiData("product").then((data) => {
  data?.forEach((cards) => {
    return (productBoxes.innerHTML += renderCards(cards));
  });
});