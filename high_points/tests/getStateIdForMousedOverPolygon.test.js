// Jest includes:
const each = require('jest-each').default;

// Constant includes:
const constants = require('./environment/constants');
const kColorado               = constants.kColorado;
const kConnecticutCheckMark   = constants.kConnecticutCheckMark;
const kDelawareCheckMark      = constants.kDelawareCheckMark;
const kFlorida                = constants.kFlorida;
const kFloridaCheckBox        = constants.kFloridaCheckBox;
const kGeorgia                = constants.kGeorgia;
const kGeorgiaCheckMark       = constants.kGeorgiaCheckMark;
const kHawaii                 = constants.kHawaii;
const kHawaiiCheckBox         = constants.kHawaiiCheckBox;
const kIllinoisCheckMark      = constants.kIllinoisCheckMark;
const kIowa                   = constants.kIowa;
const kIowaCheckBox           = constants.kIowaCheckBox;
const kIowaCheckMark          = constants.kIowaCheckMark;
const kMaryland               = constants.kMaryland;
const kMarylandCheckMark      = constants.kMarylandCheckMark;
const kMassachusetts          = constants.kMassachusetts;
const kMassachusettsCheckMark = constants.kMassachusettsCheckMark;
const kMichiganCheckMark      = constants.kMichiganCheckMark;
const kMichiganPeninsula      = constants.kMichiganPeninsula;
const kMinnesota              = constants.kMinnesota;
const kMinnesotaCheckMark     = constants.kMinnesotaCheckMark;
const kMontana                = constants.kMontana;
const kMontanaCheckBox        = constants.kMontanaCheckBox;
const kNevada                 = constants.kNevada;
const kNevadaCheckBox         = constants.kNevadaCheckBox;
const kNevadaCheckMark        = constants.kNevadaCheckMark;
const kNewJerseyCheckMark     = constants.kNewJerseyCheckMark;
const kNewMexico              = constants.kNewMexico;
const kNewYork                = constants.kNewYork;
const kNewYorkCheckMark       = constants.kNewYorkCheckMark;
const kNorthCarolina          = constants.kNorthCarolina;
const kNorthCarolinaCheckBox  = constants.kNorthCarolinaCheckBox;
const kNorthCarolinaCheckMark = constants.kNorthCarolinaCheckMark;
const kOklahomaCheckMark      = constants.kOklahomaCheckMark;
const kOregon                 = constants.kOregon;
const kOregonCheckBox         = constants.kOregonCheckBox;
const kPennsylvania           = constants.kPennsylvania;
const kPennsylvaniaCheckMark  = constants.kPennsylvaniaCheckMark;
const kSouthCarolina          = constants.kSouthCarolina;
const kSouthCarolinaCheckMark = constants.kSouthCarolinaCheckMark;
const kTennessee              = constants.kTennessee;
const kTennesseeCheckBox      = constants.kTennesseeCheckBox;
const kTennesseeCheckMark     = constants.kTennesseeCheckMark;
const kTexasCheckMark         = constants.kTexasCheckMark;
const kUnpopulated            = constants.kUnpopulated;
const kUtah                   = constants.kUtah;
const kUtahCheckBox           = constants.kUtahCheckBox;
const kUtahCheckMark          = constants.kUtahCheckMark;
const kVermont                = constants.kVermont;
const kVermontCheckMark       = constants.kVermontCheckMark;
const kVirginia               = constants.kVirginia;
const kVirginiaCheckBox       = constants.kVirginiaCheckBox;
const kVirginiaCheckMark      = constants.kVirginiaCheckMark;
const kWestVirginia           = constants.kWestVirginia;
const kWestVirginiaCheckMark  = constants.kWestVirginiaCheckMark;
const kWisconsin              = constants.kWisconsin;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const getStateIdForMousedOverPolygon = mapFunctions.getStateIdForMousedOverPolygon;

const kInputAndExpectedOutputPairs = [
    [null,                    kUnpopulated      ],
    [undefined,               kUnpopulated      ],
    [kConnecticutCheckMark,   kMassachusetts    ],
    [kDelawareCheckMark,      kPennsylvania     ],
    [kFloridaCheckBox,        kFlorida          ],
    [kGeorgiaCheckMark,       kGeorgia          ],
    [kHawaiiCheckBox,         kHawaii           ],
    [kIllinoisCheckMark,      kWisconsin        ],
    [kIowaCheckBox,           kIowa             ],
    [kIowaCheckMark,          kIowa             ],
    [kMarylandCheckMark,      kMaryland         ],
    [kMassachusettsCheckMark, kVermont          ],
    [kMichiganCheckMark,      kMichiganPeninsula],
    [kMinnesotaCheckMark,     kMinnesota        ],
    [kMontanaCheckBox,        kMontana          ],
    [kNevadaCheckBox,         kNevada           ],
    [kNevadaCheckMark,        kNevada           ],
    [kNewJerseyCheckMark,     kNewYork          ],
    [kNewYorkCheckMark,       kNewYork          ],
    [kNorthCarolinaCheckBox,  kNorthCarolina    ],
    [kNorthCarolinaCheckMark, kNorthCarolina    ],
    [kOklahomaCheckMark,      kColorado         ],
    [kOregonCheckBox,         kOregon           ],
    [kPennsylvaniaCheckMark,  kPennsylvania     ],
    [kSouthCarolinaCheckMark, kSouthCarolina    ],
    [kTennesseeCheckBox,      kTennessee        ],
    [kTennesseeCheckMark,     kTennessee        ],
    [kTexasCheckMark,         kNewMexico        ],
    [kUtahCheckBox,           kUtah             ],
    [kUtahCheckMark,          kUtah             ],
    [kVermontCheckMark,       kVermont          ],
    [kVirginiaCheckBox,       kVirginia         ],
    [kVirginiaCheckMark,      kVirginia         ],
    [kWestVirginiaCheckMark,  kWestVirginia     ]
];

describe(`validate results of getStateIdForMousedOverPolygon() with expected inputs`, () => {
    each(kInputAndExpectedOutputPairs).it(
            `passing '%s' as an input to the function produces output '%s'`,
            (input, output) => {
        expect(getStateIdForMousedOverPolygon(input)).toBe(output);
    });
}); /* validate results of getStateIdForMousedOverPolygon() with expected inputs */
