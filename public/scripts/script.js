const items = document.getElementsByClassName("product");

const handleClick = async (event) => {
  if (event.target.type === "submit") {
    console.log("Sending POST request");
    const response = await axios.post("http://localhost:3000/cart", {
      itemId: event.target.id,
    });
    console.log(response.data.cart);
  }
};
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", handleClick, false);
}
