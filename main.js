
(function () {
  "use strict"; // Pesquisar

  function handleMeal(meal){
    const name =  meal.strMeal;
    const titulo = document.createElement("h1");
    titulo.innerHTML = name;
    document.getElementById("title-content").appendChild(titulo)
  }
  function img(meal){
    const doc = document.getElementById("container-img");
    const img = meal.strMealThumb;
    const imagem = document.createElement("figure");
    imagem.innerHTML = `<img src="${img}">`;
    doc.append(imagem)
  }
  function ingredient(meal){
        
    const receita = Object.entries(meal)
    
    const view = receita.filter(([element]) => element.includes("strIngredient"));
    const ver = view.flatMap(([, item])=> item)
    const ingredientes = ver.filter((element) => {
      return element;
    });
    ingredientes.forEach(element => {
    const containerIngredientes = document.getElementById("container-text")
    const ing = document.createElement("li");
    ing.textContent = element;
    containerIngredientes.appendChild(ing)
    })
      
 
  }
  function preparation(meal){
    const recepies =  meal.strInstructions;
    const intru = document.createElement("div");
    intru.innerHTML = recepies;
    document.getElementById("text").appendChild(intru)
  }

  fetch("https://www.themealdb.com/api/json/v1/1/random.php", { method: "GET" })
    .then((response) => response.json()) // Pesquisar sobre response json
    .then(function (data) {
      console.log({ data});
      handleMeal(data.meals[0]);
      img(data.meals[0]);
      ingredient(data.meals[0])
      preparation(data.meals[0])
    })
    .catch(function (error) {
      console.log({ error });
    });
    console.log()
})();



