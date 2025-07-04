// Jest includes:
const each = require('jest-each').default;

// Constant includes:
const constants                    = require('./environment/constants');
const kCursorAttributeValueAuto    = constants.kCursorAttributeValueAuto;
const kCursorAttributeValuePointer = constants.kCursorAttributeValuePointer;
const kLightGreenFill              = constants.kLightGreenFill;
const kLightRedFill                = constants.kLightRedFill;
const kMichiganMainland            = constants.kMichiganMainland;
const kMichiganPeninsula           = constants.kMichiganPeninsula;
const kPrefixCheckBox              = constants.kPrefixCheckBox;
const kPrefixCheckMark             = constants.kPrefixCheckMark;
const kPrefixGreenState            = constants.kPrefixGreenState;
const kStateNameAlabama            = constants.kStateNameAlabama;
const kStateNameArizona            = constants.kStateNameArizona;
const kStateNameArkansas           = constants.kStateNameArkansas;
const kStateNameCalifornia         = constants.kStateNameCalifornia;
const kStateNameColorado           = constants.kStateNameColorado;
const kStateNameConnecticut        = constants.kStateNameConnecticut;
const kStateNameDelaware           = constants.kStateNameDelaware;
const kStateNameGeorgia            = constants.kStateNameGeorgia;
const kStateNameIllinois           = constants.kStateNameIllinois;
const kStateNameIndiana            = constants.kStateNameIndiana;
const kStateNameIowa               = constants.kStateNameIowa;
const kStateNameKansas             = constants.kStateNameKansas;
const kStateNameKentucky           = constants.kStateNameKentucky;
const kStateNameLouisiana          = constants.kStateNameLouisiana;
const kStateNameMaine              = constants.kStateNameMaine;
const kStateNameMaryland           = constants.kStateNameMaryland;
const kStateNameMassachusetts      = constants.kStateNameMassachusetts;
const kStateNameMichigan           = constants.kStateNameMichigan;
const kStateNameMinnesota          = constants.kStateNameMinnesota;
const kStateNameMississippi        = constants.kStateNameMississippi;
const kStateNameMissouri           = constants.kStateNameMissouri;
const kStateNameNebraska           = constants.kStateNameNebraska;
const kStateNameNevada             = constants.kStateNameNevada;
const kStateNameNewHampshire       = constants.kStateNameNewHampshire;
const kStateNameNewJersey          = constants.kStateNameNewJersey;
const kStateNameNewMexico          = constants.kStateNameNewMexico;
const kStateNameNewYork            = constants.kStateNameNewYork;
const kStateNameNorthCarolina      = constants.kStateNameNorthCarolina;
const kStateNameNorthDakota        = constants.kStateNameNorthDakota;
const kStateNameOhio               = constants.kStateNameOhio;
const kStateNameOklahoma           = constants.kStateNameOklahoma;
const kStateNamePennsylvania       = constants.kStateNamePennsylvania;
const kStateNameRhodeIsland        = constants.kStateNameRhodeIsland;
const kStateNameSouthCarolina      = constants.kStateNameSouthCarolina;
const kStateNameSouthDakota        = constants.kStateNameSouthDakota;
const kStateNameTennessee          = constants.kStateNameTennessee;
const kStateNameTexas              = constants.kStateNameTexas;
const kStateNameUtah               = constants.kStateNameUtah;
const kStateNameVermont            = constants.kStateNameVermont;
const kStateNameVirginia           = constants.kStateNameVirginia;
const kStateNameWestVirginia       = constants.kStateNameWestVirginia;
const kStateNameWisconsin          = constants.kStateNameWisconsin;
const kStyle                       = constants.kStyle;
const kVisibilityHidden            = constants.kVisibilityHidden;
const kVisibilityVisible           = constants.kVisibilityVisible;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const onChangeValueOfSliderThumb = mapFunctions.onChangeValueOfSliderThumb;
const onPageLoad                 = mapFunctions.onPageLoad;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kYearSliderValueAfter2014 = testConstants.kYearSliderValueAfter2014;
const kYearSliderValueAfter2015 = testConstants.kYearSliderValueAfter2015;
const kYearSliderValueAfter2016 = testConstants.kYearSliderValueAfter2016;
const kYearSliderValueAfter2017 = testConstants.kYearSliderValueAfter2017;
const kYearSliderValueAfter2018 = testConstants.kYearSliderValueAfter2018;
const kYearSliderValueAfter2019 = testConstants.kYearSliderValueAfter2019;
const kYearSliderValueAfter2020 = testConstants.kYearSliderValueAfter2020;
const kYearSliderValueAfter2021 = testConstants.kYearSliderValueAfter2021;
const kYearSliderValueAfter2022 = testConstants.kYearSliderValueAfter2022;
const kYearSliderValueAfter2023 = testConstants.kYearSliderValueAfter2023;
const kYearSliderValueAfter2024 = testConstants.kYearSliderValueAfter2024;

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const changeValueOfSliderThumb = testFunctions.changeValueOfSliderThumb;

const casesForMichiganHighPointedByTom = [
    [kYearSliderValueAfter2019, kStateNameMichigan],
    [kYearSliderValueAfter2020, kStateNameMichigan],
    [kYearSliderValueAfter2021, kStateNameMichigan],
    [kYearSliderValueAfter2022, kStateNameMichigan],
    [kYearSliderValueAfter2023, kStateNameMichigan]
    ];

const casesForMichiganNotHighPointedByTom = [
    [kYearSliderValueAfter2014, kStateNameMichigan],
    [kYearSliderValueAfter2015, kStateNameMichigan],
    [kYearSliderValueAfter2016, kStateNameMichigan],
    [kYearSliderValueAfter2017, kStateNameMichigan],
    [kYearSliderValueAfter2018, kStateNameMichigan]
    ];

const casesForOnePolylineStatesHighPointedByTom = [
    [kYearSliderValueAfter2015, kStateNameNewHampshire ],
    [kYearSliderValueAfter2016, kStateNameMassachusetts],
    [kYearSliderValueAfter2016, kStateNameNewHampshire ],
    [kYearSliderValueAfter2016, kStateNameTexas        ],
    [kYearSliderValueAfter2017, kStateNameKentucky     ],
    [kYearSliderValueAfter2017, kStateNameMassachusetts],
    [kYearSliderValueAfter2017, kStateNameNewHampshire ],
    [kYearSliderValueAfter2017, kStateNameTexas        ],
    [kYearSliderValueAfter2018, kStateNameArkansas     ],
    [kYearSliderValueAfter2018, kStateNameColorado     ],
    [kYearSliderValueAfter2018, kStateNameKentucky     ],
    [kYearSliderValueAfter2018, kStateNameLouisiana    ],
    [kYearSliderValueAfter2018, kStateNameMaine        ],
    [kYearSliderValueAfter2018, kStateNameMassachusetts],
    [kYearSliderValueAfter2018, kStateNameMississippi  ],
    [kYearSliderValueAfter2018, kStateNameNewHampshire ],
    [kYearSliderValueAfter2018, kStateNameNewYork      ],
    [kYearSliderValueAfter2018, kStateNameRhodeIsland  ],
    [kYearSliderValueAfter2018, kStateNameTexas        ],
    [kYearSliderValueAfter2018, kStateNameVermont      ],
    [kYearSliderValueAfter2019, kStateNameArkansas     ],
    [kYearSliderValueAfter2019, kStateNameColorado     ],
    [kYearSliderValueAfter2019, kStateNameGeorgia      ],
    [kYearSliderValueAfter2019, kStateNameIllinois     ],
    [kYearSliderValueAfter2019, kStateNameKansas       ],
    [kYearSliderValueAfter2019, kStateNameKentucky     ],
    [kYearSliderValueAfter2019, kStateNameLouisiana    ],
    [kYearSliderValueAfter2019, kStateNameMaine        ],
    [kYearSliderValueAfter2019, kStateNameMassachusetts],
    [kYearSliderValueAfter2019, kStateNameMinnesota    ],
    [kYearSliderValueAfter2019, kStateNameMississippi  ],
    [kYearSliderValueAfter2019, kStateNameNebraska     ],
    [kYearSliderValueAfter2019, kStateNameNewHampshire ],
    [kYearSliderValueAfter2019, kStateNameNewMexico    ],
    [kYearSliderValueAfter2019, kStateNameNewYork      ],
    [kYearSliderValueAfter2019, kStateNameOklahoma     ],
    [kYearSliderValueAfter2019, kStateNameRhodeIsland  ],
    [kYearSliderValueAfter2019, kStateNameSouthCarolina],
    [kYearSliderValueAfter2019, kStateNameTexas        ],
    [kYearSliderValueAfter2019, kStateNameVermont      ],
    [kYearSliderValueAfter2019, kStateNameWisconsin    ],
    [kYearSliderValueAfter2020, kStateNameArizona      ],
    [kYearSliderValueAfter2020, kStateNameArkansas     ],
    [kYearSliderValueAfter2020, kStateNameColorado     ],
    [kYearSliderValueAfter2020, kStateNameConnecticut  ],
    [kYearSliderValueAfter2020, kStateNameDelaware     ],
    [kYearSliderValueAfter2020, kStateNameGeorgia      ],
    [kYearSliderValueAfter2020, kStateNameIllinois     ],
    [kYearSliderValueAfter2020, kStateNameIndiana      ],
    [kYearSliderValueAfter2020, kStateNameKansas       ],
    [kYearSliderValueAfter2020, kStateNameKentucky     ],
    [kYearSliderValueAfter2020, kStateNameLouisiana    ],
    [kYearSliderValueAfter2020, kStateNameMaine        ],
    [kYearSliderValueAfter2020, kStateNameMaryland     ],
    [kYearSliderValueAfter2020, kStateNameMassachusetts],
    [kYearSliderValueAfter2020, kStateNameMinnesota    ],
    [kYearSliderValueAfter2020, kStateNameMississippi  ],
    [kYearSliderValueAfter2020, kStateNameNebraska     ],
    [kYearSliderValueAfter2020, kStateNameNewHampshire ],
    [kYearSliderValueAfter2020, kStateNameNewJersey    ],
    [kYearSliderValueAfter2020, kStateNameNewMexico    ],
    [kYearSliderValueAfter2020, kStateNameNewYork      ],
    [kYearSliderValueAfter2020, kStateNameOhio         ],
    [kYearSliderValueAfter2020, kStateNameOklahoma     ],
    [kYearSliderValueAfter2020, kStateNamePennsylvania ],
    [kYearSliderValueAfter2020, kStateNameRhodeIsland  ],
    [kYearSliderValueAfter2020, kStateNameSouthCarolina],
    [kYearSliderValueAfter2020, kStateNameTexas        ],
    [kYearSliderValueAfter2020, kStateNameVermont      ],
    [kYearSliderValueAfter2020, kStateNameWestVirginia ],
    [kYearSliderValueAfter2020, kStateNameWisconsin    ],
    [kYearSliderValueAfter2021, kStateNameAlabama      ],
    [kYearSliderValueAfter2021, kStateNameArizona      ],
    [kYearSliderValueAfter2021, kStateNameArkansas     ],
    [kYearSliderValueAfter2021, kStateNameCalifornia   ],
    [kYearSliderValueAfter2021, kStateNameColorado     ],
    [kYearSliderValueAfter2021, kStateNameConnecticut  ],
    [kYearSliderValueAfter2021, kStateNameDelaware     ],
    [kYearSliderValueAfter2021, kStateNameGeorgia      ],
    [kYearSliderValueAfter2021, kStateNameIllinois     ],
    [kYearSliderValueAfter2021, kStateNameIndiana      ],
    [kYearSliderValueAfter2021, kStateNameKansas       ],
    [kYearSliderValueAfter2021, kStateNameKentucky     ],
    [kYearSliderValueAfter2021, kStateNameLouisiana    ],
    [kYearSliderValueAfter2021, kStateNameMaine        ],
    [kYearSliderValueAfter2021, kStateNameMaryland     ],
    [kYearSliderValueAfter2021, kStateNameMassachusetts],
    [kYearSliderValueAfter2021, kStateNameMinnesota    ],
    [kYearSliderValueAfter2021, kStateNameMississippi  ],
    [kYearSliderValueAfter2021, kStateNameNebraska     ],
    [kYearSliderValueAfter2021, kStateNameNewHampshire ],
    [kYearSliderValueAfter2021, kStateNameNewJersey    ],
    [kYearSliderValueAfter2021, kStateNameNewMexico    ],
    [kYearSliderValueAfter2021, kStateNameNewYork      ],
    [kYearSliderValueAfter2021, kStateNameNorthDakota  ],
    [kYearSliderValueAfter2021, kStateNameOhio         ],
    [kYearSliderValueAfter2021, kStateNameOklahoma     ],
    [kYearSliderValueAfter2021, kStateNamePennsylvania ],
    [kYearSliderValueAfter2021, kStateNameRhodeIsland  ],
    [kYearSliderValueAfter2021, kStateNameSouthCarolina],
    [kYearSliderValueAfter2021, kStateNameSouthDakota  ],
    [kYearSliderValueAfter2021, kStateNameTennessee    ],
    [kYearSliderValueAfter2021, kStateNameTexas        ],
    [kYearSliderValueAfter2021, kStateNameVermont      ],
    [kYearSliderValueAfter2021, kStateNameWestVirginia ],
    [kYearSliderValueAfter2021, kStateNameWisconsin    ],
    [kYearSliderValueAfter2022, kStateNameAlabama      ],
    [kYearSliderValueAfter2022, kStateNameArizona      ],
    [kYearSliderValueAfter2022, kStateNameArkansas     ],
    [kYearSliderValueAfter2022, kStateNameCalifornia   ],
    [kYearSliderValueAfter2022, kStateNameColorado     ],
    [kYearSliderValueAfter2022, kStateNameConnecticut  ],
    [kYearSliderValueAfter2022, kStateNameDelaware     ],
    [kYearSliderValueAfter2022, kStateNameGeorgia      ],
    [kYearSliderValueAfter2022, kStateNameIllinois     ],
    [kYearSliderValueAfter2022, kStateNameIndiana      ],
    [kYearSliderValueAfter2022, kStateNameIowa         ],
    [kYearSliderValueAfter2022, kStateNameKansas       ],
    [kYearSliderValueAfter2022, kStateNameKentucky     ],
    [kYearSliderValueAfter2022, kStateNameLouisiana    ],
    [kYearSliderValueAfter2022, kStateNameMaine        ],
    [kYearSliderValueAfter2022, kStateNameMaryland     ],
    [kYearSliderValueAfter2022, kStateNameMassachusetts],
    [kYearSliderValueAfter2022, kStateNameMinnesota    ],
    [kYearSliderValueAfter2022, kStateNameMississippi  ],
    [kYearSliderValueAfter2022, kStateNameMissouri     ],
    [kYearSliderValueAfter2022, kStateNameNebraska     ],
    [kYearSliderValueAfter2022, kStateNameNewHampshire ],
    [kYearSliderValueAfter2022, kStateNameNewJersey    ],
    [kYearSliderValueAfter2022, kStateNameNewMexico    ],
    [kYearSliderValueAfter2022, kStateNameNewYork      ],
    [kYearSliderValueAfter2022, kStateNameNorthDakota  ],
    [kYearSliderValueAfter2022, kStateNameOhio         ],
    [kYearSliderValueAfter2022, kStateNameOklahoma     ],
    [kYearSliderValueAfter2022, kStateNamePennsylvania ],
    [kYearSliderValueAfter2022, kStateNameRhodeIsland  ],
    [kYearSliderValueAfter2022, kStateNameSouthCarolina],
    [kYearSliderValueAfter2022, kStateNameSouthDakota  ],
    [kYearSliderValueAfter2022, kStateNameTennessee    ],
    [kYearSliderValueAfter2022, kStateNameTexas        ],
    [kYearSliderValueAfter2022, kStateNameUtah         ],
    [kYearSliderValueAfter2022, kStateNameVermont      ],
    [kYearSliderValueAfter2022, kStateNameWestVirginia ],
    [kYearSliderValueAfter2022, kStateNameWisconsin    ],
    [kYearSliderValueAfter2023, kStateNameAlabama      ],
    [kYearSliderValueAfter2023, kStateNameArizona      ],
    [kYearSliderValueAfter2023, kStateNameArkansas     ],
    [kYearSliderValueAfter2023, kStateNameCalifornia   ],
    [kYearSliderValueAfter2023, kStateNameColorado     ],
    [kYearSliderValueAfter2023, kStateNameConnecticut  ],
    [kYearSliderValueAfter2023, kStateNameDelaware     ],
    [kYearSliderValueAfter2023, kStateNameGeorgia      ],
    [kYearSliderValueAfter2023, kStateNameIllinois     ],
    [kYearSliderValueAfter2023, kStateNameIndiana      ],
    [kYearSliderValueAfter2023, kStateNameIowa         ],
    [kYearSliderValueAfter2023, kStateNameKansas       ],
    [kYearSliderValueAfter2023, kStateNameKentucky     ],
    [kYearSliderValueAfter2023, kStateNameLouisiana    ],
    [kYearSliderValueAfter2023, kStateNameMaine        ],
    [kYearSliderValueAfter2023, kStateNameMaryland     ],
    [kYearSliderValueAfter2023, kStateNameMassachusetts],
    [kYearSliderValueAfter2023, kStateNameMinnesota    ],
    [kYearSliderValueAfter2023, kStateNameMississippi  ],
    [kYearSliderValueAfter2023, kStateNameMissouri     ],
    [kYearSliderValueAfter2023, kStateNameNebraska     ],
    [kYearSliderValueAfter2023, kStateNameNewHampshire ],
    [kYearSliderValueAfter2023, kStateNameNewJersey    ],
    [kYearSliderValueAfter2023, kStateNameNewMexico    ],
    [kYearSliderValueAfter2023, kStateNameNewYork      ],
    [kYearSliderValueAfter2023, kStateNameNorthCarolina],
    [kYearSliderValueAfter2023, kStateNameNorthDakota  ],
    [kYearSliderValueAfter2023, kStateNameOhio         ],
    [kYearSliderValueAfter2023, kStateNameOklahoma     ],
    [kYearSliderValueAfter2023, kStateNamePennsylvania ],
    [kYearSliderValueAfter2023, kStateNameRhodeIsland  ],
    [kYearSliderValueAfter2023, kStateNameSouthCarolina],
    [kYearSliderValueAfter2023, kStateNameSouthDakota  ],
    [kYearSliderValueAfter2023, kStateNameTennessee    ],
    [kYearSliderValueAfter2023, kStateNameTexas        ],
    [kYearSliderValueAfter2023, kStateNameUtah         ],
    [kYearSliderValueAfter2023, kStateNameVermont      ],
    [kYearSliderValueAfter2023, kStateNameVirginia     ],
    [kYearSliderValueAfter2023, kStateNameWestVirginia ],
    [kYearSliderValueAfter2023, kStateNameWisconsin    ],
    [kYearSliderValueAfter2024, kStateNameAlabama      ],
    [kYearSliderValueAfter2024, kStateNameArizona      ],
    [kYearSliderValueAfter2024, kStateNameArkansas     ],
    [kYearSliderValueAfter2024, kStateNameCalifornia   ],
    [kYearSliderValueAfter2024, kStateNameColorado     ],
    [kYearSliderValueAfter2024, kStateNameConnecticut  ],
    [kYearSliderValueAfter2024, kStateNameDelaware     ],
    [kYearSliderValueAfter2024, kStateNameGeorgia      ],
    [kYearSliderValueAfter2024, kStateNameIllinois     ],
    [kYearSliderValueAfter2024, kStateNameIndiana      ],
    [kYearSliderValueAfter2024, kStateNameIowa         ],
    [kYearSliderValueAfter2024, kStateNameKansas       ],
    [kYearSliderValueAfter2024, kStateNameKentucky     ],
    [kYearSliderValueAfter2024, kStateNameLouisiana    ],
    [kYearSliderValueAfter2024, kStateNameMaine        ],
    [kYearSliderValueAfter2024, kStateNameMaryland     ],
    [kYearSliderValueAfter2024, kStateNameMassachusetts],
    [kYearSliderValueAfter2024, kStateNameMinnesota    ],
    [kYearSliderValueAfter2024, kStateNameMississippi  ],
    [kYearSliderValueAfter2024, kStateNameMissouri     ],
    [kYearSliderValueAfter2024, kStateNameNebraska     ],
    [kYearSliderValueAfter2024, kStateNameNevada       ],
    [kYearSliderValueAfter2024, kStateNameNewHampshire ],
    [kYearSliderValueAfter2024, kStateNameNewJersey    ],
    [kYearSliderValueAfter2024, kStateNameNewMexico    ],
    [kYearSliderValueAfter2024, kStateNameNewYork      ],
    [kYearSliderValueAfter2024, kStateNameNorthCarolina],
    [kYearSliderValueAfter2024, kStateNameNorthDakota  ],
    [kYearSliderValueAfter2024, kStateNameOhio         ],
    [kYearSliderValueAfter2024, kStateNameOklahoma     ],
    [kYearSliderValueAfter2024, kStateNamePennsylvania ],
    [kYearSliderValueAfter2024, kStateNameRhodeIsland  ],
    [kYearSliderValueAfter2024, kStateNameSouthCarolina],
    [kYearSliderValueAfter2024, kStateNameSouthDakota  ],
    [kYearSliderValueAfter2024, kStateNameTennessee    ],
    [kYearSliderValueAfter2024, kStateNameTexas        ],
    [kYearSliderValueAfter2024, kStateNameUtah         ],
    [kYearSliderValueAfter2024, kStateNameVermont      ],
    [kYearSliderValueAfter2024, kStateNameVirginia     ],
    [kYearSliderValueAfter2024, kStateNameWestVirginia ],
    [kYearSliderValueAfter2024, kStateNameWisconsin    ]
    ];

const casesForOnePolylineStatesNotHighPointedByTom = [
    [kYearSliderValueAfter2014, kStateNameAlabama      ],
    [kYearSliderValueAfter2014, kStateNameArizona      ],
    [kYearSliderValueAfter2014, kStateNameArkansas     ],
    [kYearSliderValueAfter2014, kStateNameCalifornia   ],
    [kYearSliderValueAfter2014, kStateNameColorado     ],
    [kYearSliderValueAfter2014, kStateNameConnecticut  ],
    [kYearSliderValueAfter2014, kStateNameDelaware     ],
    [kYearSliderValueAfter2014, kStateNameGeorgia      ],
    [kYearSliderValueAfter2014, kStateNameIllinois     ],
    [kYearSliderValueAfter2014, kStateNameIndiana      ],
    [kYearSliderValueAfter2014, kStateNameIowa         ],
    [kYearSliderValueAfter2014, kStateNameKansas       ],
    [kYearSliderValueAfter2014, kStateNameKentucky     ],
    [kYearSliderValueAfter2014, kStateNameLouisiana    ],
    [kYearSliderValueAfter2014, kStateNameMaine        ],
    [kYearSliderValueAfter2014, kStateNameMaryland     ],
    [kYearSliderValueAfter2014, kStateNameMassachusetts],
    [kYearSliderValueAfter2014, kStateNameMinnesota    ],
    [kYearSliderValueAfter2014, kStateNameMississippi  ],
    [kYearSliderValueAfter2014, kStateNameMissouri     ],
    [kYearSliderValueAfter2014, kStateNameNebraska     ],
    [kYearSliderValueAfter2014, kStateNameNevada       ],
    [kYearSliderValueAfter2014, kStateNameNewHampshire ],
    [kYearSliderValueAfter2014, kStateNameNewJersey    ],
    [kYearSliderValueAfter2014, kStateNameNewMexico    ],
    [kYearSliderValueAfter2014, kStateNameNewYork      ],
    [kYearSliderValueAfter2014, kStateNameNorthCarolina],
    [kYearSliderValueAfter2014, kStateNameNorthDakota  ],
    [kYearSliderValueAfter2014, kStateNameOhio         ],
    [kYearSliderValueAfter2014, kStateNameOklahoma     ],
    [kYearSliderValueAfter2014, kStateNamePennsylvania ],
    [kYearSliderValueAfter2014, kStateNameRhodeIsland  ],
    [kYearSliderValueAfter2014, kStateNameSouthCarolina],
    [kYearSliderValueAfter2014, kStateNameSouthDakota  ],
    [kYearSliderValueAfter2014, kStateNameTennessee    ],
    [kYearSliderValueAfter2014, kStateNameTexas        ],
    [kYearSliderValueAfter2014, kStateNameUtah         ],
    [kYearSliderValueAfter2014, kStateNameVermont      ],
    [kYearSliderValueAfter2014, kStateNameVirginia     ],
    [kYearSliderValueAfter2014, kStateNameWestVirginia ],
    [kYearSliderValueAfter2014, kStateNameWisconsin    ],
    [kYearSliderValueAfter2015, kStateNameAlabama      ],
    [kYearSliderValueAfter2015, kStateNameArizona      ],
    [kYearSliderValueAfter2015, kStateNameArkansas     ],
    [kYearSliderValueAfter2015, kStateNameCalifornia   ],
    [kYearSliderValueAfter2015, kStateNameColorado     ],
    [kYearSliderValueAfter2015, kStateNameConnecticut  ],
    [kYearSliderValueAfter2015, kStateNameDelaware     ],
    [kYearSliderValueAfter2015, kStateNameGeorgia      ],
    [kYearSliderValueAfter2015, kStateNameIllinois     ],
    [kYearSliderValueAfter2015, kStateNameIndiana      ],
    [kYearSliderValueAfter2015, kStateNameIowa         ],
    [kYearSliderValueAfter2015, kStateNameKansas       ],
    [kYearSliderValueAfter2015, kStateNameKentucky     ],
    [kYearSliderValueAfter2015, kStateNameLouisiana    ],
    [kYearSliderValueAfter2015, kStateNameMaine        ],
    [kYearSliderValueAfter2015, kStateNameMaryland     ],
    [kYearSliderValueAfter2015, kStateNameMassachusetts],
    [kYearSliderValueAfter2015, kStateNameMinnesota    ],
    [kYearSliderValueAfter2015, kStateNameMississippi  ],
    [kYearSliderValueAfter2015, kStateNameMissouri     ],
    [kYearSliderValueAfter2015, kStateNameNebraska     ],
    [kYearSliderValueAfter2015, kStateNameNevada       ],
    [kYearSliderValueAfter2015, kStateNameNewJersey    ],
    [kYearSliderValueAfter2015, kStateNameNewMexico    ],
    [kYearSliderValueAfter2015, kStateNameNewYork      ],
    [kYearSliderValueAfter2015, kStateNameNorthCarolina],
    [kYearSliderValueAfter2015, kStateNameNorthDakota  ],
    [kYearSliderValueAfter2015, kStateNameOhio         ],
    [kYearSliderValueAfter2015, kStateNameOklahoma     ],
    [kYearSliderValueAfter2015, kStateNamePennsylvania ],
    [kYearSliderValueAfter2015, kStateNameRhodeIsland  ],
    [kYearSliderValueAfter2015, kStateNameSouthCarolina],
    [kYearSliderValueAfter2015, kStateNameSouthDakota  ],
    [kYearSliderValueAfter2015, kStateNameTennessee    ],
    [kYearSliderValueAfter2015, kStateNameTexas        ],
    [kYearSliderValueAfter2015, kStateNameUtah         ],
    [kYearSliderValueAfter2015, kStateNameVermont      ],
    [kYearSliderValueAfter2015, kStateNameVirginia     ],
    [kYearSliderValueAfter2015, kStateNameWestVirginia ],
    [kYearSliderValueAfter2015, kStateNameWisconsin    ],
    [kYearSliderValueAfter2016, kStateNameAlabama      ],
    [kYearSliderValueAfter2016, kStateNameArizona      ],
    [kYearSliderValueAfter2016, kStateNameArkansas     ],
    [kYearSliderValueAfter2016, kStateNameCalifornia   ],
    [kYearSliderValueAfter2016, kStateNameColorado     ],
    [kYearSliderValueAfter2016, kStateNameConnecticut  ],
    [kYearSliderValueAfter2016, kStateNameDelaware     ],
    [kYearSliderValueAfter2016, kStateNameGeorgia      ],
    [kYearSliderValueAfter2016, kStateNameIllinois     ],
    [kYearSliderValueAfter2016, kStateNameIndiana      ],
    [kYearSliderValueAfter2016, kStateNameIowa         ],
    [kYearSliderValueAfter2016, kStateNameKansas       ],
    [kYearSliderValueAfter2016, kStateNameKentucky     ],
    [kYearSliderValueAfter2016, kStateNameLouisiana    ],
    [kYearSliderValueAfter2016, kStateNameMaine        ],
    [kYearSliderValueAfter2016, kStateNameMaryland     ],
    [kYearSliderValueAfter2016, kStateNameMinnesota    ],
    [kYearSliderValueAfter2016, kStateNameMississippi  ],
    [kYearSliderValueAfter2016, kStateNameMissouri     ],
    [kYearSliderValueAfter2016, kStateNameNebraska     ],
    [kYearSliderValueAfter2016, kStateNameNevada       ],
    [kYearSliderValueAfter2016, kStateNameNewJersey    ],
    [kYearSliderValueAfter2016, kStateNameNewMexico    ],
    [kYearSliderValueAfter2016, kStateNameNewYork      ],
    [kYearSliderValueAfter2016, kStateNameNorthCarolina],
    [kYearSliderValueAfter2016, kStateNameNorthDakota  ],
    [kYearSliderValueAfter2016, kStateNameOhio         ],
    [kYearSliderValueAfter2016, kStateNameOklahoma     ],
    [kYearSliderValueAfter2016, kStateNamePennsylvania ],
    [kYearSliderValueAfter2016, kStateNameRhodeIsland  ],
    [kYearSliderValueAfter2016, kStateNameSouthCarolina],
    [kYearSliderValueAfter2016, kStateNameSouthDakota  ],
    [kYearSliderValueAfter2016, kStateNameTennessee    ],
    [kYearSliderValueAfter2016, kStateNameUtah         ],
    [kYearSliderValueAfter2016, kStateNameVermont      ],
    [kYearSliderValueAfter2016, kStateNameVirginia     ],
    [kYearSliderValueAfter2016, kStateNameWestVirginia ],
    [kYearSliderValueAfter2016, kStateNameWisconsin    ],
    [kYearSliderValueAfter2017, kStateNameAlabama      ],
    [kYearSliderValueAfter2017, kStateNameArizona      ],
    [kYearSliderValueAfter2017, kStateNameArkansas     ],
    [kYearSliderValueAfter2017, kStateNameCalifornia   ],
    [kYearSliderValueAfter2017, kStateNameColorado     ],
    [kYearSliderValueAfter2017, kStateNameConnecticut  ],
    [kYearSliderValueAfter2017, kStateNameDelaware     ],
    [kYearSliderValueAfter2017, kStateNameGeorgia      ],
    [kYearSliderValueAfter2017, kStateNameIllinois     ],
    [kYearSliderValueAfter2017, kStateNameIndiana      ],
    [kYearSliderValueAfter2017, kStateNameIowa         ],
    [kYearSliderValueAfter2017, kStateNameKansas       ],
    [kYearSliderValueAfter2017, kStateNameLouisiana    ],
    [kYearSliderValueAfter2017, kStateNameMaine        ],
    [kYearSliderValueAfter2017, kStateNameMaryland     ],
    [kYearSliderValueAfter2017, kStateNameMinnesota    ],
    [kYearSliderValueAfter2017, kStateNameMississippi  ],
    [kYearSliderValueAfter2017, kStateNameMissouri     ],
    [kYearSliderValueAfter2017, kStateNameNebraska     ],
    [kYearSliderValueAfter2017, kStateNameNevada       ],
    [kYearSliderValueAfter2017, kStateNameNewJersey    ],
    [kYearSliderValueAfter2017, kStateNameNewMexico    ],
    [kYearSliderValueAfter2017, kStateNameNewYork      ],
    [kYearSliderValueAfter2017, kStateNameNorthCarolina],
    [kYearSliderValueAfter2017, kStateNameNorthDakota  ],
    [kYearSliderValueAfter2017, kStateNameOhio         ],
    [kYearSliderValueAfter2017, kStateNameOklahoma     ],
    [kYearSliderValueAfter2017, kStateNamePennsylvania ],
    [kYearSliderValueAfter2017, kStateNameRhodeIsland  ],
    [kYearSliderValueAfter2017, kStateNameSouthCarolina],
    [kYearSliderValueAfter2017, kStateNameSouthDakota  ],
    [kYearSliderValueAfter2017, kStateNameTennessee    ],
    [kYearSliderValueAfter2017, kStateNameUtah         ],
    [kYearSliderValueAfter2017, kStateNameVermont      ],
    [kYearSliderValueAfter2017, kStateNameVirginia     ],
    [kYearSliderValueAfter2017, kStateNameWestVirginia ],
    [kYearSliderValueAfter2017, kStateNameWisconsin    ],
    [kYearSliderValueAfter2018, kStateNameAlabama      ],
    [kYearSliderValueAfter2018, kStateNameArizona      ],
    [kYearSliderValueAfter2018, kStateNameCalifornia   ],
    [kYearSliderValueAfter2018, kStateNameConnecticut  ],
    [kYearSliderValueAfter2018, kStateNameDelaware     ],
    [kYearSliderValueAfter2018, kStateNameGeorgia      ],
    [kYearSliderValueAfter2018, kStateNameIllinois     ],
    [kYearSliderValueAfter2018, kStateNameIndiana      ],
    [kYearSliderValueAfter2018, kStateNameIowa         ],
    [kYearSliderValueAfter2018, kStateNameKansas       ],
    [kYearSliderValueAfter2018, kStateNameMaryland     ],
    [kYearSliderValueAfter2018, kStateNameMinnesota    ],
    [kYearSliderValueAfter2018, kStateNameMissouri     ],
    [kYearSliderValueAfter2018, kStateNameNebraska     ],
    [kYearSliderValueAfter2018, kStateNameNevada       ],
    [kYearSliderValueAfter2018, kStateNameNewJersey    ],
    [kYearSliderValueAfter2018, kStateNameNewMexico    ],
    [kYearSliderValueAfter2018, kStateNameNorthCarolina],
    [kYearSliderValueAfter2018, kStateNameNorthDakota  ],
    [kYearSliderValueAfter2018, kStateNameOhio         ],
    [kYearSliderValueAfter2018, kStateNameOklahoma     ],
    [kYearSliderValueAfter2018, kStateNamePennsylvania ],
    [kYearSliderValueAfter2018, kStateNameSouthCarolina],
    [kYearSliderValueAfter2018, kStateNameSouthDakota  ],
    [kYearSliderValueAfter2018, kStateNameTennessee    ],
    [kYearSliderValueAfter2018, kStateNameUtah         ],
    [kYearSliderValueAfter2018, kStateNameVirginia     ],
    [kYearSliderValueAfter2018, kStateNameWestVirginia ],
    [kYearSliderValueAfter2018, kStateNameWisconsin    ],
    [kYearSliderValueAfter2019, kStateNameAlabama      ],
    [kYearSliderValueAfter2019, kStateNameArizona      ],
    [kYearSliderValueAfter2019, kStateNameCalifornia   ],
    [kYearSliderValueAfter2019, kStateNameConnecticut  ],
    [kYearSliderValueAfter2019, kStateNameDelaware     ],
    [kYearSliderValueAfter2019, kStateNameIndiana      ],
    [kYearSliderValueAfter2019, kStateNameIowa         ],
    [kYearSliderValueAfter2019, kStateNameMaryland     ],
    [kYearSliderValueAfter2019, kStateNameMissouri     ],
    [kYearSliderValueAfter2019, kStateNameNevada       ],
    [kYearSliderValueAfter2019, kStateNameNewJersey    ],
    [kYearSliderValueAfter2019, kStateNameNorthCarolina],
    [kYearSliderValueAfter2019, kStateNameNorthDakota  ],
    [kYearSliderValueAfter2019, kStateNameOhio         ],
    [kYearSliderValueAfter2019, kStateNamePennsylvania ],
    [kYearSliderValueAfter2019, kStateNameSouthDakota  ],
    [kYearSliderValueAfter2019, kStateNameTennessee    ],
    [kYearSliderValueAfter2019, kStateNameUtah         ],
    [kYearSliderValueAfter2019, kStateNameVirginia     ],
    [kYearSliderValueAfter2019, kStateNameWestVirginia ],
    [kYearSliderValueAfter2020, kStateNameAlabama      ],
    [kYearSliderValueAfter2020, kStateNameCalifornia   ],
    [kYearSliderValueAfter2020, kStateNameIowa         ],
    [kYearSliderValueAfter2020, kStateNameMissouri     ],
    [kYearSliderValueAfter2020, kStateNameNevada       ],
    [kYearSliderValueAfter2020, kStateNameNorthCarolina],
    [kYearSliderValueAfter2020, kStateNameNorthDakota  ],
    [kYearSliderValueAfter2020, kStateNameSouthDakota  ],
    [kYearSliderValueAfter2020, kStateNameTennessee    ],
    [kYearSliderValueAfter2020, kStateNameUtah         ],
    [kYearSliderValueAfter2020, kStateNameVirginia     ],
    [kYearSliderValueAfter2021, kStateNameIowa         ],
    [kYearSliderValueAfter2021, kStateNameMissouri     ],
    [kYearSliderValueAfter2021, kStateNameNevada       ],
    [kYearSliderValueAfter2021, kStateNameNorthCarolina],
    [kYearSliderValueAfter2021, kStateNameUtah         ],
    [kYearSliderValueAfter2021, kStateNameVirginia     ],
    [kYearSliderValueAfter2022, kStateNameNevada       ],
    [kYearSliderValueAfter2022, kStateNameNorthCarolina],
    [kYearSliderValueAfter2022, kStateNameVirginia     ],
    [kYearSliderValueAfter2023, kStateNameNevada       ]
    ];

const casesForStatesHighPointedByTom
    = casesForOnePolylineStatesHighPointedByTom.concat(casesForMichiganHighPointedByTom);

const casesForStatesNotHighPointedByTom
    = casesForOnePolylineStatesNotHighPointedByTom.concat(casesForMichiganNotHighPointedByTom);

const yearsBeforeTomHighPointedMichigan = [
    kYearSliderValueAfter2014,
    kYearSliderValueAfter2015,
    kYearSliderValueAfter2016,
    kYearSliderValueAfter2017,
    kYearSliderValueAfter2018
    ];

const yearsSinceTomHighPointedMichigan = [
    kYearSliderValueAfter2019,
    kYearSliderValueAfter2020,
    kYearSliderValueAfter2021,
    kYearSliderValueAfter2022,
    kYearSliderValueAfter2023
    ];

beforeEach(() => {
    onPageLoad();
}); // beforeEach()

describe(`validate results of onChangeValueOfSliderThumb() in cases where the check box should be
            visible`, () => {
    each(casesForStatesNotHighPointedByTom).it(
            `case for confirming that at slider value '%s', the check box for '%s' is visible`,
            (sliderValue, stateName) => {
        changeValueOfSliderThumb(sliderValue);
        const checkBoxId = kPrefixCheckBox + stateName;
        const checkBox = document.getElementById(checkBoxId);
        const checkMarkId = kPrefixCheckMark + stateName;
        const checkMark = document.getElementById(checkMarkId);
        expect(checkBox.getAttribute(kStyle)).toBe(null);
        expect(checkMark.getAttribute(kStyle)).toBe(null);

        onChangeValueOfSliderThumb();

        expect(checkBox.getAttribute(kStyle)).toBe(kVisibilityVisible);
        expect(checkMark.getAttribute(kStyle)).toBe(kVisibilityHidden);
    });
}); /* validate results of onChangeValueOfSliderThumb() in cases where the check box should be
        visible */

describe(`validate results of onChangeValueOfSliderThumb() in cases where the check mark should be
            visible`, () => {
    each(casesForStatesHighPointedByTom).it(
            `case for confirming that at slider value '%s', the check mark for '%s' is visible`,
            (sliderValue, stateName) => {
        const yearSlider = changeValueOfSliderThumb(sliderValue);
        const checkBoxId = kPrefixCheckBox + stateName;
        const checkBox = document.getElementById(checkBoxId);
        const checkMarkId = kPrefixCheckMark + stateName;
        const checkMark = document.getElementById(checkMarkId);
        expect(checkBox.getAttribute(kStyle)).toBe(null);
        expect(checkMark.getAttribute(kStyle)).toBe(null);

        onChangeValueOfSliderThumb();

        expect(yearSlider.value).toBe(sliderValue);
        expect(checkBox.getAttribute(kStyle)).toBe(kVisibilityHidden);
        expect(checkMark.getAttribute(kStyle)).toBe(kVisibilityVisible);
    });
}); /* validate results of onChangeValueOfSliderThumb() in cases where the check mark should be
        visible */

describe(`validate results of onChangeValueOfSliderThumb() in cases where the cursor attribute
            should be set to auto`, () => {
    each(casesForOnePolylineStatesNotHighPointedByTom).it(
            `case for confirming that at slider value '%s', the cursor attribute of '%s' is auto`,
            (sliderValue, stateName) => {
        changeValueOfSliderThumb(sliderValue);
        const stateId = kPrefixGreenState + stateName;
        const state = document.getElementById(stateId);
        expect(state.attributes.cursor.value).toBe(kCursorAttributeValuePointer);

        onChangeValueOfSliderThumb();

        expect(state.attributes.cursor.value).toBe(kCursorAttributeValueAuto);
    });
}); /* validate results of onChangeValueOfSliderThumb() in cases where the cursor attribute
        should be set to auto */

describe(`validate results of onChangeValueOfSliderThumb() in cases where the Michigan cursor
            attribute should be set to auto`, () => {
    each(yearsBeforeTomHighPointedMichigan).it(
            `case for confirming that at slider value '%s', the cursor attribute of '%s' is auto`,
            (sliderValue) => {
        const yearSlider = changeValueOfSliderThumb(sliderValue);
        const mainland = document.getElementById(kMichiganMainland);
        const peninsula = document.getElementById(kMichiganPeninsula);
        expect(mainland.attributes.cursor.value).toBe(kCursorAttributeValuePointer);
        expect(peninsula.attributes.cursor.value).toBe(kCursorAttributeValuePointer);

        onChangeValueOfSliderThumb();

        expect(yearSlider.value).toBe(sliderValue);
        expect(mainland.attributes.cursor.value).toBe(kCursorAttributeValueAuto);
        expect(peninsula.attributes.cursor.value).toBe(kCursorAttributeValueAuto);
    });
}); /* validate results of onChangeValueOfSliderThumb() in cases where the Michigan cursor
        attribute should be set to auto */

describe(`validate results of onChangeValueOfSliderThumb() in cases where the cursor attribute
            should be set to cursor`, () => {
    each(casesForOnePolylineStatesHighPointedByTom).it(
            `case for confirming that at slider value '%s', the cursor attribute of '%s' is
            cursor`,
            (sliderValue, stateName) => {
        const yearSlider = changeValueOfSliderThumb(sliderValue);
        const stateId = kPrefixGreenState + stateName;
        const state = document.getElementById(stateId);
        expect(state.attributes.cursor.value).toBe(kCursorAttributeValuePointer);

        onChangeValueOfSliderThumb();

        expect(yearSlider.value).toBe(sliderValue);
        expect(state.attributes.cursor.value).toBe(kCursorAttributeValuePointer);
    });
}); /* validate results of onChangeValueOfSliderThumb() in cases where the cursor attribute
        should be set to cursor */

describe(`validate results of onChangeValueOfSliderThumb() in cases where the Michigan cursor
            attribute should be set to cursor`, () => {
    each(yearsSinceTomHighPointedMichigan).it(
            `case for confirming that at slider value '%s', the cursor attributes of Michigan are
            cursor`,
            (sliderValue) => {
        const yearSlider = changeValueOfSliderThumb(sliderValue);
        const mainland = document.getElementById(kMichiganMainland);
        const peninsula = document.getElementById(kMichiganPeninsula);
        expect(mainland.attributes.cursor.value).toBe(kCursorAttributeValuePointer);
        expect(peninsula.attributes.cursor.value).toBe(kCursorAttributeValuePointer);

        onChangeValueOfSliderThumb();

        expect(yearSlider.value).toBe(sliderValue);
        expect(mainland.attributes.cursor.value).toBe(kCursorAttributeValuePointer);
        expect(peninsula.attributes.cursor.value).toBe(kCursorAttributeValuePointer);
    });
}); /* validate results of onChangeValueOfSliderThumb() in cases where the Michigan cursor
        attribute should be set to cursor */

describe(`validate results of onChangeValueOfSliderThumb() in cases where the polyline should be
            set to light green`, () => {
    each(casesForOnePolylineStatesHighPointedByTom).it(
            `case for confirming that at slider value '%s', '%s' is green`,
            (sliderValue, stateName) => {
        const yearSlider = changeValueOfSliderThumb(sliderValue);
        const stateId = kPrefixGreenState + stateName;
        const state = document.getElementById(stateId);
        expect(state.getAttribute(kStyle)).toBe(null);

        onChangeValueOfSliderThumb();

        expect(yearSlider.value).toBe(sliderValue);
        expect(state.getAttribute(kStyle)).toBe(kLightGreenFill);
    });
}); /* validate results of onChangeValueOfSliderThumb() in cases where the polyline should be
        set to light green */

describe(`validate results of onChangeValueOfSliderThumb() in cases where Michigan should be set to
            light green`, () => {
    each(yearsSinceTomHighPointedMichigan).it(
            `case for confirming that Michigan is green at slider value '%s'`,
            (sliderValue) => {
        const yearSlider = changeValueOfSliderThumb(sliderValue);
        const mainland = document.getElementById(kMichiganMainland);
        const peninsula = document.getElementById(kMichiganPeninsula);
        expect(mainland.getAttribute(kStyle)).toBe(null);
        expect(peninsula.getAttribute(kStyle)).toBe(null);

        onChangeValueOfSliderThumb();

        expect(yearSlider.value).toBe(sliderValue);
        expect(mainland.getAttribute(kStyle)).toBe(kLightGreenFill);
        expect(peninsula.getAttribute(kStyle)).toBe(kLightGreenFill);
    });
}); /* validate results of onChangeValueOfSliderThumb() in cases where Michigan should be set to
        light green */

describe(`validate results of onChangeValueOfSliderThumb() in cases where the polyline should be
            set to light red`, () => {
    each(casesForOnePolylineStatesNotHighPointedByTom).it(
            `case for confirming that at slider value '%s', '%s' is red`,
            (sliderValue, stateName) => {
        changeValueOfSliderThumb(sliderValue);
        const stateId = kPrefixGreenState + stateName;
        const state = document.getElementById(stateId);
        expect(state.getAttribute(kStyle)).toBe(null);

        onChangeValueOfSliderThumb();

        expect(state.getAttribute(kStyle)).toBe(kLightRedFill);
    });
}); /* validate results of onChangeValueOfSliderThumb() in cases where the polyline should be
        set to light red */

describe(`validate results of onChangeValueOfSliderThumb() in cases where Michigan should be set to
            light red`, () => {
    each(yearsBeforeTomHighPointedMichigan).it(
            `case for confirming that at slider value '%s', Michigan is red`,
            (sliderValue) => {
        changeValueOfSliderThumb(sliderValue);
        const mainland = document.getElementById(kMichiganMainland);
        const peninsula = document.getElementById(kMichiganPeninsula);
        expect(mainland.getAttribute(kStyle)).toBe(null);
        expect(peninsula.getAttribute(kStyle)).toBe(null);

        onChangeValueOfSliderThumb();

        expect(yearSlider.value).toBe(sliderValue);
        expect(mainland.getAttribute(kStyle)).toBe(kLightRedFill);
        expect(peninsula.getAttribute(kStyle)).toBe(kLightRedFill);
    });
}); /* validate results of onChangeValueOfSliderThumb() in cases where Michigan should be set to
        light red */
