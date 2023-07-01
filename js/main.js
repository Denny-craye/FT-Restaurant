const clearInput = () => {
    const input = document.getElementsByTagName("input")[0];
    input.value = "";
  }
  
  const clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", clearInput);

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("drop-menu").addEventListener("click", function()
    {
        document.querySelector(".header").classList.toggle("open")
    })
})