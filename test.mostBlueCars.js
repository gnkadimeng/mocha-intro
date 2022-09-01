
describe('test', function () {
    it('return most popular Model', function () {
        assert.equal(mostPopularCar(cars), 'Toyota');
    });
})

describe('test', function () {
    it('leastPopularCF', function () {
        assert.equal(leastPopularCF(cars), 'Juke')
    });
})

describe('test', function () {
    it('Most Poular CL', function () {
        assert.equal(mostPopularCL(cars), 'Polo')
    });
})

describe('test', function () {
    it('Most popular model', function () {
        assert.equal(mostPopularModel(cars), 'Corolla')
    });
})

describe('test', function () {
    it('fewer orange', function () {
        assert.equal(fewestOrangeCars(cars), 'CA')
    });
})

describe('test', function () {
    it('most blue cars', function () {
        assert.equal(mostBlueCars(cars), 'CA')
    });
    it('test var', function(){
        assert.typeOf(mostBlueCars(cars), "String")
    })
})

describe('test', function () {
    it('equal nissan from CK', function () {
        assert.equal(nissansFromCK(cars), 1)
    });
    it('numeric var output', function(){
        var result = 1;
        assert.isNumber(nissansFromCK(cars), result);
    })
})















// assert.deepEqual(carsForTown("Malmesbury"), [{"color":"orange","make":"Nissan","model":"Juke","reg_number":"CK 32655"},{"color":"orange","make":"Toyota","model":"Corolla","reg_number":"CK 
// 57166"},{"color":"orange","make":"Ford","model":"Ranger","reg_number":"CK 22692"},{"color":"orange","make":"Toyota","model":"Corolla","reg_number":"CK 41166"}])
// assert.deepEqual(carsForTown('Paarl'), [{"color":"white","make":"Nissan","model":"Micra","reg_number":"CJ 16103"},{"color":"white","make":"Toyota","model":"Hilux","reg_number":"CJ 
// 16455"},{"color":"orange","make":"Ford","model":"Fiesta","reg_number":"CJ 67577"}]);

// assert.deepEqual(numberOfCars('blue', 'Cape Town'), [{"color":"blue","make":"Volkswagen","model":"Jetta","reg_number":"CA 46977"},{"color":"blue","make":"Ford","model":"Ranger","reg_number":"CA 77852"}, { 
// "color": "blue", "make": "Ford", "model": "Fiesta",  "reg_number": "CA 34015" }]);
// assert.deepEqual(numberOfCars('red', 'Paarl'),[]);

// assert.deepEqual(numberOfCarsPerModel('orange','Hilux','Bellville'),[{"color":"orange","make":"Toyota","model":"Hilux","reg_number":"CY 52435"}])
// assert.deepEqual(numberOfCarsPerModel('red','Fiesta','Cape Town'),[])

// assert.equal(mostPopularColor('Bellville'), 'white');
