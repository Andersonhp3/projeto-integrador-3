// vars
let upload = document.querySelector('#image-selector'),
    result = document.querySelector("#canvas"),
    save = document.querySelector("#pronto"),
    preview = document.querySelector("#image-preview"),
    cropper = "",
    modal = document.querySelector(".modal");

// on change show image with crop options
upload.addEventListener("change", (e) => {
    if (e.target.files.length) {
        // start file reader
        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target.result) {
                // create new image
                let img = document.createElement("img");
                img.id = "image";
                img.src = e.target.result;
                // clean result before
                result.innerHTML = "";
                // append new image
                result.appendChild(img);
                // init cropper
                cropper = new Cropper(img, {
                    aspectRatio: 1,
                    dragMode: 'move',
                    viewMode: 2,
                    minContainerWidth: 300,
                    minContainerHeight: 300,
                });
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    }
    $('#image-cropper').modal('show');
});

save.addEventListener('click', (e) => {
    e.preventDefault();
    let imgSrc = cropper
    .getCroppedCanvas()
    .toDataURL();
    preview.src = imgSrc;
    document.getElementById('imagemb64').value = imgSrc;
});

upload.addEventListener('click', (e) => {
    upload.value = "";
})