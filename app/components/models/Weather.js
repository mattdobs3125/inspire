export default class Weather{
    constructor(weather){
        this.location = weather.name
        this.humidity = weather.humidity
        this.tempF = weather.main[temp]
    }
} 