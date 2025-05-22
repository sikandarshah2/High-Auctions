function addBid(){
    const newBid = document.createElement('li')
    const inputBid = document.getElementById('inputBid')
    const bidList = document.getElementById('Bidlist')

    // console.log(inputBid.value)

    if( inputBid.value ==""){
        alert("Please Enter a Bid")
        return
    }

    bidList.appendChild(newBid)
    newBid.textContent = inputBid.value + " PKR"
    document.getElementById('inputBid').value = ""

}