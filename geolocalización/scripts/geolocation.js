let mapPergamino, mapRosario, markerOrigin, markerDestination;
let isOriginValid = false,
  isDestinationValid = false;

function initializeAutocomplete() {
  const originInput = document.getElementById("origin");
  const destinationInput = document.getElementById("destination");

  new google.maps.places.Autocomplete(originInput);
  new google.maps.places.Autocomplete(destinationInput);
}

document.addEventListener("DOMContentLoaded", initializeAutocomplete);

document
  .getElementById("verify-origin")
  .addEventListener("click", async function () {
    const origin = document.getElementById("origin").value;
    try {
      const originCoordinates = await getGeocode(origin);
      displayMap("origin", originCoordinates);
    } catch (error) {
      alert("Error with the origin address.");
    }
  });

document
  .getElementById("verify-destination")
  .addEventListener("click", async function () {
    const destination = document.getElementById("destination").value;
    try {
      const destinationCoordinates = await getGeocode(destination);
      displayMap("destination", destinationCoordinates);
    } catch (error) {
      alert("Error with the destination address.");
    }
  });

async function getGeocode(address) {
  const apiKey = "AIzaSyBuTDAZIXhp6lfMyK7gwoTtsawmLjKx04s"; // Replace with your API key
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch geocode data.");
  }

  const data = await response.json();
  if (data.status !== "OK") {
    throw new Error(data.error_message || "No results found.");
  }

  return data.results[0].geometry.location;
}

function displayMap(type, coords) {
  const mapId = type === "origin" ? "map-pergamino" : "map-rosario";
  const radioButtonsId =
    type === "origin" ? "origin-radio-buttons" : "destination-radio-buttons";

  // Show the map
  document.getElementById(mapId).style.display = "block";
  document.getElementById(radioButtonsId).style.display = "block";

  const center = coords;
  const mapOptions = {
    center: center,
    zoom: 18,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    draggable: false,
    disableDefaultUI: true,
  };

  const map = new google.maps.Map(document.getElementById(mapId), mapOptions);
  const marker = new google.maps.Marker({
    position: coords,
    map: map,
    title: type === "origin" ? "Origin" : "Destination",
  });

  map.setCenter(coords); // Ensures the map is centered on the marker
  map.setZoom(18);

  if (type === "origin") {
    markerOrigin = marker;
  } else {
    markerDestination = marker;
  }

  document.getElementById("submit").disabled = !(
    isOriginValid && isDestinationValid
  );
}

document
  .querySelectorAll('input[name="origin-validation"]')
  .forEach((radio) => {
    radio.addEventListener("change", function () {
      isOriginValid = this.value === "true";
      document.getElementById("submit").disabled = !(
        isOriginValid && isDestinationValid
      );
    });
  });

document
  .querySelectorAll('input[name="destination-validation"]')
  .forEach((radio) => {
    radio.addEventListener("change", function () {
      isDestinationValid = this.value === "true";
      document.getElementById("submit").disabled = !(
        isOriginValid && isDestinationValid
      );
    });
  });

document
  .getElementById("address-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (isOriginValid && isDestinationValid) {
      const origin = document.getElementById("origin").value;
      const destination = document.getElementById("destination").value;
      const originData = { address: origin, validated: isOriginValid };
      const destinationData = {
        address: destination,
        validated: isDestinationValid,
      };

      // Submit data to the database or API
      console.log("Sending data:", originData, destinationData);
    } else {
      alert("Please confirm both addresses before submitting.");
    }
  });
