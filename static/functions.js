
var makeOutput, makeOutputId;
var modelOutput, modelOutputId;

function myFunction() {

    var userInputMake = document.getElementById("make");
    var userInputMakeId = document.getElementById("make").value;
    var userInputMakeText = userInputMake.options[userInputMakeId].text;
    console.log(userInputMakeText);

    var userInputModel = document.getElementById("model").value;

    var userInputYear = document.getElementById("year");
    var userInputYearId = document.getElementById("year").value;
    var userInputYearText = userInputYear.options[userInputYearId].text;

    var userInputFuelType = document.getElementById("fueltype");
    var userInputFuelTypeId = document.getElementById("fueltype").value;
    var userInputFuelTypeText = userInputFuelType.options[userInputFuelTypeId].text;

    var userInputTransmission = document.getElementById("transmission");
    var userInputTransmissionId = document.getElementById("transmission").value;
    var userInputTransmissionText = userInputTransmission.options[userInputTransmissionId].text;

    var userInputEngineCapacity = document.getElementById("enginecapacity").value;
    var userInputMileAge = document.getElementById("mileage").value;

    var obj, obj2;


    for (var i = 0; i < jsonMake.length; i++) {
        obj = jsonMake[i];
        if (obj.make == userInputMakeText) {
            makeOutput = obj.make;
            makeOutputId = obj.id;
            console.log(obj.id + ":" + obj.make);
        }

    }


    for (var i = 0; i < jsonModel.length; i++) {
        obj2 = jsonModel[i];
        if (obj2.model == userInputModel) {
            modelOutput = obj2.model;
            modelOutputId = obj2.id;
            console.log(obj2.id + ":" + obj2.model);
        }

    }


    document.getElementById("output").innerHTML = "Your Vehicle is " + makeOutput + ", " + modelOutput + ", " + userInputYearText; /*+ ", " + userInputTransmissionText + ", " + userInputFuelTypeText
        + ", " + userInputEngineCapacity + ", " + userInputMileAge;*/

    /*document.getElementById("outputid").innerHTML = makeOutputId + ", " + modelOutputId + ", " + userInputYearText + ", " + userInputTransmissionId + ", " + userInputFuelTypeId
        + ", " + userInputEngineCapacity + ", " + userInputMileAge;*/

    //url = 'http://127.0.0.1:5000/'+makeOutputId + "," + modelOutputId + "," + userInputYear + "," + userInputTransmissionId + "," + userInputFuelTypeId
    //+ "," + userInputEngineCapacity + "," + userInputMileAge;
    //console.log(url);

    const url = 'https://used-vehicle-pricepredictor.herokuapp.com/' + makeOutputId + "," + modelOutputId + "," + userInputYearText + "," + userInputTransmissionId + "," + userInputFuelTypeId
        + "," + userInputEngineCapacity + "," + userInputMileAge;

    fetch(url).then((response) => {
        console.log('resolved', response);
        return response.json();
    }).then(data => {
        console.log("Prediction : " + data);

        if (userInputMileAge == 0 || userInputMileAge < 10000 || userInputEngineCapacity == 0 || userInputEngineCapacity < 350) {

            document.getElementById('prediction').innerHTML = "";

        }
        else {
            document.getElementById("prediction").innerHTML = "Price Prediction for your Vehicle is <b>" + data + "</b> rupees";

        }
        //document.getElementById("prediction").innerHTML = "Price Prediction for your Vehicle is "+data+" rupees";

    }).catch((err) => {
        console.log('rejected', err)
    })

    if (userInputMileAge == 0 || userInputMileAge < 10000) {

        alert("Mileage should be more than 10000! (Only Integer Values allowed)")
        document.getElementById('output').innerHTML = "";
        document.getElementById('prediction').innerHTML = "";


    }

    if (userInputEngineCapacity == 0 || userInputEngineCapacity < 350) {

        alert("Engine Capacity should be more than 350!(Only Integer Values allowed)")
        document.getElementById('prediction').innerHTML = "";
        document.getElementById('output').innerHTML = "";

    }


    return makeOutputId + "," + modelOutputId + "," + userInputYear + "," + userInputTransmissionId + "," + userInputFuelTypeId
        + "," + userInputEngineCapacity + "," + userInputMileAge;


}

function onClick() {

    console.log("hello");
    myFunction();

}

function clearField() {

    document.getElementById('mileage').value = "";
    document.getElementById('enginecapacity').value = "";
    document.getElementById('model').value = "";
    document.getElementById('make').value = "";
    document.getElementById('year').value = "";
    document.getElementById('fueltype').value = "";
    document.getElementById('transmission').value = "";

    document.getElementById('prediction').innerHTML = "";
    document.getElementById('output').innerHTML = "";


}

const jsonMake = [
    {
        "id": "1",
        "make": "Audi"
    },
    {
        "id": "2",
        "make": "Austin"
    },
    {
        "id": "3",
        "make": "BMW"
    },
    {
        "id": "4",
        "make": "Chery"
    },
    {
        "id": "5",
        "make": "Chevrolet"
    },
    {
        "id": "6",
        "make": "Chrysler"
    },
    {
        "id": "7",
        "make": "Daihatsu"
    },
    {
        "id": "8",
        "make": "Datsun"
    },
    {
        "id": "9",
        "make": "DFSK"
    },
    {
        "id": "10",
        "make": "Ford"
    },
    {
        "id": "11",
        "make": "Honda"
    },
    {
        "id": "12",
        "make": "Hyundai"
    },
    {
        "id": "13",
        "make": "Isuzu"
    },
    {
        "id": "14",
        "make": "Jaguar"
    },
    {
        "id": "15",
        "make": "Kia"
    },
    {
        "id": "16",
        "make": "Land Rover"
    },
    {
        "id": "17",
        "make": "Mahindra"
    },
    {
        "id": "18",
        "make": "Maruti Suzuki"
    },
    {
        "id": "19",
        "make": "Mazda"
    },
    {
        "id": "20",
        "make": "Mercedes Benz"
    },
    {
        "id": "21",
        "make": "MG"
    },
    {
        "id": "22",
        "make": "Micro"
    },
    {
        "id": "23",
        "make": "Mini"
    },
    {
        "id": "24",
        "make": "Mitsubishi"
    },
    {
        "id": "25",
        "make": "Morris"
    },
    {
        "id": "26",
        "make": "Nissan"
    },
    {
        "id": "27",
        "make": "Perodua"
    },
    {
        "id": "28",
        "make": "Peugeot"
    },
    {
        "id": "29",
        "make": "Renault"
    },
    {
        "id": "30",
        "make": "Ssang Yong"
    },
    {
        "id": "31",
        "make": "Subaru"
    },
    {
        "id": "32",
        "make": "Suzuki"
    },
    {
        "id": "33",
        "make": "Tata"
    },
    {
        "id": "34",
        "make": "Toyota"
    },
    {
        "id": "35",
        "make": "Volkswagen"
    },
    {
        "id": "36",
        "make": "Zotye"
    }
];


const jsonModel = [
    {
        "id": "1",
        "model": "3"
    },
    {
        "id": "2",
        "model": "300"
    },
    {
        "id": "3",
        "model": "406"
    },
    {
        "id": "4",
        "model": "800"
    },
    {
        "id": "5",
        "model": "318i"
    },
    {
        "id": "6",
        "model": "320d"
    },
    {
        "id": "7",
        "model": "4DR"
    },
    {
        "id": "8",
        "model": "520d"
    },
    {
        "id": "9",
        "model": "740Le"
    },
    {
        "id": "10",
        "model": "A-Star"
    },
    {
        "id": "11",
        "model": "A1"
    },
    {
        "id": "12",
        "model": "A3"
    },
    {
        "id": "13",
        "model": "A4"
    },
    {
        "id": "14",
        "model": "A6"
    },
    {
        "id": "15",
        "model": "Accent"
    },
    {
        "id": "16",
        "model": "Accord"
    },
    {
        "id": "17",
        "model": "Actyon"
    },
    {
        "id": "18",
        "model": "AD Wagon"
    },
    {
        "id": "19",
        "model": "Allion"
    },
    {
        "id": "20",
        "model": "Alto"
    },
    {
        "id": "21",
        "model": "Aqua"
    },
    {
        "id": "22",
        "model": "Avanza"
    },
    {
        "id": "23",
        "model": "Axela"
    },
    {
        "id": "24",
        "model": "Axia"
    },
    {
        "id": "25",
        "model": "Axio"
    },
    {
        "id": "26",
        "model": "BAIC"
    },
    {
        "id": "27",
        "model": "Baleno"
    },
    {
        "id": "28",
        "model": "Beetle"
    },
    {
        "id": "29",
        "model": "Belta"
    },
    {
        "id": "30",
        "model": "Bezza"
    },
    {
        "id": "31",
        "model": "Bighorn"
    },
    {
        "id": "32",
        "model": "Bluebird"
    },
    {
        "id": "33",
        "model": "Bolero"
    },
    {
        "id": "34",
        "model": "C180"
    },
    {
        "id": "35",
        "model": "C200"
    },
    {
        "id": "36",
        "model": "Camry"
    },
    {
        "id": "37",
        "model": "Carina"
    },
    {
        "id": "38",
        "model": "Cefiro"
    },
    {
        "id": "39",
        "model": "Celerio"
    },
    {
        "id": "40",
        "model": "Charade"
    },
    {
        "id": "41",
        "model": "CHR"
    },
    {
        "id": "42",
        "model": "City"
    },
    {
        "id": "43",
        "model": "Civic"
    },
    {
        "id": "44",
        "model": "CLA 180"
    },
    {
        "id": "45",
        "model": "Cooper"
    },
    {
        "id": "46",
        "model": "Copen"
    },
    {
        "id": "47",
        "model": "Corolla"
    },
    {
        "id": "48",
        "model": "Corona"
    },
    {
        "id": "49",
        "model": "Corsa"
    },
    {
        "id": "50",
        "model": "Crown"
    },
    {
        "id": "51",
        "model": "Cruze"
    },
    {
        "id": "52",
        "model": "CRV"
    },
    {
        "id": "53",
        "model": "CRZ"
    },
    {
        "id": "54",
        "model": "Dayz"
    },
    {
        "id": "55",
        "model": "Defender"
    },
    {
        "id": "56",
        "model": "Demio"
    },
    {
        "id": "57",
        "model": "Discovery"
    },
    {
        "id": "58",
        "model": "Dutsun"
    },
    {
        "id": "59",
        "model": "E200"
    },
    {
        "id": "60",
        "model": "E220"
    },
    {
        "id": "61",
        "model": "E300"
    },
    {
        "id": "62",
        "model": "E350"
    },
    {
        "id": "63",
        "model": "Elantra"
    },
    {
        "id": "64",
        "model": "Eon"
    },
    {
        "id": "65",
        "model": "Escudo"
    },
    {
        "id": "66",
        "model": "Esquire"
    },
    {
        "id": "67",
        "model": "Estilo"
    },
    {
        "id": "68",
        "model": "Familia"
    },
    {
        "id": "69",
        "model": "Fit"
    },
    {
        "id": "70",
        "model": "Fit Aria"
    },
    {
        "id": "71",
        "model": "Fit Shuttle"
    },
    {
        "id": "72",
        "model": "Flair"
    },
    {
        "id": "73",
        "model": "Fortuner"
    },
    {
        "id": "74",
        "model": "Freed"
    },
    {
        "id": "75",
        "model": "Freelander"
    },
    {
        "id": "76",
        "model": "Geely"
    },
    {
        "id": "77",
        "model": "Gemini"
    },
    {
        "id": "78",
        "model": "Glory"
    },
    {
        "id": "79",
        "model": "Grace"
    },
    {
        "id": "80",
        "model": "Grand Vitara"
    },
    {
        "id": "81",
        "model": "Harrier"
    },
    {
        "id": "82",
        "model": "Hilux"
    },
    {
        "id": "83",
        "model": "Hustler"
    },
    {
        "id": "84",
        "model": "Indica"
    },
    {
        "id": "85",
        "model": "Indigo"
    },
    {
        "id": "86",
        "model": "Insight"
    },
    {
        "id": "87",
        "model": "IST"
    },
    {
        "id": "88",
        "model": "Kelisa"
    },
    {
        "id": "89",
        "model": "KWID"
    },
    {
        "id": "90",
        "model": "Kyron"
    },
    {
        "id": "91",
        "model": "L200"
    },
    {
        "id": "92",
        "model": "Lancer"
    },
    {
        "id": "93",
        "model": "Land Cruiser Prado"
    },
    {
        "id": "94",
        "model": "Land Cruiser Sahara"
    },
    {
        "id": "95",
        "model": "Laser"
    },
    {
        "id": "96",
        "model": "March"
    },
    {
        "id": "97",
        "model": "Mark"
    },
    {
        "id": "98",
        "model": "Maruti"
    },
    {
        "id": "99",
        "model": "Mini Cooper"
    },
    {
        "id": "100",
        "model": "Minor"
    },
    {
        "id": "101",
        "model": "Mira"
    },
    {
        "id": "102",
        "model": "Montero"
    },
    {
        "id": "103",
        "model": "MX 7"
    },
    {
        "id": "104",
        "model": "N-WGN"
    },
    {
        "id": "105",
        "model": "Nano"
    },
    {
        "id": "106",
        "model": "Navara"
    },
    {
        "id": "107",
        "model": "Nomad"
    },
    {
        "id": "108",
        "model": "Outlander"
    },
    {
        "id": "109",
        "model": "Pajero"
    },
    {
        "id": "110",
        "model": "Panda"
    },
    {
        "id": "111",
        "model": "Panda Cross"
    },
    {
        "id": "112",
        "model": "Passo"
    },
    {
        "id": "113",
        "model": "Patrol"
    },
    {
        "id": "114",
        "model": "Picanto"
    },
    {
        "id": "115",
        "model": "Premio"
    },
    {
        "id": "116",
        "model": "Presea"
    },
    {
        "id": "117",
        "model": "Primera"
    },
    {
        "id": "118",
        "model": "Prius"
    },
    {
        "id": "119",
        "model": "Pulsar"
    },
    {
        "id": "120",
        "model": "Q2"
    },
    {
        "id": "121",
        "model": "Q7"
    },
    {
        "id": "122",
        "model": "QQ"
    },
    {
        "id": "123",
        "model": "Range Rover"
    },
    {
        "id": "124",
        "model": "Range Rover Sport"
    },
    {
        "id": "125",
        "model": "RAV4"
    },
    {
        "id": "126",
        "model": "Redi Go"
    },
    {
        "id": "127",
        "model": "Rexton"
    },
    {
        "id": "128",
        "model": "Rio"
    },
    {
        "id": "129",
        "model": "Rush"
    },
    {
        "id": "130",
        "model": "RX"
    },
    {
        "id": "131",
        "model": "S300"
    },
    {
        "id": "132",
        "model": "SAI"
    },
    {
        "id": "133",
        "model": "Santa Fe"
    },
    {
        "id": "134",
        "model": "Soluna"
    },
    {
        "id": "135",
        "model": "Sonata"
    },
    {
        "id": "136",
        "model": "Sorento"
    },
    {
        "id": "137",
        "model": "Spacia"
    },
    {
        "id": "138",
        "model": "Sportage"
    },
    {
        "id": "139",
        "model": "Sprinter"
    },
    {
        "id": "140",
        "model": "Starlet"
    },
    {
        "id": "141",
        "model": "Sunny"
    },
    {
        "id": "142",
        "model": "Swift"
    },
    {
        "id": "143",
        "model": "Sylphy"
    },
    {
        "id": "144",
        "model": "Tank"
    },
    {
        "id": "145",
        "model": "Tercel"
    },
    {
        "id": "146",
        "model": "Terios"
    },
    {
        "id": "147",
        "model": "Tiida"
    },
    {
        "id": "148",
        "model": "Tivoli"
    },
    {
        "id": "149",
        "model": "Trend"
    },
    {
        "id": "150",
        "model": "Tucson"
    },
    {
        "id": "151",
        "model": "Vezel"
    },
    {
        "id": "152",
        "model": "Vios"
    },
    {
        "id": "153",
        "model": "Vitz"
    },
    {
        "id": "154",
        "model": "Viva Elite"
    },
    {
        "id": "155",
        "model": "Wagon R"
    },
    {
        "id": "156",
        "model": "Wagon R FX"
    },
    {
        "id": "157",
        "model": "Wagon R FZ"
    },
    {
        "id": "158",
        "model": "Wagon R Stingray"
    },
    {
        "id": "159",
        "model": "Wigo"
    },
    {
        "id": "160",
        "model": "Wingroad"
    },
    {
        "id": "161",
        "model": "X-Trail"
    },
    {
        "id": "162",
        "model": "X-Type"
    },
    {
        "id": "163",
        "model": "X1"
    },
    {
        "id": "164",
        "model": "X3"
    },
    {
        "id": "165",
        "model": "Xenon"
    },
    {
        "id": "166",
        "model": "XV"
    },
    {
        "id": "167",
        "model": "Yaris"
    },
    {
        "id": "168",
        "model": "Zen"
    },
    {
        "id": "169",
        "model": "ZS"
    }
];