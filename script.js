document.addEventListener("DOMContentLoaded", () => {
  // File input elements
  const image1Input = document.getElementById("image1-input");
  const image2Input = document.getElementById("image2-input");

  // Image preview elements
  const image1Preview = document.getElementById("image1-preview");
  const image2Preview = document.getElementById("image2-preview");

  // Slider element
  const slider = document.getElementById("slider");
  const sliderHandle = document.getElementById("slider-handle");

  const container = document.getElementById("image-container");

  // Add event listeners to file input elements
  image1Input.addEventListener("change", (event) => {
    handleFileSelect(event, 1);
  });

  image2Input.addEventListener("change", (event) => {
    handleFileSelect(event, 2);
  });

  // Handle file select
  function handleFileSelect(event, imageNumber) {
    // Get the file input element
    const input = event.target;

    // Check that an image has been selected
    if (input.files.length !== 1) {
      alert("Please select an image.");
      return;
    }

    // Get the image
    const image = input.files[0];
    // Create a URL for the image
    const url = URL.createObjectURL(image);

    container.style.display = "block";

    // Set the source of the preview element to the URL
    if (imageNumber == 1) {
      image1Preview.src = url;
      // 
    } else {
      image2Preview.src = url;
      // container.style.width = image2Preview.width + "px";
    }

    if (image1Preview.src !== "" && image2Preview.src !== "") {  
      container.style.width = image2Preview.width + "px";
      slider.style.display = "block";
      slider.style.height = image2Preview.height + "px";
      slider.max = image2Preview.width;
    }

    slider.style.left = "50%";
  }

  // Handle slider movement
  slider.addEventListener("mousedown", startSlide);
  slider.addEventListener("touchstart", startSlide);

// Start slider movement
  function startSlide(event) {
    event.preventDefault();
    sliderHandle.style.backgroundColor = "crimson";
    document.addEventListener("mousemove", slideImage);
    document.addEventListener("touchmove", slideImage);
    document.addEventListener("mouseup", stopSlide);
    document.addEventListener("touchend", stopSlide);
  }

// Move slider
  function slideImage(event) {
    event.preventDefault();
    
    const containerWidth = container.offsetWidth;
    const containerLeft = container.getBoundingClientRect().left;
    const x = event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
    let position = ((x - containerLeft) / containerWidth) * 100;
    position = Math.max(0, Math.min(position, 100));
    slider.style.left = `${position}%`;
    image1Preview.style.clipPath = `inset(0% ${100 - position}% 0% 0%)`;
    image2Preview.style.clipPath = `inset(0% 0% 0% ${position}%)`;
  }

// Stop slider movement
  function stopSlide(event) {
    event.preventDefault();
    sliderHandle.style.backgroundColor = "";
    document.removeEventListener("mousemove", slideImage);
    document.removeEventListener("touchmove", slideImage);
    document.removeEventListener("mouseup", stopSlide);
    document.removeEventListener("touchend", stopSlide);
  }
});
