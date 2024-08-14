
const removeBtn = () => {
    const joinBtn = document.getElementById("joinBtn"); 
    joinBtn.remove(); 
  };

  const inputAlert = () => {
    const searchInput = document.getElementById("searchInput").value; 
    alert(`You are searching for ${searchInput}`); 
  };
  
  let goBtn = document.getElementById("goBtn");
  goBtn.addEventListener("click", inputAlert); 
  
  // Likes
  let likeSpan = document.getElementsByClassName("likesCount");
  
  // Add 1 to like counter
  const like = (i) => {
    likeSpan[i].innerHTML = Number(likeSpan[i].innerHTML) + 1;
    console.log(likeSpan.typeOf);
    console.log(likeSpan);
  };