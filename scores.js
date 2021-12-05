var scores=[];

//////////////
// ANEURYSM //
//////////////

aneurysm_risk = {
    title: "Unruptured aneurysm",
    selected: ["PHASES", "ISUIA"],
    types: [{
            value: "PHASES",
            text: "PHASES"
        },
        {
            value: "ISUIA",
            text: "ISUIA"
        },
        {
            value: "UIATS",
            text: "UIATS"
        }
    ],
    variables: [{
            name: "size",
            score: "PHASES/ISUIA/UIATS",
            type: "number",
            text: "Enter size (mm)",
            selected: null,
            phases_score: function () {
                var total = 0;
                if (this.selected) {
                    if (this.selected < 7) total = 0;
                    if (this.selected >= 7 && this.selected < 10) total = 3;
                    if (this.selected >= 10 && this.selected < 20) total = 6;
                    if (this.selected >= 20) total = 10;
                }
                return total;
            },
            isuia_score: function () {
                var total = 0;
                if (this.selected) {
                    if (this.selected < 7) total = 0;
                    if (this.selected >= 7 && this.selected < 13) total = 1;
                    if (this.selected >= 13 && this.selected < 25) total = 2;
                    if (this.selected >= 25) total = 3;
                }
                return total;
            },
            uiats_score: function () {
                var total = 0;
                if (this.selected) {
                    if (this.selected < 4) total = 0;
                    if (this.selected >= 4 && this.selected < 7) total = 1;
                    if (this.selected >= 7 && this.selected < 13) total = 2;
                    if (this.selected >= 13 && this.selected < 25) total = 3;

                    if (this.selected >= 25) total = 4;
                }
                return total;
            },
            uiats_score_rx: function () {
                var total = 0;
                if (this.selected) {
                    if (this.selected < 6) total = 0;
                    if (this.selected >= 6 && this.selected < 10) total = 1;
                    if (this.selected >= 10 && this.selected < 20) total = 3;
                    if (this.selected >= 20) total = 5;
                }
                return total;
            }
        },
        {
            name: "site",
            score: "PHASES/ISUIA/UIATS",
            type: "select",
            options: [{
                    value: 'cavernous',
                    text: 'Cavernous ICA'
                }, {
                    value: 'ica',
                    text: 'Intradural ICA'
                },
                {
                    value: 'mca',
                    text: 'MCA'
                },
                {
                    value: 'aca',
                    text: 'ACA'
                },
                {
                    value: 'acom',
                    text: 'ACom'
                },
                {
                    value: 'pca',
                    text: 'PCA'
                }, {
                    value: 'pcom',
                    text: 'PCOM'
                },
                {
                    value: 'va',
                    text: 'Vertebral artery'
                },
                {
                    value: 'ba_tip',
                    text: 'Tip of basilar artery'
                },
                {
                    value: 'ba',
                    text: 'Rest of basilar artery'
                }
            ],
            text: "Enter site",
            selected: null,
            phases_score: function () {
                var total = 0;
                if (this.selected) {
                    if (this.selected == "cavernous") total = -1;
                    if (this.selected == "ica") total = 0;
                    if (this.selected == "mca") total = 2;
                    if (this.selected == "pca" || this.selected == "pcom" || this.selected ==
                        "va" || this.selected ==
                        "ba_tip" || this
                        .selected == "ba" || this.selected == "aca" || this
                        .selected == "acom") total = 4;
                }
                return total;
            },
            isuia_score: function () {
                var total = 0;
                if (this.selected) {
                    if (this.selected == "cavernous") total = 0;
                    if (this.selected == "mca" || this.selected == "aca" || this
                        .selected == "acom" || this
                        .selected == "ica") total = 1;
                    if (this.selected == "pca" || this.selected == "pcom" || this.selected ==
                        "va" || this
                        .selected == "ba" || this
                        .selected == "ba_tip") total = 2;
                }
                return total;
            },
            uiats_score: function () {
                var total = 0;
                if (this.selected) {
                    if (this.selected == "cavernous") total = 0;
                    if (this.selected == "bas_tip") total = 5;
                    if (this.selected == "va" || this.selected == "ba") total = 4;
                    if (this.selected == "acom" || this.selected == "pcom") total = 2;
                }
                return total;
            }
        },
        {
            name: "ethnicity",
            score: "PHASES/UIATS",
            type: "select",
            options: [{
                    value: 'american',
                    text: 'North American/European (except Finnish)'
                },
                {
                    value: 'japanese',
                    text: 'Japanese'
                },
                {
                    value: 'finnish',
                    text: 'Finnish'
                },

                {
                    value: 'inuit',
                    text: 'Inuit'
                },
                {
                    value: 'other',
                    text: 'Other'
                }
            ],
            text: "Enter ethnicity",
            selected: null,
            phases_score: function () {
                var total = 0;
                if (this.selected) {
                    if (this.selected == "japanese") total = 3;
                    if (this.selected == "finnish") total = 5;
                }
                return total;
            },
            uiats_score: function () {
                var total = 0;
                if (this.selected) {
                    if (this.selected == "japanese" || this.selected == "finnish" || this
                        .selected == "inuit") total = 2;
                }
                return total;
            }
        },
        {
            name: "hypertension",
            score: "PHASES/UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Does the patient have hypertension?",
            selected: null,
            phases_score: function () {
                return this.selected;
            },
            uiats_score: function () {
                return this.selected;
            }
        },
        {
            name: "Age",
            score: "PHASES/UIATS",
            type: "number",
            text: "Enter age in years",
            selected: null,
            phases_score: function () {
                var total = 0;
                if (this.selected && this.selected > 70) {
                    total = 1;
                }
                return total;

            },
            uiats_score: function () {
                // This appears twice in the score
                var total = 0;
                if (this.selected) {
                    if (this.selected < 40)
                        total = 4;
                    if (this.selected >= 40 && this.selected < 60)
                        total = 3;
                    if (this.selected >= 60 && this.selected < 70)
                        total = 2;
                    if (this.selected >= 70 && this.selected < 80)
                        total = 1;
                    if (this.selected >= 80)
                        total = 0;
                }
                return total;
            },
            uiats_score_rx: function () {
                // This appears twice in the score
                var total = 0;
                if (this.selected) {
                    if (this.selected < 40)
                        total = 0;
                    if (this.selected >= 40 && this.selected < 60)
                        total = 1;
                    if (this.selected >= 60 && this.selected < 70)
                        total = 3;
                    if (this.selected >= 70 && this.selected < 80)
                        total = 4;
                    if (this.selected >= 80)
                        total = 5;
                }
                return total;

            }
        },
        {
            name: "other_sah",
            score: "PHASES/ISUIA/UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Has the patient ever had subarachnoid haemorrhage from another aneurysm?",
            selected: null,
            phases_score: function () {
                return this.selected;
            },
            uiats_score: function () {
                var total = 0;
                if (this.selected) total = 4;
                return total;
            }
        },
        {
            name: "size_ratio",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Size ratio > 3 or aspects > 1.6?",
            selected: null,
            uiats_score: function () {
                return this.selected;
            }
        },
        {
            name: "morphology",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Morphology: irregularity/lobulation?",
            selected: null,
            uiats_score: function () {
                var total = 0;
                if (this.selected) total = 3
                return this.selected;
            }
        },
        {
            name: "familial",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Familial intracranial aneurysms or SAH?",
            selected: null,
            uiats_score: function () {
                var total = 0;
                if (this.selected) total = 3;
                return total;
            }
        },
        {
            name: "smoking",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Current cigarette smoking?",
            selected: null,
            uiats_score: function () {
                var total = 0
                if (this.selected) total = 3;
                return total;
            }
        },
        {
            name: "polycystic",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "ADPKD?",
            selected: null,
            uiats_score: function () {
                var total = 0;
                if (this.selected) total = 2
                return this.selected;
            }
        },
        {
            name: "drugs",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Current drug abuse (cocaine, amphetamine)?",
            selected: null,
            uiats_score: function () {
                var total = 0;
                if (this.selected) total = 2
                return this.selected;
            }
        },
        {
            name: "alcohol",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Current alcohol abuse?",
            selected: null,
            uiats_score: function () {
                return this.selected;
            }
        },
        {
            name: "cn",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Cranial nerve deficit?",
            selected: null,
            uiats_score: function () {
                var total = 0;
                if (this.selected) total = 4
                return this.selected;
            }
        },
        {
            name: "mass_Effect",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Clinical/radiological mass effect?",
            selected: null,
            uiats_score: function () {
                var total = 0;
                if (this.selected) total = 4
                return this.selected;
            }
        },
        {
            name: "thromboembolic",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Thromboembolic events?",
            selected: null,
            uiats_score: function () {
                var total = 0;
                if (this.selected) total = 3
                return this.selected;
            }
        },
        {
            name: "seizures",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Seizures?",
            selected: null,
            uiats_score: function () {
                return this.selected;
            }
        },
        {
            name: "qol",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Reduced quality of life due to fear of rupture?",
            selected: null,
            uiats_score: function () {
                var total = 0;
                if (this.selected) total = 2;
                return this.selected;
            }
        },
        {
            name: "multiplicity",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Aneurysm multiplicity?",
            selected: null,
            uiats_score: function () {
                return this.selected;
            }
        },
        {
            name: "life_expectancy",
            score: "UIATS",
            type: "select",
            options: [{
                    value: 'less than 5 years',
                    text: 'less than 5 years'
                },
                {
                    value: '5-10 years',
                    text: '5-10 years'
                },
                {
                    value: 'over 10 years',
                    text: 'over 10 years'
                },
                {
                    value: 'Not limited',
                    text: 'Not limited'
                }
            ],
            text: "Life expectancy due to chronic and/or malignant disease",
            selected: null,
            uiats_score: function () {
                var total = 0;
                if (this.selected) {
                    if (this.selected == "less than 5 years" || this.selected == "other")
                        total = 0;
                    if (this.selected == "5-10 years") total = 3;
                    if (this.selected == "over 10 years") total = 5;
                    if (this.selected == "Not limited") total = 5;
                }
                return total;
            }
        },
        {
            name: "neurodegenerative",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Comorbid neurocognitive disorder?",
            selected: null,
            uiats_score: function () {
                var total = 0;
                if (this.selected) total = 3
                return this.selected;
            }
        },
        {
            name: "coagulopathy",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Comoborbid coagulopathy or thrombophilia?",
            selected: null,
            uiats_score: function () {
                var total = 0;
                if (this.selected) total = 2
                return this.selected;
            }
        },
        {
            name: "psych",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Psychiatric disorder?",
            selected: null,
            uiats_score: function () {
                var total = 0;
                if (this.selected) total = 2
                return this.selected;
            }
        },
        {
            name: "an_growth",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Aneurysm growth on serial imaging?",
            selected: null,
            uiats_score: function () {
                var total = 0;
                if (this.selected) total = 4
                return this.selected;
            }
        },
        {
            name: "denovo",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "De novo aneurysm formation?",
            selected: null,
            uiats_score: function () {
                var total = 0;
                if (this.selected) total = 3
                return this.selected;
            }
        },
        {
            name: "stenosis",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Contralateral steno-occlusive vessel disease?",
            selected: null,
            uiats_score: function () {
                return this.selected;
            }
        },
        {
            name: "treatment_risk",
            score: "UIATS",
            options: [{
                value: 1,
                text: 'High'
            }, {
                value: 0,
                text: 'Low'
            }],
            type: "radio",
            text: "Aneurysm complexity-relatex risk",
            selected: null,
            uiats_score: function () {
                return this.selected;
            }
        }

    ],


    calculate: function () {
        var text = "";

        /////////
        // PHASES
        /////////
        const phases_table = {
            0: "0.4\% (0.1-1.5\%)",
            1: "0.4\% (0.1-1.5\%)",
            2: "0.4\% (0.1-1.5\%)",
            3: "0.7\% (0.2-1.5\%)",
            4: "0.9\% (0.3-2.0\%)",
            5: "1.3\% (0.8-2.4\%)",
            6: "1.7\% (1.1-2.7\%)",
            7: "2.4\% (1.6-3.3\%)",
            8: "3.2\% (2.3-4.4\%)",
            9: "4.3\% (2.9-6.1\%)",
            10: "5.3\% (3.5-8.0\%)",
            11: "7.2\% (5.0-10.2\%)",
        }
        var total = 0;
        for (var n = 0; n < this.variables.length; n++) {
            if (this.variables[n].score.includes("PHASES")) {
                total = total + this.variables[n].phases_score();
            }
        }
        var risk = null;

        if (get_var("site", this.variables).phases_score() != -1 && this.selected.includes("PHASES")) {
            if (total >= 12) risk = "17·8\% (15·2–20·7\%)";
            else risk = phases_table[total];
            text = "<p>PHASES: " + risk + " 5-year risk of rupture. </p>";
        } else {
            text = "";

        }

        /////////
        // ISUIA
        /////////
        total = 0;
        risk = null;
        // Size 7mm
        if (get_var("other_sah", this.variables).selected && get_var("size", this.variables)
            .isuia_score() ==
            0) {
            // Previously ruptured and < 7 mm
            if (get_var("site", this.variables).isuia_score() == 0) {
                risk = "0\% "
            } else if (get_var("site", this.variables).isuia_score() == 1) {
                risk = "1.5\% "
            } else if (get_var("site", this.variables).isuia_score() == 2) {
                risk = "3.4\% "
            }
        } else if (!get_var("other_sah", this.variables).selected && get_var("size", this.variables)
            .isuia_score() == 0) {
            // Not previously ruptured and < 7 mm
            if (get_var("site", this.variables).isuia_score() == 2) {
                risk = "2.5\% "
            } else {
                risk = "0\%";
            }
        }

        if (get_var("size", this.variables).isuia_score() > 0) {
            const isuia_table = [
                [0, "0\%", "3\%", "6.4\%"],
                [0, "2.6\%", "14.6\%", "40\%"],
                [0, "18.4\%", "18.4\%", "50\%"]
            ];
            // [row][column]
            var risk = isuia_table[get_var("site", this.variables).isuia_score()][get_var("size",
                    this
                    .variables)
                .isuia_score()
            ];
        }
        if (this.selected.includes("ISUIA")) {
            text = text + "<p>ISUIA: " + risk + " 5-year risk of rupture.</p>";
        }

        /////////
        // UIATS
        /////////
        var repair = 0;
        var conserv = 0;
        repair = get_var("Age", this.variables)
            .uiats_score() + get_var("other_sah", this.variables)
            .uiats_score() + get_var("familial", this.variables)
            .uiats_score() + get_var("site", this.variables)
            .uiats_score() + get_var("smoking", this.variables)
            .uiats_score() + get_var("polycystic", this.variables)
            .uiats_score() + get_var("hypertension", this.variables)
            .uiats_score() + get_var("drugs", this.variables)
            .uiats_score() + get_var("alcohol", this.variables)
            .uiats_score() + get_var("cn", this.variables)
            .uiats_score() + get_var("thromboembolic", this.variables)
            .uiats_score() + get_var("seizures", this.variables)
            .uiats_score() + +get_var("qol", this.variables)
            .uiats_score() + get_var("multiplicity", this.variables)
            .uiats_score() + get_var("size", this.variables)
            .uiats_score() + get_var("morphology", this.variables)
            .uiats_score() + get_var("size_ratio", this.variables)
            .uiats_score() + get_var("site", this.variables)
            .uiats_score() + get_var("an_growth", this.variables)
            .uiats_score() + get_var("denovo", this.variables)
            .uiats_score() + get_var("stenosis", this.variables)
            .uiats_score();

        conserv = get_var("life_expectancy", this.variables)
            .uiats_score() + get_var("neurodegenerative", this.variables)
            .uiats_score() + get_var("coagulopathy", this.variables)
            .uiats_score() + get_var("psych", this.variables)
            .uiats_score() + get_var("Age", this.variables)
            .uiats_score_rx() + get_var("treatment_risk", this.variables)
            .uiats_score() + get_var("size", this.variables)
            .uiats_score_rx() + 5;
        if (this.selected.includes("UIATS")) {
            if ((repair - conserv) > 0) {
                text = text + "<p>UIATS: In favour of intervention ";  
            }
            else if ((repair - conserv) == 0) {
                text = text + "<p>UIATS: Equipoise ";  
            }
            else if ((repair - conserv) < 0) {
                text = text + "<p>UIATS: In favour of non-intervention ";  
            }
            text=text+ "(intervention "+ repair + " vs non-intervention " + conserv +").";
        }


        return text;
    }
}

//////////////
// AVF      //
//////////////
avf_risk = {
    title: "Dural Arteriovenous Fistula",
    selected: ["Cognard", "Borden", "Zipfel"], // Default selected scores
    types: [{
            value: "Cognard", // Types of score
            text: "Cognard" // Same as above
        },{
            value: "Borden", // Types of score
            text: "Borden" // Same as above
        },{
            value: "Zipfel", // Types of score
            text: "Zipfel" // Same as above
        }
    ],
    variables: [{
            name: "drainage", // Internal name
            score: "Cognard/Borden/Zipfel", // separated by "/"
            type: "select",
            options: [{
                value: 'ant_sinus',
                text: 'Sinus with antegrade flow'
            },
            {
                value: 'ret_sinus',
                text: 'Sinus with retrograde flow'
            },
            {
                value: 'ant_sinus_cv',
                text: 'sinus with antegrade flow and cortical venous reflux'
            },

            {
                value: 'ret_sinus_cv',
                text: 'sinus with retrograde flow and cortical venous reflux'
            },
            {
                value: 'cv',
                text: 'Non-ectatic cortical vein'
            },
            {
                value: 'ect_cv',
                text: 'Ectatic cortical vein'
            },
            {
                value: 'spv',
                text: 'Spinal perimedullary vein'
            }
        ],
            text: "Drainage pattern", // Presented to user
            selected: null,
            cognard_score: function () { // Function returns to calculate score
                var text;                
                switch (this.selected) {
                    case 'ant_sinus': {text = "type 1";break;}
                    case 'ret_sinus': {text = "type 2a";break;}
                    case 'ant_sinus_cv': {text = "type 2b";break;}
                    case 'ret_sinus_cv': {text = "type 2a+b";break;}
                    case 'cv': {text = "type 3";break;}
                    case 'ect_cv': {text = "type 4";break;}
                    case 'spv': {text = "type 5";break;}
                }
                return text;
            },
            borden_score: function () { // Function returns to calculate score
                var text;
                switch (this.selected) {
                    case 'ant_sinus': 
                    case 'ret_sinus': {text = "type 1";break;}
                    case 'ant_sinus_cv': 
                    case 'ret_sinus_cv': {text = "type 2";break;}
                    case 'cv': 
                    case 'ect_cv': 
                    case 'spv': {text = "type 3";break;}
                }


                return text;
            },
            zipfel_score: function () { // Function returns to calculate score
                var total = 0;
                return total;
            }
        },
        {
            name: "symptomatic", // Internal name
            score: "Zipfel", // separated by "/"
            type: "radio",
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Intracerebral hemorrhage or neurological deficit?",
            selected: null,
            zipfel_score: function () {
                return this.selected;
            }
        }
    ],

    calculate: function () {
        var text = "";

        // Cognard
        if (this.selected.includes("Cognard")) {
            text = "<p>Cognard " + get_var("drainage", this.variables)
            .cognard_score() + "</p>";
        }
        // Borden
        if (this.selected.includes("Borden")) {
            text = text+ "<p>Borden " + get_var("drainage", this.variables)
            .borden_score() + "</p>";
        }
        // Zipfel

        if (this.selected.includes("Zipfel")) {
            text=text+"<p>Zipfel ";
        switch (get_var("drainage", this.variables)
        .borden_score()) {
            case 'type 1': {
                if (get_var("symptomatic", this.variables)
                .selected) {
                    text=text+ "type 1 symptomatic";
                }
                else {
                    text=text+ "type 1 asymptomatic";

                }
                break;
            }
            case 'type 2': {
                if (get_var("symptomatic", this.variables)
                .selected) {
                    text=text+ "type 2 symptomatic";
                }
                else {
                    text=text+ "type 2 asymptomatic";

                }
                break;
            }
            case 'type 3': {
                if (get_var("symptomatic", this.variables)
                .selected) {
                    text=text+ "type 3 symptomatic";
                }
                else {
                    text=text+ "type 3 asymptomatic";

                }
                break;
            }
        }
        text=text+"</p>";

    }
    
        return text;
    }
}



//////////////
// AVM      //
//////////////
avm_risk = {
    title: "",
    selected: [""], // Default selected scores
    types: [{
            value: "", // Types of scores
            text: "" // Same as above
        }
    ],
    variables: [{
            name: "", // Internal name
            score: "", // separated by "/"
            type: "number",
            text: "", // Presented to user
            selected: null,
            phases_score: function () { // Function returns to calculate score
                var total = 0;
                return total;
            }
        }
    ],

    calculate: function () {
        var text = "";

        /////////
        // 
        /////////

        var total = 0;
        for (var n = 0; n < this.variables.length; n++) { 
            if (this.variables[n].score.includes("PHASES")) {
                total = total + this.variables[n].phases_score();
            }
        }
        var risk = null;

        if (get_var("site", this.variables).phases_score() != -1 && this.selected.includes("PHASES")) {
            if (total >= 12) risk = "17·8\% (15·2–20·7\%)";
            else risk = phases_table[total];
            text = "<p>PHASES: " + risk + " 5-year risk of rupture. </p>";
        } else {
            text = "";

        }
        return text;
    }
}


//////////////
// Carotid stenosis      //
//////////////
carotid_stenosis = {
    title: "Carotid stenosis",
    selected: ["NASCET"], // Default selected scores
    types: [{
            value: "NASCET", // Types of scores
            text: "NASCET" // Same as above
        }
    ],
    variables: [{
            name: "stenosis", // Internal name
            score: "NASCET", // separated by "/"
            type: "number",
            text: "Narrowest ICA diameter in the stenotic segment (mm)", // Presented to user
            selected: null,
            nascet_score: function () { 
                return this.selected;
            }
        },
        {
            name: "normal", // Internal name
            score: "NASCET", // separated by "/"
            type: "number",
            text: "Diameter of the normal distal ICA (mm)", // Presented to user
            selected: null,
            nascet_score: function () { 
                return this.selected;
            }
        }
    ],

    calculate: function () {
        var text = "";

        var stenosis = get_var("stenosis", this.variables).nascet_score();
        var normal = get_var("normal", this.variables).nascet_score();
        var ratio = (1-(stenosis/normal))*100;


        text = "<p> ICA stenosis = " + ratio.toFixed(0) + "%";


        return text;
    }
}


//////////////
// DAWN/DEFUSE      //
//////////////
i_hypotension = {
    title: "Intracranial hypotension",
    selected: ["Dobrocky Bern"], // Default selected scores
    types: [{
            value: "Dobrocky Bern", // Types of scores
            text: "Dobrocky Bern" // Same as above
        }
    ],
    variables: [{
            name: "sinuses", // Internal name
            score: "Dobrocky Bern", // separated by "/"
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Engorgement of venous sinuses", // Presented to user
            selected: null,
            bern_score: function () { // Function returns to calculate score
                return this.selected*2;
            }
        },{
            name: "pachymen", // Internal name
            score: "Dobrocky Bern", // separated by "/"
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Pachymeningeal enhancement ", // Presented to user
            selected: null,
            bern_score: function () { // Function returns to calculate score
                return this.selected*2;
            }
        },{
            name: "suprasellar", // Internal name
            score: "Dobrocky Bern", // separated by "/"
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Suprasellar cistern ≤ 4 mm ", // Presented to user
            selected: null,
            bern_score: function () { // Function returns to calculate score
                return this.selected*2;
            }
        },{
            name: "subdural", // Internal name
            score: "Dobrocky Bern", // separated by "/"
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Subdural fluid collection ", // Presented to user
            selected: null,
            bern_score: function () { // Function returns to calculate score
                return this.selected;
            }
        },{
            name: "prepontine", // Internal name
            score: "Dobrocky Bern", // separated by "/"
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Prepontine cistern ≤ 5 mm", // Presented to user
            selected: null,
            bern_score: function () { // Function returns to calculate score
                return this.selected;
            }
        },{
            name: "mamillopontine", // Internal name
            score: "Dobrocky Bern", // separated by "/"
            options: [{
                value: 1,
                text: 'yes'
            }, {
                value: 0,
                text: 'no'
            }],
            type: "radio",
            text: "Mamillopontine distance ≤ 6.5 mm", // Presented to user
            selected: null,
            bern_score: function () { // Function returns to calculate score
                return this.selected;
            }
        }
    ],

    calculate: function () {
        var text = "";

        /////////
        // Bern
        /////////

        var total = 0;
        for (var n = 0; n < this.variables.length; n++) { 
            if (this.variables[n].score.includes("Dobrocky Bern")) {
                total = total + this.variables[n].bern_score();
            }
        }

        text=text+"<p>Dobrocky Bern: ";
        
        if (total <3)
        {        
            text=text+"Low risk (" +total +")";
        }     
        else if (total >2 && total < 5) {
        text=text+"Intermediate risk (" +total +")";
        }
        else if (total > 4) {
        text=text+"High risk (" +total +")";
        }
     
        return text;
    }
}

//////////////
// DAWN/DEFUSE      //
//////////////
avm_risk = {
    title: "",
    selected: [""], // Default selected scores
    types: [{
            value: "", // Types of scores
            text: "" // Same as above
        }
    ],
    variables: [{
            name: "", // Internal name
            score: "", // separated by "/"
            type: "number",
            text: "", // Presented to user
            selected: null,
            phases_score: function () { // Function returns to calculate score
                var total = 0;
                return total;
            }
        }
    ],

    calculate: function () {
        var text = "";

        /////////
        // 
        /////////

        var total = 0;
        for (var n = 0; n < this.variables.length; n++) { 
            if (this.variables[n].score.includes("PHASES")) {
                total = total + this.variables[n].phases_score();
            }
        }
        var risk = null;

        if (get_var("site", this.variables).phases_score() != -1 && this.selected.includes("PHASES")) {
            if (total >= 12) risk = "17·8\% (15·2–20·7\%)";
            else risk = phases_table[total];
            text = "<p>PHASES: " + risk + " 5-year risk of rupture. </p>";
        } else {
            text = "";

        }
        return text;
    }
}