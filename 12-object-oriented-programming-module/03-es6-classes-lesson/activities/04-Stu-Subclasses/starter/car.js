const vehicle = require('./vehicle')

class car extends vehicle{
    constructor(id,sound,color,passengers){
        this.color = color
        this.passengers = passengers

        super(id,4,sound)

    }
}