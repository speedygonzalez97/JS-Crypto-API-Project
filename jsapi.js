function getcoin() 
{
    let coin = document.querySelector('#coinName').value.toUpperCase();
    fetch(`http://api.coinlayer.com/api/live?access_key=6f54ad41fe038c0115e5222158b3515e&symbols=${coin}&target=USD`)
    
        .then(response => response.json())
        .then(data => 
        {
        console.log(data)
        

        const time= data.timestamp
        var time_fetched= document.getElementById('timestamp')
        var date = new Date(time * 1000);
        time_fetched.innerHTML = date
        
        let coin_rate = document.getElementById('coin')
        coin_rate.innerHTML = coin

        const price = data.rates[coin]
        let coin_price = document.getElementById('price')
        coin_price.innerHTML = price

        const rates= data.target
        let coin_rates= document.getElementById('currency')
        coin_rates.innerHTML = rates
        }
        )
}