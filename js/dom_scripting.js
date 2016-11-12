  window.onload = function()
  {
    // your JavaScript goes here
    // http://stackoverflow.com/questions/14094697/javascript-how-to-create-new-div-dynamically-change-it-move-it-modify-it-in

    // http://stackoverflow.com/questions/9422974/createelement-with-id
    // Create new element to have all other itmes go into then declare its id
    var newDiv = document.createElement('div');
    newDiv.setAttribute("id","newWrapper");
    // append to the screen
    document.getElementById('google').appendChild(newDiv);
    //insertbefore()

    // Create new element to pad around the newWrapper id
    var paddingDiv = document.createElement('div');
    paddingDiv.setAttribute("id","newWrapperPadding");
    // append to the screen
    document.getElementById('newWrapper').appendChild(paddingDiv);

    // http://stackoverflow.com/questions/12287856/insert-image-object-into-html
    // Append the image to the newWrapper div
    var img = new Image();
    img.setAttribute("id","proPic");
    img.setAttribute("alt","Profile Pic");
    img.setAttribute("width", "50px");
    img.setAttribute("height", "50px");
    img.setAttribute("style", "padding-right:10px; float:left");
    var pic = document.getElementById('newWrapperPadding');
    pic.appendChild(img);
    img.src = 'img/profilePic.jpg';

    // http://stackoverflow.com/questions/1390319/how-do-i-add-textboxes-dynamically-in-javascript
    // Create an input type dynamically
    var element = document.createElement("input");
    // Assign different attributes to the element
    element.setAttribute("type", "text");
    element.setAttribute("value", "");
    element.setAttribute("name", "Test Name");
    element.setAttribute("style", "width:470px; height:60px; border: 2px solid #47658f;");
    // Where the text box will be appended
    var foo = document.getElementById("newWrapperPadding");
    // Append the element in page (in span)
    foo.appendChild(element);

    // Create new div section for bottom items
    var bottomDiv = document.createElement('div');
    bottomDiv.setAttribute("id","bottomWrapper");
    // append to the screen
    document.getElementById('newWrapper').appendChild(bottomDiv);

    // New image of google logo
    var googleImg = new Image();
    googleImg.setAttribute("id","googlePic");
    googleImg.setAttribute("alt","Google Pic");
    googleImg.setAttribute("width", "20px");
    googleImg.setAttribute("height", "20px");
    googleImg.setAttribute("style", "padding-left:10px; padding-top:30px");
    var googlePic = document.getElementById('bottomWrapper');
    googlePic.appendChild(googleImg);
    googleImg.src = 'img/03-google.png';

    // New p tag and text for google data
    var googleText = document.createElement('span');
    googleText.setAttribute("id","googleText");
    googleText.setAttribute("style", "display:inline; padding-left:4px");
    var text = document.createTextNode("google reader using jonfriskics@gmail.com");
    googleText.appendChild(text);
    document.getElementById('bottomWrapper').appendChild(googleText);

    // http://www.w3schools.com/jsref/met_document_createelement.asp
    // New p tag and text for right button data
    var buttonText = document.createElement('span');
    buttonText.setAttribute("style", "display:inline; padding-left:140px");
    // Create the actual button element
    var buttonElement = document.createElement("button");
    buttonElement.setAttribute("id","buttonElement");
    // Create a text node
    var postText = document.createTextNode("Post");
    buttonElement.appendChild(postText);
    buttonText.appendChild(buttonElement);
    document.getElementById('bottomWrapper').appendChild(buttonText);

    // or text
    var orText = document.createTextNode(" or ");
    document.getElementById('bottomWrapper').appendChild(orText);

    // cancel text
    var spanTag = document.createElement('span');
    spanTag.setAttribute("id","cancelText");
    var cancelText = document.createTextNode("cancel");
    document.getElementById('bottomWrapper').appendChild(spanTag);
    document.getElementById('cancelText').appendChild(cancelText);
  }
