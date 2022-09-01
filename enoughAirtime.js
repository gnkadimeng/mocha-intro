function enoughAirtime(a, b) {
    var data = a.split(',')
    var newCall = []
    var newSms = []
    var newData = []

    for (var i = 0; i < data.length; i++) {
        var lot = data[i].trim()
        //console.log(lot)

        if (lot == 'sms') {
            newSms.push(lot)
        } else if (lot == 'data') {
            newData.push(lot)
        } else {
            newCall.push(lot)
        }
        if (b >= (newSms.length * 0.75 + newCall.length * 1.88 + newData.length * 12)) {
            var balance = b - (newSms.length * 0.75 + newCall.length * 1.88 + newData.length * 12)
        } else {
            var balance = 0.00
        }
    }
    return "R" + balance.toFixed(2)
}
