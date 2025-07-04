// Jest includes:
const each = require('jest-each').default;

// Constant includes:
const constants = require('./environment/constants');
const kAlabama                = constants.kAlabama;
const kAlabamaCheckMark       = constants.kAlabamaCheckMark;
const kArizona                = constants.kArizona;
const kArizonaCheckMark       = constants.kArizonaCheckMark;
const kArkansas               = constants.kArkansas;
const kArkansasCheckMark      = constants.kArkansasCheckMark;
const kCalifornia             = constants.kCalifornia;
const kCaliforniaCheckMark    = constants.kCaliforniaCheckMark;
const kColorado               = constants.kColorado;
const kColoradoCheckMark      = constants.kColoradoCheckMark;
const kGeorgia                = constants.kGeorgia;
const kGeorgiaCheckMark       = constants.kGeorgiaCheckMark;
const kIndiana                = constants.kIndiana;
const kIndianaCheckMark       = constants.kIndianaCheckMark;
const kIowa                   = constants.kIowa;
const kIowaCheckMark          = constants.kIowaCheckMark;
const kKansas                 = constants.kKansas;
const kKansasCheckMark        = constants.kKansasCheckMark;
const kKentucky               = constants.kKentucky;
const kKentuckyCheckMark      = constants.kKentuckyCheckMark;
const kLouisiana              = constants.kLouisiana;
const kLouisianaCheckMark     = constants.kLouisianaCheckMark;
const kMaine                  = constants.kMaine;
const kMaineCheckMark         = constants.kMaineCheckMark;
const kMaryland               = constants.kMaryland;
const kMarylandCheckMark      = constants.kMarylandCheckMark;
const kMichiganCheckMark      = constants.kMichiganCheckMark;
const kMichiganPeninsula      = constants.kMichiganPeninsula;
const kMinnesota              = constants.kMinnesota;
const kMinnesotaCheckMark     = constants.kMinnesotaCheckMark;
const kMississippiCheckMark   = constants.kMississippiCheckMark;
const kMissouri               = constants.kMissouri;
const kMissouriCheckMark      = constants.kMissouriCheckMark;
const kNebraska               = constants.kNebraska;
const kNebraskaCheckMark      = constants.kNebraskaCheckMark;
const kNevada                 = constants.kNevada;
const kNevadaCheckMark        = constants.kNevadaCheckMark;
const kNewHampshire           = constants.kNewHampshire;
const kNewHampshireCheckMark  = constants.kNewHampshireCheckMark;
const kNewMexico              = constants.kNewMexico;
const kNewMexicoCheckMark     = constants.kNewMexicoCheckMark;
const kNewYork                = constants.kNewYork;
const kNewYorkCheckMark       = constants.kNewYorkCheckMark;
const kNorthCarolina          = constants.kNorthCarolina;
const kNorthCarolinaCheckMark = constants.kNorthCarolinaCheckMark;
const kNorthDakota            = constants.kNorthDakota;
const kNorthDakotaCheckMark   = constants.kNorthDakotaCheckMark;
const kOhio                   = constants.kOhio;
const kOhioCheckMark          = constants.kOhioCheckMark;
const kPennsylvania           = constants.kPennsylvania;
const kPennsylvaniaCheckMark  = constants.kPennsylvaniaCheckMark;
const kRhodeIsland            = constants.kRhodeIsland;
const kRhodeIslandCheckMark   = constants.kRhodeIslandCheckMark;
const kSouthCarolina          = constants.kSouthCarolina;
const kSouthCarolinaCheckMark = constants.kSouthCarolinaCheckMark;
const kSouthDakota            = constants.kSouthDakota;
const kSouthDakotaCheckMark   = constants.kSouthDakotaCheckMark;
const kTennessee              = constants.kTennessee;
const kTennesseeCheckMark     = constants.kTennesseeCheckMark;
const kUnpopulated            = constants.kUnpopulated;
const kUtah                   = constants.kUtah;
const kUtahCheckMark          = constants.kUtahCheckMark;
const kVermont                = constants.kVermont;
const kVermontCheckMark       = constants.kVermontCheckMark;
const kVirginia               = constants.kVirginia;
const kVirginiaCheckMark      = constants.kVirginiaCheckMark;
const kWestVirginia           = constants.kWestVirginia;
const kWestVirginiaCheckMark  = constants.kWestVirginiaCheckMark;
const kWisconsin              = constants.kWisconsin;
const kWisconsinCheckMark     = constants.kWisconsinCheckMark;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const getStateIdForClickedPolygon = mapFunctions.getStateIdForClickedPolygon;

const kInputAndExpectedOutputPairs = [
    [null,                    kUnpopulated      ],
    [undefined,               kUnpopulated      ],
    [kAlabamaCheckMark,       kAlabama          ],
    [kArizonaCheckMark,       kArizona          ],
    [kArkansasCheckMark,      kArkansas         ],
    [kCaliforniaCheckMark,    kCalifornia       ],
    [kColoradoCheckMark,      kColorado         ],
    [kGeorgiaCheckMark,       kGeorgia          ],
    [kIndianaCheckMark,       kIndiana          ],
    [kIowaCheckMark,          kIowa             ],
    [kKansasCheckMark,        kKansas           ],
    [kKentuckyCheckMark,      kKentucky         ],
    [kLouisianaCheckMark,     kLouisiana        ],
    [kMaineCheckMark,         kMaine            ],
    [kMarylandCheckMark,      kMaryland         ],
    [kMichiganCheckMark,      kMichiganPeninsula],
    [kMinnesotaCheckMark,     kMinnesota        ],
    [kMississippiCheckMark,   kTennessee        ],
    [kMissouriCheckMark,      kMissouri         ],
    [kNebraskaCheckMark,      kNebraska         ],
    [kNevadaCheckMark,        kNevada           ],
    [kNewHampshireCheckMark,  kNewHampshire     ],
    [kNewMexicoCheckMark,     kNewMexico        ],
    [kNewYorkCheckMark,       kNewYork          ],
    [kNorthCarolinaCheckMark, kNorthCarolina    ],
    [kNorthDakotaCheckMark,   kNorthDakota      ],
    [kOhioCheckMark,          kOhio             ],
    [kPennsylvaniaCheckMark,  kPennsylvania     ],
    [kRhodeIslandCheckMark,   kRhodeIsland      ],
    [kSouthCarolinaCheckMark, kSouthCarolina    ],
    [kSouthDakotaCheckMark,   kSouthDakota      ],
    [kTennesseeCheckMark,     kTennessee        ],
    [kUtahCheckMark,          kUtah             ],
    [kVermontCheckMark,       kVermont          ],
    [kVirginiaCheckMark,      kVirginia         ],
    [kWestVirginiaCheckMark,  kWestVirginia     ],
    [kWisconsinCheckMark,     kWisconsin        ]
];

describe(`validate results of getStateIdForClickedPolygon() with expected inputs`, () => {
    each(kInputAndExpectedOutputPairs).it(
            `passing '%s' as an input to the function produces output '%s'`,
            (input, output) => {
        expect(getStateIdForClickedPolygon(input)).toBe(output);
    });
}); /* validate results of getStateIdForClickedPolygon() with expected inputs */
