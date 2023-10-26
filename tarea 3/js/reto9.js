function displayImage() {
    var imageContainer = document.getElementById("image-container");
    var selectedOption = document.querySelector('input[name="radioOption"]:checked').value;
    var imagePath = '';

    switch (selectedOption) {
        case "option1":
            imagePath = "imagenes/costarica.png";
            break;
        case "option2":
            imagePath = "imagenes/argentina.png";
            break;
        case "option3":
            imagePath = "imagenes/españa.jpg";
            break;
        case "option4":
            imagePath = "imagenes/usa.png";
            break;
    }

    imageContainer.innerHTML = `<img src="${imagePath}" alt="Selected Image" width="200">`;
}