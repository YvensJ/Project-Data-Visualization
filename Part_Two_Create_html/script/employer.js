// Contents - Healthcare Coverage By Race - Employer
const employerData = [
    {"Location":"Alabama","White":0.626,"Black":0.432,"Hispanic":0.313,"Asian\/Native Hawaiian and Pacific Islander":0.577,"American Indian\/Alaska Native":0.446,"Multiple Races":0.508},
    {"Location":"Alaska","White":0.608,"Black":0.455,"Hispanic":0.53,"Asian\/Native Hawaiian and Pacific Islander":0.537,"American Indian\/Alaska Native":0.214,"Multiple Races":0.491},
    {"Location":"Arizona","White":0.646,"Black":0.511,"Hispanic":0.439,"Asian\/Native Hawaiian and Pacific Islander":0.688,"American Indian\/Alaska Native":0.279,"Multiple Races":0.6},
    {"Location":"Arkansas","White":0.535,"Black":0.372,"Hispanic":0.355,"Asian\/Native Hawaiian and Pacific Islander":0.617,"American Indian\/Alaska Native":0.389,"Multiple Races":0.453},
    {"Location":"California","White":0.651,"Black":0.487,"Hispanic":0.434,"Asian\/Native Hawaiian and Pacific Islander":0.647,"American Indian\/Alaska Native":0.44,"Multiple Races":0.617},
    {"Location":"Colorado","White":0.677,"Black":0.444,"Hispanic":0.476,"Asian\/Native Hawaiian and Pacific Islander":0.651,"American Indian\/Alaska Native":0.399,"Multiple Races":0.589},
    {"Location":"Connecticut","White":0.727,"Black":0.503,"Hispanic":0.415,"Asian\/Native Hawaiian and Pacific Islander":0.621,"American Indian\/Alaska Native":0.304,"Multiple Races":0.57},
    {"Location":"Delaware","White":0.704,"Black":0.545,"Hispanic":0.376,"Asian\/Native Hawaiian and Pacific Islander":0.751,"American Indian\/Alaska Native":0.642,"Multiple Races":0.502},
    {"Location":"District of Columbia","White":0.865,"Black":0.406,"Hispanic":0.672,"Asian\/Native Hawaiian and Pacific Islander":0.781,"American Indian\/Alaska Native":0.0,"Multiple Races":0.753},
    {"Location":"Florida","White":0.583,"Black":0.432,"Hispanic":0.406,"Asian\/Native Hawaiian and Pacific Islander":0.602,"American Indian\/Alaska Native":0.356,"Multiple Races":0.485},
    {"Location":"Georgia","White":0.648,"Black":0.491,"Hispanic":0.353,"Asian\/Native Hawaiian and Pacific Islander":0.617,"American Indian\/Alaska Native":0.461,"Multiple Races":0.55},
    {"Location":"Hawaii","White":0.563,"Black":0.29,"Hispanic":0.488,"Asian\/Native Hawaiian and Pacific Islander":0.64,"American Indian\/Alaska Native":0.0,"Multiple Races":0.623},
    {"Location":"Idaho","White":0.591,"Black":0.423,"Hispanic":0.437,"Asian\/Native Hawaiian and Pacific Islander":0.678,"American Indian\/Alaska Native":0.437,"Multiple Races":0.519},
    {"Location":"Illinois","White":0.712,"Black":0.439,"Hispanic":0.499,"Asian\/Native Hawaiian and Pacific Islander":0.683,"American Indian\/Alaska Native":0.48,"Multiple Races":0.591},
    {"Location":"Indiana","White":0.657,"Black":0.432,"Hispanic":0.473,"Asian\/Native Hawaiian and Pacific Islander":0.688,"American Indian\/Alaska Native":0.483,"Multiple Races":0.553},
    {"Location":"Iowa","White":0.676,"Black":0.342,"Hispanic":0.494,"Asian\/Native Hawaiian and Pacific Islander":0.647,"American Indian\/Alaska Native":0.318,"Multiple Races":0.547},
    {"Location":"Kansas","White":0.68,"Black":0.498,"Hispanic":0.468,"Asian\/Native Hawaiian and Pacific Islander":0.69,"American Indian\/Alaska Native":0.366,"Multiple Races":0.564},
    {"Location":"Kentucky","White":0.572,"Black":0.407,"Hispanic":0.374,"Asian\/Native Hawaiian and Pacific Islander":0.589,"American Indian\/Alaska Native":0.428,"Multiple Races":0.425},
    {"Location":"Louisiana","White":0.582,"Black":0.322,"Hispanic":0.324,"Asian\/Native Hawaiian and Pacific Islander":0.465,"American Indian\/Alaska Native":0.383,"Multiple Races":0.438},
    {"Location":"Maine","White":0.595,"Black":0.479,"Hispanic":0.481,"Asian\/Native Hawaiian and Pacific Islander":0.603,"American Indian\/Alaska Native":0.417,"Multiple Races":0.589},
    {"Location":"Maryland","White":0.736,"Black":0.56,"Hispanic":0.38,"Asian\/Native Hawaiian and Pacific Islander":0.672,"American Indian\/Alaska Native":0.699,"Multiple Races":0.61},
    {"Location":"Massachusetts","White":0.727,"Black":0.497,"Hispanic":0.378,"Asian\/Native Hawaiian and Pacific Islander":0.682,"American Indian\/Alaska Native":0.55,"Multiple Races":0.512},
    {"Location":"Michigan","White":0.654,"Black":0.389,"Hispanic":0.482,"Asian\/Native Hawaiian and Pacific Islander":0.71,"American Indian\/Alaska Native":0.409,"Multiple Races":0.552},
    {"Location":"Minnesota","White":0.724,"Black":0.338,"Hispanic":0.483,"Asian\/Native Hawaiian and Pacific Islander":0.602,"American Indian\/Alaska Native":0.256,"Multiple Races":0.602},
    {"Location":"Mississippi","White":0.59,"Black":0.412,"Hispanic":0.339,"Asian\/Native Hawaiian and Pacific Islander":0.548,"American Indian\/Alaska Native":0.332,"Multiple Races":0.398},
    {"Location":"Missouri","White":0.65,"Black":0.487,"Hispanic":0.48,"Asian\/Native Hawaiian and Pacific Islander":0.692,"American Indian\/Alaska Native":0.469,"Multiple Races":0.566},
    {"Location":"Montana","White":0.56,"Black":0.431,"Hispanic":0.393,"Asian\/Native Hawaiian and Pacific Islander":0.646,"American Indian\/Alaska Native":0.234,"Multiple Races":0.507},
    {"Location":"Nebraska","White":0.682,"Black":0.454,"Hispanic":0.441,"Asian\/Native Hawaiian and Pacific Islander":0.766,"American Indian\/Alaska Native":0.337,"Multiple Races":0.594},
    {"Location":"Nevada","White":0.632,"Black":0.427,"Hispanic":0.473,"Asian\/Native Hawaiian and Pacific Islander":0.597,"American Indian\/Alaska Native":0.416,"Multiple Races":0.547},
    {"Location":"New Hampshire","White":0.696,"Black":0.587,"Hispanic":0.447,"Asian\/Native Hawaiian and Pacific Islander":0.766,"American Indian\/Alaska Native":0.654,"Multiple Races":0.664},
    {"Location":"New Jersey","White":0.738,"Black":0.542,"Hispanic":0.451,"Asian\/Native Hawaiian and Pacific Islander":0.761,"American Indian\/Alaska Native":0.405,"Multiple Races":0.61},
    {"Location":"New Mexico","White":0.563,"Black":0.438,"Hispanic":0.389,"Asian\/Native Hawaiian and Pacific Islander":0.652,"American Indian\/Alaska Native":0.212,"Multiple Races":0.514},
    {"Location":"New York","White":0.666,"Black":0.463,"Hispanic":0.396,"Asian\/Native Hawaiian and Pacific Islander":0.5,"American Indian\/Alaska Native":0.429,"Multiple Races":0.549},
    {"Location":"North Carolina","White":0.63,"Black":0.473,"Hispanic":0.321,"Asian\/Native Hawaiian and Pacific Islander":0.662,"American Indian\/Alaska Native":0.37,"Multiple Races":0.511},
    {"Location":"North Dakota","White":0.726,"Black":0.0,"Hispanic":0.435,"Asian\/Native Hawaiian and Pacific Islander":0.63,"American Indian\/Alaska Native":0.249,"Multiple Races":0.486},
    {"Location":"Ohio","White":0.67,"Black":0.409,"Hispanic":0.438,"Asian\/Native Hawaiian and Pacific Islander":0.647,"American Indian\/Alaska Native":0.419,"Multiple Races":0.486},
    {"Location":"Oklahoma","White":0.579,"Black":0.372,"Hispanic":0.339,"Asian\/Native Hawaiian and Pacific Islander":0.556,"American Indian\/Alaska Native":0.384,"Multiple Races":0.452},
    {"Location":"Oregon","White":0.606,"Black":0.621,"Hispanic":0.446,"Asian\/Native Hawaiian and Pacific Islander":0.653,"American Indian\/Alaska Native":0.457,"Multiple Races":0.592},
    {"Location":"Pennsylvania","White":0.684,"Black":0.42,"Hispanic":0.401,"Asian\/Native Hawaiian and Pacific Islander":0.604,"American Indian\/Alaska Native":0.458,"Multiple Races":0.544},
    {"Location":"Rhode Island","White":0.715,"Black":0.479,"Hispanic":0.356,"Asian\/Native Hawaiian and Pacific Islander":0.644,"American Indian\/Alaska Native":0.0,"Multiple Races":0.552},
    {"Location":"South Carolina","White":0.62,"Black":0.442,"Hispanic":0.32,"Asian\/Native Hawaiian and Pacific Islander":0.657,"American Indian\/Alaska Native":0.464,"Multiple Races":0.473},
    {"Location":"South Dakota","White":0.68,"Black":0.72,"Hispanic":0.455,"Asian\/Native Hawaiian and Pacific Islander":0.598,"American Indian\/Alaska Native":0.188,"Multiple Races":0.524},
    {"Location":"Tennessee","White":0.617,"Black":0.491,"Hispanic":0.323,"Asian\/Native Hawaiian and Pacific Islander":0.588,"American Indian\/Alaska Native":0.549,"Multiple Races":0.491},
    {"Location":"Texas","White":0.675,"Black":0.509,"Hispanic":0.401,"Asian\/Native Hawaiian and Pacific Islander":0.669,"American Indian\/Alaska Native":0.568,"Multiple Races":0.6},
    {"Location":"Utah","White":0.713,"Black":0.467,"Hispanic":0.51,"Asian\/Native Hawaiian and Pacific Islander":0.647,"American Indian\/Alaska Native":0.435,"Multiple Races":0.674},
    {"Location":"Vermont","White":0.594,"Black":0.556,"Hispanic":0.553,"Asian\/Native Hawaiian and Pacific Islander":0.65,"American Indian\/Alaska Native":0.558,"Multiple Races":0.585},
    {"Location":"Virginia","White":0.689,"Black":0.494,"Hispanic":0.476,"Asian\/Native Hawaiian and Pacific Islander":0.685,"American Indian\/Alaska Native":0.383,"Multiple Races":0.604},
    {"Location":"Washington","White":0.662,"Black":0.497,"Hispanic":0.427,"Asian\/Native Hawaiian and Pacific Islander":0.697,"American Indian\/Alaska Native":0.367,"Multiple Races":0.609},
    {"Location":"West Virginia","White":0.543,"Black":0.323,"Hispanic":0.547,"Asian\/Native Hawaiian and Pacific Islander":0.648,"American Indian\/Alaska Native":0.0,"Multiple Races":0.445},
    {"Location":"Wisconsin","White":0.705,"Black":0.407,"Hispanic":0.45,"Asian\/Native Hawaiian and Pacific Islander":0.667,"American Indian\/Alaska Native":0.411,"Multiple Races":0.626},
    {"Location":"Wyoming","White":0.628,"Black":0.528,"Hispanic":0.534,"Asian\/Native Hawaiian and Pacific Islander":0.477,"American Indian\/Alaska Native":0.288,"Multiple Races":0.53}

];