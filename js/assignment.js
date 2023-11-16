const loadCardData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const result = await res.json();
    displayCards(result.data.tools);
}

const seeMoreBtn = document.getElementById("see-more-btn");
const sortByDateBtn = document.querySelector('#sort-by-date');
let showClicked = false;

const displayCards = cards => {
    const cardContainer = document.getElementById('card-container');

    firstSixCards = cards.slice(0, 6);
    firstSixCards.forEach(results => {
        const cardsDiv = document.createElement('div');
        cardsDiv.classList.add = ('col');
        cardsDiv.innerHTML = `
            <div class="card h-100 p-4">
                              <img src="${results.image}" class="card-img-top" lta="...">
                              <div class="card-body">
                                <h5 class="card-title">Features</h5>
                                <div class="card-text">
                                <ol><li>${results.features[0]}</li>
                                <li>${results.features[1]}</li>
                                <li>${results.features[2]}</li>
                                </ol>
                            </div>
                            
                              <hr>
                              <div  class="d-flex justify-content-between">
                              <div>
                              <h5 class="fw-bold mb-3">${results.name}</h5>
                              <div class = "d-flex">
                              <p><i class="fas fa-calendar-days me-3"></i></p>
                              <p>${results.published_in}</p>
                              </div>
                         
                              </div>
                               <div>
                               <button class = "mt-4 bg-danger-subtle rounded-circle border-white" data-bs-toggle="modal" data-bs-target="#cardDetailsModal" onclick ="loadCardDetailsData('${results.id}')">
                               <i class="fas fa-arrow-right text-danger ")></i>
                               </button>
                               </div>
                              </div>
                            
                            
            </div>
            `;
        cardContainer.appendChild(cardsDiv);

    });

    let remainingCards = cards.slice(6);

    seeMoreBtn.addEventListener("click", () => {
        showClicked = true;
        for (let i = 0; i < remainingCards.length; i++) {
            const cardsDiv = document.createElement('div');
            cardsDiv.classList.add = ('col');
            cardsDiv.innerHTML = `
    <div class="card h-100 p-4">
                      <img src="${remainingCards[i].image}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">Features</h5>
                        <div class="card-text">
                        <ol><li>${remainingCards[i].features[0]}</li>
                        <li>${remainingCards[i].features[1]}</li>
                        <li>${remainingCards[i].features[2]}</li>
                        </ol>
                    </div>
                    
                      <hr>
                      <div  class="d-flex justify-content-between">
                      <div>
                      <h5 class="fw-bold mb-3">${remainingCards[i].name}</h5>
                      <div class = "d-flex">
                      <p><i class="fas fa-calendar-days me-3"></i></p>
                      <p>${remainingCards[i].published_in}</p>
                      </div>
                 
                      </div>
                       <div>
                       <button class = "mt-4 bg-danger-subtle rounded-circle border-white " data-bs-toggle="modal" data-bs-target="#cardDetailsModal" onclick ="loadCardDetailsData('${remainingCards[i].id}')">
                       <i class="fas fa-arrow-right text-danger ")></i>
                       </button>
                       </div>
                      </div>
                    
                    
    </div>
    `;
            cardContainer.appendChild(cardsDiv);

        }
        seeMoreBtn.style.display = "none";
    });

    sortByDateBtn.addEventListener('click', () => {
        if (showClicked === true) {
            function compareDates(a, b) {
                const dateA = new Date(a.published_in);
                const dateB = new Date(b.published_in);
                return dateA - dateB;
            }
            cards.sort(compareDates);
            cardContainer.innerHTML = '';
            cards.forEach(results => {
                const cardsDiv = document.createElement('div');
                cardsDiv.classList.add = ('col');
                cardsDiv.innerHTML = `
                    <div class="card h-100 p-4">
                                      <img src="${results.image}" class="card-img-top" lta="...">
                                      <div class="card-body">
                                        <h5 class="card-title">Features</h5>
                                        <div class="card-text">
                                        <ol><li>${results.features[0]}</li>
                                        <li>${results.features[1]}</li>
                                        <li>${results.features[2]}</li>
                                        </ol>
                                    </div>
                                    
                                      <hr>
                                      <div  class="d-flex justify-content-between">
                                      <div>
                                      <h5 class="fw-bold mb-3">${results.name}</h5>
                                      <div class = "d-flex">
                                      <p><i class="fas fa-calendar-days me-3"></i></p>
                                      <p>${results.published_in}</p>
                                      </div>
                                 
                                      </div>
                                       <div>
                                       <button class = "mt-4 bg-danger-subtle rounded-circle border-white" data-bs-toggle="modal" data-bs-target="#cardDetailsModal" onclick ="loadCardDetailsData('${results.id}')">
                                       <i class="fas fa-arrow-right text-danger ")></i>
                                       </button>
                                       </div>
                                      </div>
                                    
                                    
                    </div>
                    `;
                cardContainer.appendChild(cardsDiv);
        
            });

        } else {
            function compareDates(a, b) {
                const dateA = new Date(a.published_in);
                const dateB = new Date(b.published_in);
                return dateA - dateB;
            }
            firstSixCards.sort(compareDates);
            cardContainer.innerHTML = '';
            firstSixCards.forEach(results => {
                const cardsDiv = document.createElement('div');
                cardsDiv.classList.add = ('col');
                cardsDiv.innerHTML = `
                    <div class="card h-100 p-4">
                                      <img src="${results.image}" class="card-img-top" lta="...">
                                      <div class="card-body">
                                        <h5 class="card-title">Features</h5>
                                        <div class="card-text">
                                        <ol><li>${results.features[0]}</li>
                                        <li>${results.features[1]}</li>
                                        <li>${results.features[2]}</li>
                                        </ol>
                                    </div>
                                    
                                      <hr>
                                      <div  class="d-flex justify-content-between">
                                      <div>
                                      <h5 class="fw-bold mb-3">${results.name}</h5>
                                      <div class = "d-flex">
                                      <p><i class="fas fa-calendar-days me-3"></i></p>
                                      <p>${results.published_in}</p>
                                      </div>
                                 
                                      </div>
                                       <div>
                                       <button class = "mt-4 bg-danger-subtle rounded-circle border-white" data-bs-toggle="modal" data-bs-target="#cardDetailsModal" onclick ="loadCardDetailsData('${results.id}')">
                                       <i class="fas fa-arrow-right text-danger ")></i>
                                       </button>
                                       </div>
                                      </div>
                                    
                                    
                    </div>
                    `;
                cardContainer.appendChild(cardsDiv);
        
            });

        }
    });


};

const loadCardDetailsData = async id => {
    const detailsDataUrl = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(detailsDataUrl);
    const detailsData = await res.json();
    displayCardDetails(detailsData.data);
    // console.log(detailsData.data);
}

const displayCardDetails = modalData => {
    console.log(modalData);
    const detailsInfoModal = document.getElementById('modal-body');
    detailsInfoModal.innerHTML = '';
    const detailsCardDiv = document.createElement('div');
    detailsCardDiv.classList.add('d-flex', 'justify-content-between');

    detailsCardDiv.innerHTML = `
    <div class="row">
    <div class="col-md-6">
        <div class="card">
            <div class="card-body bg-danger-subtle bg-opacity-10">
                <h5 class="card-title">${modalData.description}</h5>
                <div class="d-flex justify-content-around  align-items-center mb-4 mt-4">
                    <div class="border border-white shadow-sm ">${modalData.pricing[0].price}</div>
                    <div class="border border-white shadow-sm ">${modalData.pricing[1].price}</div>
                    <div class="border border-white shadow-sm">${modalData.pricing[2].price}</div>
                </div>

                <div class="d-flex justify-content-between">
                    <div>
                        <h5>Features</h5>
                        <p>
                        <ul>
                            <li>${modalData.features[1].feature_name}</li>
                            <li>${modalData.features[2].feature_name}</li>
                            <li>${modalData.features[3].feature_name}</li>
                        </ul>
                        </p>
                    </div>
                    <div>
                        <h5>Integration</h5>
                        <p>
                        <ul>
                            <li>${modalData.integrations[0]}</li>
                            <li>${modalData.integrations[1]}</li>
                            <li>${modalData.integrations[2]}</li>
                        </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card">
            <div class="card-body">
            <img src="${modalData.logo}" class="card-img-top" alt="...">
                <h5>${modalData.input_output_examples[0].input}</h5>
                <p class="card-text">${modalData.input_output_examples[0].output}</p>
            </div>
        </div>
    </div>
</div>
 `;
    detailsInfoModal.appendChild(detailsCardDiv);
}

loadCardData();