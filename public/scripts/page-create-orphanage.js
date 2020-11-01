const map = L.map("mapid").setView([-10.9159906, -37.0596967], 16);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remove icon
  marker && map.removeLayer(marker);
  //add icon layer
  marker = L.marker([lat, lng], { icon })
  .addTo(map)
});

//adicionar o campo de foto

function addPhoto() {
  const container = document.querySelector("#images");
  //pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //verificar se ta vazio, se sim, não adicionar ao container de images
  const input = newFieldContainer.children[0];

  if (input.value != "") {
    input.value = ""

      //adicionar o clone ao container de #imagens
      container.appendChild(newFieldContainer);
  }

}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    span.parentNode.children[0].value = ""

    return
  }
  span.parentNode.remove();
}

function toggleSelect(event) {
  document.querySelectorAll(".button-select button")
    .forEach((button) => {button.classList.remove("active")})

  const button = event.currentTarget;
  button.classList.add("active");

  const input = document.querySelector('[name="open_on_weekends"]')

  input.value = button.dataset.value
}

function validate(event){
  const needsLatAndLng = document.querySelector('.map-container input[name="lat"]')
  if(needsLatAndLng.value == ""){
  event.preventDefault()
  alert('Selecione um ponto no mapa.')
}
}