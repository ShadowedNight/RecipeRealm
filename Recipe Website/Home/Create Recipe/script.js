function toggleNav() {
    var sidenav = document.getElementById("sidenav");
    var toggleBtn = document.getElementById("toggle-btn");
    if (sidenav.classList.contains("sidenav-opened")) {
      sidenav.classList.remove("sidenav-opened");
    } else {
      sidenav.classList.add("sidenav-opened");
    }
  }

  document.getElementById('image-input').addEventListener('change', importImage);

  function saveRecipe(event) {
    event.preventDefault();

    var recipeTitle = document.getElementById('recipe-title').value;
    var recipeDescription = document.getElementById('recipe-description').value;
    var recipeIngredients = document.getElementById('recipe-ingredients').value;
    var recipeInstructions = document.getElementById('recipe-instructions').value;
    var imageInput = document.getElementById('image-input');
    var imageFile = imageInput.files[0];

    var recipe = {
      title: recipeTitle,
      description: recipeDescription,
      ingredients: recipeIngredients,
      instructions: recipeInstructions,
      image: null
    };

    if (imageFile) {
      // Create a FileReader to read the image file
      var reader = new FileReader();
      reader.onload = function(e) {
        var imageDataURL = e.target.result;
        recipe.image = imageDataURL;

        // Store the recipe data in localStorage
        localStorage.setItem('recipe', JSON.stringify(recipe));

        // Optionally, you can redirect to a different page or display a success message
        // window.location.href = 'success.html';
        // alert('Recipe saved successfully!');
      };
      reader.readAsDataURL(imageFile);
    } else {
      // Store the recipe data in localStorage without the image
      localStorage.setItem('recipe', JSON.stringify(recipe));

      // Optionally, you can redirect to a different page or display a success message
      // window.location.href = 'success.html';
      // alert('Recipe saved successfully!');
    }
  }

  // Display the image preview
  function importImage(event) {
    var input = event.target;
    if (input.files && input.files[0]) {
      var file = input.files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
        var imagePreview = document.getElementById('image-preview');
        imagePreview.setAttribute('src', e.target.result);
        imagePreview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  }

  document.getElementById('image-input').addEventListener('change', importImage);
