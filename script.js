document.addEventListener("DOMContentLoaded", () => {


let APIResponse = {
    "status": "success",
    "message": {
        "affenpinscher": [],
        "african": [],
        "airedale": [],
        "akita": [],
        "appenzeller": [],
        "basenji": [],
        "beagle": [],
        "bluetick": [],
        "borzoi": [],
        "bouvier": [],
        "boxer": [],
        "brabancon": [],
        "briard": [],
        "bulldog": [
            "boston",
            "french"
        ],
        "bullterrier": [
            "staffordshire"
        ],
        "cairn": [],
        "cattledog": [
            "australian"
        ],
        "chihuahua": [],
        "chow": [],
        "clumber": [],
        "cockapoo": [],
        "collie": [
            "border"
        ],
        "coonhound": [],
        "corgi": [
            "cardigan"
        ],
        "cotondetulear": [],
        "dachshund": [],
        "dalmatian": [],
        "dane": [
            "great"
        ],
        "deerhound": [
            "scottish"
        ],
        "dhole": [],
        "dingo": [],
        "doberman": [],
        "elkhound": [
            "norwegian"
        ],
        "entlebucher": [],
        "eskimo": [],
        "frise": [
            "bichon"
        ],
        "germanshepherd": [],
        "greyhound": [
            "italian"
        ],
        "groenendael": [],
        "hound": [
            "afghan",
            "basset",
            "blood",
            "english",
            "ibizan",
            "walker"
        ],
        "husky": [],
        "keeshond": [],
        "kelpie": [],
        "komondor": [],
        "kuvasz": [],
        "labrador": [],
        "leonberg": [],
        "lhasa": [],
        "malamute": [],
        "malinois": [],
        "maltese": [],
        "mastiff": [
            "bull",
            "tibetan"
        ],
        "mexicanhairless": [],
        "mix": [],
        "mountain": [
            "bernese",
            "swiss"
        ],
        "newfoundland": [],
        "otterhound": [],
        "papillon": [],
        "pekinese": [],
        "pembroke": [],
        "pinscher": [
            "miniature"
        ],
        "pointer": [
            "german",
            "germanlonghair"
        ],
        "pomeranian": [],
        "poodle": [
            "miniature",
            "standard",
            "toy"
        ],
        "pug": [],
        "puggle": [],
        "pyrenees": [],
        "redbone": [],
        "retriever": [
            "chesapeake",
            "curly",
            "flatcoated",
            "golden"
        ],
        "ridgeback": [
            "rhodesian"
        ],
        "rottweiler": [],
        "saluki": [],
        "samoyed": [],
        "schipperke": [],
        "schnauzer": [
            "giant",
            "miniature"
        ],
        "setter": [
            "english",
            "gordon",
            "irish"
        ],
        "sheepdog": [
            "english",
            "shetland"
        ],
        "shiba": [],
        "shihtzu": [],
        "spaniel": [
            "blenheim",
            "brittany",
            "cocker",
            "irish",
            "japanese",
            "sussex",
            "welsh"
        ],
        "springer": [
            "english"
        ],
        "stbernard": [],
        "terrier": [
            "american",
            "australian",
            "bedlington",
            "border",
            "dandie",
            "fox",
            "irish",
            "kerryblue",
            "lakeland",
            "norfolk",
            "norwich",
            "patterdale",
            "russell",
            "scottish",
            "sealyham",
            "silky",
            "tibetan",
            "toy",
            "westhighland",
            "wheaten",
            "yorkshire"
        ],
        "vizsla": [],
        "weimaraner": [],
        "whippet": [],
        "wolfhound": [
            "irish"
        ]
    }
}


let breedList = [
  "Affenpinscher",
  "African",
  "Airedale",
  "Akita",
  "Appenzeller",
  "Basenji",
  "Beagle",
  "Bluetick",
  "Borzoi",
  "Bouvier",
  "Boxer",
  "Brabancon",
  "Briard",
  "Boston Bulldog",
  "French Bulldog",
  "Staffordshire Bullterrier",
  "Cairn",
  "Australian Cattledog",
  "Chihuahua",
  "Chow",
  "Clumber",
  "Cockapoo",
  "Border Collie",
  "Coonhound",
  "Cardigan Corgi",
  "Cotondetulear",
  "Dachshund",
  "Dalmatian",
  "Great Dane",
  "Scottish Deerhound",
  "Dhole",
  "Dingo",
  "Doberman",
  "Norwegian Elkhound",
  "Entlebucher",
  "Eskimo",
  "Bichon Frise",
  "German Shepherd",
  "Italian Greyhound",
  "Groenendael",
  "Afghan Hound",
  "Basset Hound",
  "Blood Hound",
  "English Hound",
  "Ibizan Hound",
  "Walker Hound",
  "husky",
  "Keeshond",
  "Kelpie",
  "Komondor",
  "Kuvasz",
  "Labrador",
  "Leonberg",
  "Lhasa",
  "Malamute",
  "Malinois",
  "Maltese",
  "Bull Mastiff",
  "Tibetan Mastiff",
  "Mexican Hairless",
  "Mix",
  "Bernese Mountain",
  "Swiss Mountain",
  "Newfoundland",
  "Otterhound",
  "Papillon",
  "Pekinese",
  "Pembroke",
  "Miniature Pinscher",
  "German Pointer",
  "German Longhair Pointer",
  "Pomeranian",
  "Miniature Poodle",
  "Standard Poodle",
  "Toy Poodel",
  "Pug",
  "Puggle",
  "Pyrenees",
  "Redbone",
  "Chesapeake Retriever",
  "Curly Retriever",
  "Flatcoated Retriever",
  "Golden Retriever",
  "Rhodesian Ridgeback",
  "Rottweiler",
  "Saluki",
  "Samoyed",
  "Schipperke",
  "Giant Schnauzer",
  "Miniature Schnauzer",
  "English Setter",
  "Gordon Setter",
  "Irish Setter",
  "English Sheepdog",
  "Shetland Sheepdog",
  "Shiba",
  "Shihtzu",
  "Blenheim Spaniel",
  "Brittany Spaniel",
  "Cocker Spaniel",
  "Irish Spaniel",
  "Japenese Spaniel",
  "Sussex Spaniel",
  "Welsh Spaniel",
  "English Springer",
  "St Bernard",
  "American Terrier",
  "Australian Terrier",
  "Bedlington Terrier",
  "Border Terrier",
  "Dandie Terrier",
  "Fox Terrier",
  "Irish Terrier",
  "Kerryblue Terrier",
  "Lakeland Terrier",
  "Norfold Terrier",
  "Norwich Terrier",
  "Patterdale Terrier",
  "Russell Terrier",
  "Scottish Terrier",
  "Sealyham Terrier",
  "Silky Terrier",
  "Tibetan Terrier",
  "Toy Terrier",
  "Westhighland Terrier",
  "Wheaten Terrier",
  "Yorkshire Terrier",
  "Vizsla",
  "Weimaraner",
  "Whippet",
  "Irish Wolfhound"
]

let dog;
let tracker = 0;
let button = document.getElementById('button')
let body = document.querySelector('body')
let picked = document.querySelector('.dogPicked')

// for(let i = 0; i < breedList.length; i++) {
//   let option = document.createElement("option")
//   option.text = breedList[i];
//   console.log(option);
//   let selecting = document.getElementById('selecting')
//   // selecting.innerText = option
//   selecting.appendChild(option)
// }



function randomize (){
  picked.innerText = breedList[Math.floor(Math.random() * breedList.length)]
  body.appendChild(picked)
}

button.addEventListener('click', () => {
  if(tracker === 0) {
    randomize()
    button.innerHTML = "Another One !"
  }else {
    body.removeChild(picked)
    return randomize()
  }
  tracker++
})

})
