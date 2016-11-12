
  function replaceParkingInfo(event) {
    event.preventDefault();
    var changingContentDiv = document.getElementById('changingContent');

    while(changingContentDiv.hasChildNodes()) {
      changingContentDiv.removeChild(changingContentDiv.lastChild);
    }

    var newParagraph1 = document.createElement('p');
    var newParagraph1Text = document.createTextNode("Ample downtown parking is available within close proximity to The Orlando Landing. Options include The Landing's own lot immediately east of the property, garage, metered street and peripheral parking.");
    newParagraph1.appendChild(newParagraph1Text);

    changingContentDiv.appendChild(newParagraph1);

    var newParagraph2 = document.createElement('p');
    var newParagraph2Text = document.createTextNode("Complete parking information and directions are available at ");
    newParagraph2.setAttribute('class','italicized');

    var newAnchor = document.createElement('a');
    var newAnchorText = document.createTextNode("Directions + Parking");
    newAnchor.appendChild(newAnchorText);
    newAnchor.setAttribute('href','http://www.downtownorlando.com/getting-around/parking/#.WCdF63dFRug');

    newParagraph2.appendChild(newParagraph2Text);
    newParagraph2.appendChild(newAnchor);

    changingContentDiv.appendChild(newParagraph2);
  }

  function replaceVendor(event) {
    event.preventDefault();

    var changingContentDiv = document.getElementById('changingContent');

    while(changingContentDiv.hasChildNodes()) {
      changingContentDiv.removeChild(changingContentDiv.lastChild);
    }

    var newH2 = document.createElement('h2');
    var newH2Anchor = document.createElement('a');
    var newH2AnchorText = document.createTextNode("Dipper Dan's");
    newH2Anchor.appendChild(newH2AnchorText);
    newH2Anchor.setAttribute('href','https://www.yelp.com/biz/dipper-dan-honeoye-falls');
    newH2.appendChild(newH2Anchor);

    changingContentDiv.appendChild(newH2);

    var newParagraph1 = document.createElement('p');
    var newParagraph1Text = document.createTextNode("Ice cream shop with all the fixins’, fun foods, nachos and more!");
    newParagraph1.appendChild(newParagraph1Text);

    changingContentDiv.appendChild(newParagraph1);

    var newParagraph2 = document.createElement('p');
    newParagraph2.setAttribute('class','italicized');

    var newAnchor = document.createElement('a');
    var newAnchorText = document.createTextNode("View more Dining + Nightlife");
    newAnchor.appendChild(newAnchorText);
    newAnchor.setAttribute('href','http://www.visitorlando.com/things-to-do/nightlife-and-entertainment/');

    newParagraph2.appendChild(newAnchor);

    changingContentDiv.appendChild(newParagraph2);
  }

  function replaceHotels(event) {
    event.preventDefault();
    var changingContentDiv = document.getElementById('changingContent');

    while(changingContentDiv.hasChildNodes()) {
      changingContentDiv.removeChild(changingContentDiv.lastChild);
    }

    var newParagraph1 = document.createElement('p');
    var newParagraph1Text = document.createTextNode("Many hotels are located just blocks away and are in walking distance for many.");
    newParagraph1.appendChild(newParagraph1Text);

    changingContentDiv.appendChild(newParagraph1);

    var newParagraph2 = document.createElement('p');
    var newParagraph2Text = document.createTextNode("Complete hotel reservations can be found at ");
    newParagraph2.setAttribute('class','italicized');

    var newAnchor = document.createElement('a');
    var newAnchorText = document.createTextNode("Hotel Services");
    newAnchor.appendChild(newAnchorText);
    newAnchor.setAttribute('href','https://www.hotels.com/de1404711/hotels-orlando-florida/');

    newParagraph2.appendChild(newParagraph2Text);
    newParagraph2.appendChild(newAnchor);

    changingContentDiv.appendChild(newParagraph2);
  }

  function replaceGroups(event) {
    event.preventDefault();
    var changingContentDiv = document.getElementById('changingContent');

    while(changingContentDiv.hasChildNodes()) {
      changingContentDiv.removeChild(changingContentDiv.lastChild);
    }

    var newParagraph1 = document.createElement('p');
    var newParagraph1Text = document.createTextNode("Events can be held in many of the hotels or the Orange County Convention Center.");
    newParagraph1.appendChild(newParagraph1Text);

    changingContentDiv.appendChild(newParagraph1);

    var newParagraph2 = document.createElement('p');
    var newParagraph2Text = document.createTextNode("Orange County Convention Center reservations can be found at ");
    newParagraph2.setAttribute('class','italicized');

    var newAnchor = document.createElement('a');
    var newAnchorText = document.createTextNode("Orange County Convention Center Booking");
    newAnchor.appendChild(newAnchorText);
    newAnchor.setAttribute('href','https://www.occc.net');

    newParagraph2.appendChild(newParagraph2Text);
    newParagraph2.appendChild(newAnchor);

    changingContentDiv.appendChild(newParagraph2);
  }

  function init() {
    // this stuff runs after the page finishes loading
    //replaceChangingContent();
    var parkingInfoAnchor = document.getElementById('parkingInfoAnchor');
    parkingInfoAnchor.addEventListener('click',replaceParkingInfo,false);
    var vendorAnchor = document.getElementById('vendorAnchor');
    vendorAnchor.addEventListener('click',replaceVendor,false);
    var hotelsNearbyAnchor = document.getElementById('hotelsNearbyAnchor');
    hotelsNearbyAnchor.addEventListener('click',replaceHotels,false);
    var groupsEventsAnchor = document.getElementById('groupsEventsAnchor');
    groupsEventsAnchor.addEventListener('click',replaceGroups,false);
  }

  window.addEventListener('load',init,false);
