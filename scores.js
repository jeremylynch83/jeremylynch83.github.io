life_exp_males = [79.04, 79.37, 79.39, 79.4, 79.41, 79.42, 79.42, 79.43, 79.43, 79.44, 79.44, 79.45, 79.45, 79.46, 79.47, 79.48, 79.49, 79.5, 79.52, 79.54, 79.57, 79.6, 79.63, 79.66, 79.69, 79.72, 79.75, 79.78, 79.82, 79.85, 79.89, 79.93, 79.97, 80.01, 80.05, 80.1, 80.15, 80.2, 80.26, 80.31, 80.37, 80.43, 80.5, 80.57, 80.65, 80.73, 80.81, 80.9, 81, 81.09, 81.2, 81.31, 81.42, 81.54, 81.66, 81.79, 81.93, 82.07, 82.22, 82.38, 82.55, 82.72, 82.91, 83.1, 83.31, 83.53, 83.75, 84, 84.24, 84.5, 84.78, 85.06, 85.35, 85.65, 85.97, 86.31, 86.67, 87.04, 87.44, 87.87, 88.31, 88.77, 89.26, 89.76, 90.28, 90.84, 91.41, 92.02, 92.65, 93.32, 94.02, 94.7, 95.42, 96.16, 96.92, 97.7, 98.51, 99.34, 100.18, 101.02, 101.91]

life_exp_females = [82.86, 83.15, 83.17, 83.18, 83.18, 83.19, 83.19, 83.2, 83.2, 83.21, 83.21, 83.22, 83.22, 83.22, 83.23, 83.24, 83.24, 83.25, 83.26, 83.28, 83.29, 83.3, 83.32, 83.33, 83.34, 83.36, 83.37, 83.39, 83.4, 83.42, 83.44, 83.46, 83.48, 83.5, 83.53, 83.56, 83.59, 83.62, 83.65, 83.69, 83.73, 83.77, 83.81, 83.86, 83.91, 83.96, 84.02, 84.08, 84.14, 84.21, 84.28, 84.36, 84.44, 84.52, 84.61, 84.7, 84.79, 84.9, 85, 85.12, 85.24, 85.37, 85.51, 85.66, 85.81, 85.97, 86.13, 86.31, 86.49, 86.68, 86.88, 87.1, 87.31, 87.54, 87.79, 88.06, 88.34, 88.63, 88.95, 89.29, 89.66, 90.03, 90.44, 90.86, 91.3, 91.78, 92.28, 92.81, 93.37, 93.96, 94.58, 95.22, 95.9, 96.6, 97.32, 98.06, 98.83, 99.62, 100.43, 101.26, 102.09]

var scores = [];

//////////////
// ANEURYSM //
//////////////

aneurysm_risk = {
    title: "Unruptured aneurysm",
    results: [],
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
    variables: [
        /*{
            name: "lifespan",
            score: "PHASES/ISUIA/UIATS",
            type: "number",
            text: "Expected lifespan (years)",
            selected: null,
            phases_score: function () {
                return 0;
            }
        },*/
        {
            name: "size",
            score: "PHASES/ISUIA/UIATS",
            type: "number",
            text: "Aneurysm size (mm)",
            selected: null,
            phases_score: function() {
                var total = 0;
                if (this.selected) {
                    if (this.selected < 7) total = 0;
                    if (this.selected >= 7 && this.selected < 10) total = 3;
                    if (this.selected >= 10 && this.selected < 20) total = 6;
                    if (this.selected >= 20) total = 10;
                }
                return total;
            },
            isuia_score: function() {
                var total = 0;
                if (this.selected) {
                    if (this.selected < 7) total = 0;
                    if (this.selected >= 7 && this.selected < 13) total = 1;
                    if (this.selected >= 13 && this.selected < 25) total = 2;
                    if (this.selected >= 25) total = 3;
                }
                return total;
            },
            uiats_score: function() {
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
            uiats_score_rx: function() {
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
            text: "Aneurysm site",
            selected: null,
            phases_score: function() {
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
            isuia_score: function() {
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
            uiats_score: function() {
                var total = 0;
                if (this.selected) {
                    if (this.selected == "cavernous") total = 0;
                    if (this.selected == "ba_tip") total = 5;
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
            text: "Patient ethnicity",
            selected: null,
            phases_score: function() {
                var total = 0;
                if (this.selected) {
                    if (this.selected == "japanese") total = 3;
                    if (this.selected == "finnish") total = 5;
                }
                return total;
            },
            uiats_score: function() {
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
                text: 'Yes'
            }, {
                value: 0,
                text: 'No'
            }],
            type: "radio",
            text: "Does the patient have hypertension?",
            selected: null,
            phases_score: function() {
                return this.selected;
            },
            uiats_score: function() {
                var total=0;
                if (this.selected) total =2;
                return total;
            }
        },
        {
            name: "gender",
            score: "PHASES/UIATS",
            options: [{
                value: 'Male',
                text: 'Male'
            }, {
                value: 'Female',
                text: 'Female'
            }],
            type: "radio",
            text: "Gender",
            selected: null,
            phases_score: function() {
                return 0;
            },
            uiats_score: function() {
                return 0;
            }
        },
        {
            name: "Age",
            score: "PHASES/UIATS/ISUIA",
            type: "number",
            text: "Patient age (years)",
            selected: null,
            phases_score: function() {
                var total = 0;
                if (this.selected && this.selected > 70) {
                    total = 1;
                }
                return total;

            },
            uiats_score: function() {
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
            uiats_score_rx: function() {
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
            text: "Previous subarachnoid haemorrhage from another aneurysm?",
            selected: null,
            phases_score: function() {
                return this.selected;
            },
            uiats_score: function() {
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
            uiats_score: function() {
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
            uiats_score: function() {
                var total = 0;
                if (this.selected) total = 3
                return total;
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
            uiats_score: function() {
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
            uiats_score: function() {
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
            uiats_score: function() {
                var total = 0;
                if (this.selected) total = 2;
                return total;
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
            uiats_score: function() {
                var total = 0;
                if (this.selected) total = 2
                return total;
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
            uiats_score: function() {
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
            uiats_score: function() {
                var total = 0;
                if (this.selected) total = 4
                return total;
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
            uiats_score: function() {
                var total = 0;
                if (this.selected) total = 4;
                return total;
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
            uiats_score: function() {
                var total = 0;
                if (this.selected) total = 3
                return total;
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
            uiats_score: function() {
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
            uiats_score: function() {
                var total = 0;
                if (this.selected) total = 2;
                return total;
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
            uiats_score: function() {
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
                ,
                {
                    value: 'not applicable',
                    text: 'not applicable'
                }

            ],
            text: "Life expectancy due to chronic and/or malignant disease",
            selected: null,
            uiats_score: function() {
                var total = 0;
                if (this.selected) {
                    if (this.selected == "less than 5 years" || this.selected == "other")
                        total = 4;
                    if (this.selected == "5-10 years") total = 3;
                    if (this.selected == "over 10 years") total = 1;
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
            uiats_score: function() {
                var total = 0;
                if (this.selected) total = 3
                return total;
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
            uiats_score: function() {
                var total = 0;
                if (this.selected) total = 2
                return total;
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
            uiats_score: function() {
                var total = 0;
                if (this.selected) total = 2
                return total;
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
            uiats_score: function() {
                var total = 0;
                if (this.selected) total = 4
                return total;
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
            uiats_score: function() {
                var total = 0;
                if (this.selected) total = 3
                return total;
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
            uiats_score: function() {
                return this.selected;
            }
        },
        {
            name: "treatment_risk",
            score: "UIATS",
            options: [{
                value: 3,
                text: 'High'
            }, {
                value: 0,
                text: 'Low'
            }],
            type: "radio",
            text: "Aneurysm complexity-related risk",
            selected: null,
            uiats_score: function() {
                return this.selected;
            }
        }

    ],


    calculate: function() {
        this.results = [];
        var text = "PHASES score ";
        var years_left = null;
        var life_exp = null;

        if (get_var("gender", this.variables).selected == "Male") {
            life_exp = life_exp_males[get_var("Age", this.variables).selected];
            years_left = life_exp - get_var("Age", this.variables).selected;
        }
        if (get_var("gender", this.variables).selected == "Female") {
            life_exp = life_exp_females[get_var("Age", this.variables).selected];
            years_left = life_exp - get_var("Age", this.variables).selected;
        }

        /////////
        // PHASES
        /////////
        const phases_table = {
            0: "0.4\% (0.1–1.5\%)",
            1: "0.4\% (0.1–1.5\%)",
            2: "0.4\% (0.1–1.5\%)",
            3: "0.7\% (0.2–1.5\%)",
            4: "0.9\% (0.3–2.0\%)",
            5: "1.3\% (0.8–2.4\%)",
            6: "1.7\% (1.1–2.7\%)",
            7: "2.4\% (1.6–3.3\%)",
            8: "3.2\% (2.3–4.4\%)",
            9: "4.3\% (2.9–6.1\%)",
            10: "5.3\% (3.5–8.0\%)",
            11: "7.2\% (5.0–10.2\%)",
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
            text = text + total.toString() + ". " + risk + " 5-year risk of rupture. ";
            if (years_left) {
                risk_num = parseFloat(risk.split("%")[0]);
                risk_text = (risk_num * (years_left / 5)).toFixed(1);
                let risk_values = risk.match(/\((\d+\.\d+)–(\d+\.\d+)%\)/);
                let risk_low = parseFloat(risk_values[1]);
                let risk_high = parseFloat(risk_values[2]);

                let lifetime_risk_low = (risk_low * (years_left / 5)).toFixed(1);
                let lifetime_risk_high = (risk_high * (years_left / 5)).toFixed(1);
                if (risk_text < 50) text = text + risk_text + "% (" + lifetime_risk_low+ "%–" + lifetime_risk_high + "%)" + " lifetime risk (life expectancy of " + life_exp + ").";
                else text = text + "Very high lifetime risk. "
            }

        } else {
            text = "";
        }

        this.results.push({
            name: "PHASES",
            visible: false,
            ref: "(1) Greving JP, Wermer MJ, Brown RD Jr, et al. Development of the PHASES score for prediction of risk of rupture of intracranial aneurysms: a pooled analysis of six prospective cohort studies. Lancet Neurol. 2014 Jan;13(1):59-66. doi: 10.1016/S1474-4422(13)70263-1. (2) UK National life tables, Office of National Statistics.",
            summary: text,
            body: "",
            image: 'phases.svg'
        });


        /////////
        // ISUIA
        /////////
        var text = ""
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
                [0, "14.5\%", "18.4\%", "50\%"]
            ];
            // [row][column]
            var risk = isuia_table[get_var("site", this.variables).isuia_score()][get_var("size",
                    this
                    .variables)
                .isuia_score()
            ];
        }
        if (this.selected.includes("ISUIA")) {
            text = text + risk + " 5-year risk of rupture. ";
            if (years_left) {
                risk_num = parseFloat(risk.split("%")[0]);
                risk_text = (risk_num * (years_left / 5)).toFixed(1);
                if (risk_text < 50) text = text + risk_text + "% lifetime risk (life expectancy of " + life_exp + ").";
                else text = text + "Very high lifetime risk. ";
            }
        }

        this.results.push({
            name: "ISUIA",
            visible: false,
            ref: "(1) Wiebers DO, Whisnant JP, Huston J 3rd, et al. International Study of Unruptured Intracranial Aneurysms Investigators. Unruptured intracranial aneurysms: natural history, clinical outcome, and risks of surgical and endovascular treatment. Lancet. 2003 Jul 12;362(9378):103-10. doi: 10.1016/s0140-6736(03)13860-3. (2) UK National life tables, Office of National Statistics. ",
            summary: text,
            image: 'isuia.jpg'
        });


        /////////
        // UIATS
        /////////
        var text = "";
        var repair = 0;
        var conserv = 0;
        repair = get_var("Age", this.variables)
            .uiats_score() + get_var("other_sah", this.variables)
            .uiats_score() + get_var("ethnicity", this.variables)
            .uiats_score() + get_var("familial", this.variables)
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
                text = text + "In favour of intervention ";
            } else if ((repair - conserv) == 0) {
                text = text + "Equipoise ";
            } else if ((repair - conserv) < 0) {
                text = text + "In favour of non-intervention ";
            }
            text = text + "(intervention " + repair + " vs non-intervention " + conserv + ").";

        }

        this.results.push({
            name: "UIATS",
            visible: false,
            ref: "Etminan N, Brown RD Jr, Beseoglu K, et al. The unruptured intracranial aneurysm treatment score: a multidisciplinary consensus. Neurology. 2015 Sep 8;85(10):881-9. doi: 10.1212/WNL.0000000000001891. Epub 2015 Aug 14. PMID: 26276380; ",
            summary: text,
            image: 'isuia.png'
        });


        //return text;
    }
}

//////////////
// AVF      //
//////////////
avf_risk = {
    title: "Dural Arteriovenous Fistula",
    results: [],
    selected: ["Cognard", "Borden", "Zipfel"], // Default selected scores
    types: [{
        value: "Cognard", // Types of score
        text: "Cognard" // Same as above
    }, {
        value: "Borden", // Types of score
        text: "Borden" // Same as above
    }, {
        value: "Zipfel", // Types of score
        text: "Zipfel" // Same as above
    }],
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
                    text: 'Sinus with antegrade flow and cortical venous reflux'
                },

                {
                    value: 'ret_sinus_cv',
                    text: 'Sinus with retrograde flow and cortical venous reflux'
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
            cognard_score: function() { // Function returns to calculate score
                var text;
                switch (this.selected) {
                    case 'ant_sinus':
                        { text = "Type 1. "; break; }
                    case 'ret_sinus':
                        { text = "Type 2a. "; break; }
                    case 'ant_sinus_cv':
                        { text = "Type 2b. "; break; }
                    case 'ret_sinus_cv':
                        { text = "Type 2a+b. "; break; }
                    case 'cv':
                        { text = "Type 3. "; break; }
                    case 'ect_cv':
                        { text = "Type 4. "; break; }
                    case 'spv':
                        { text = "Type 5. "; break; }
                }
                return text;
            },


            borden_score: function() { // Function returns to calculate score
                var text;
                switch (this.selected) {
                    case 'ant_sinus':
                    case 'ret_sinus':
                        { text = "Type 1. "; break; }
                    case 'ant_sinus_cv':
                    case 'ret_sinus_cv':
                        { text = "Type 2. "; break; }
                    case 'cv':
                    case 'ect_cv':
                    case 'spv':
                        { text = "Type 3. "; break; }
                }
                return text;
            },
            zipfel_score: function() {
                var text;
                switch (this.selected) {
                    case 'ant_sinus':
                    case 'ret_sinus':
                        { text = "Type 1. "; break; }
                    case 'ant_sinus_cv':
                    case 'ret_sinus_cv':
                        { text = "Type 2. "; break; }
                    case 'cv':
                    case 'ect_cv':
                    case 'spv':
                        { text = "Type 3. "; break; }
                }
                return text;
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
            zipfel_score: function() {
                return this.selected;
            }
        }
    ],

    calculate: function() {
        this.results = [];
        var text = "";

        // Cognard
        if (this.selected.includes("Cognard")) {
            text = get_var("drainage", this.variables)
                .cognard_score();
            this.results.push({
                name: "Cognard",
                visible: false,
                ref: "Cognard C, Gobin YP, Pierot L, et al. Cerebral dural arteriovenous fistulas: clinical and angiographic correlation with a revised classification of venous drainage. Radiology. 1995 Mar;194(3):671-80. doi: 10.1148/radiology.194.3.7862961. ",
                summary: text
            });
        }

        // Borden
        if (this.selected.includes("Borden")) {
            text = get_var("drainage", this.variables)
                .borden_score();
            this.results.push({
                name: "Borden",
                visible: false,
                ref: "Borden JA, Wu JK, Shucart WA. A proposed classification for spinal and cranial dural arteriovenous fistulous malformations and implications for treatment. J Neurosurg. 1995 Feb;82(2):166-79. doi: 10.3171/jns.1995.82.2.0166. Erratum in: J Neurosurg. 1995 Apr;82(4):705-6.",
                summary: text
            });
        }


        // Zipfel

        if (this.selected.includes("Zipfel")) {
            switch (get_var("drainage", this.variables)
                .zipfel_score()) {
                case 'Type 1. ':
                    {
                        if (get_var("symptomatic", this.variables)
                            .selected) {
                            text = "Type 1 symptomatic: < 1% annual risk of intracranial haemorrhage and 0% annual risk of death. Treatment recommendation: elective treatment if intracratable symptoms are present. ";
                        } else {
                            text = "Type 1 asymptomatic: < 1% annual risk of intracranial haemorrhage, 0% annual risk of death. Treatment recommendation: Not to treat.  ";
                        }
                        break;
                    }
                case 'Type 2. ':
                    {
                        if (get_var("symptomatic", this.variables)
                            .selected) {
                            text = "Type 2 symptomatic: 7.4-7.6% annual risk of intracranial haemorrhage and 3.8% annual risk of death. Recommendation: immediate treatment. ";
                        } else {
                            text = "Type 2 asymptomatic: 1.4-1.5% annual risk of intracranial haemorrhage and 0% annual risk of death. Recommendation: elective treatment to prevent haemorrhage or neurological deficit. ";
                        }
                        break;
                    }
                case 'Type 3. ':
                    {
                        if (get_var("symptomatic", this.variables)
                            .selected) {
                            text = "Type 3 symptomatic: 7.4-7.6% annual risk of intracranial haemorrhage and 3.8% annual risk of death. Recommendation: immediate treatment.";
                        } else {
                            text = "Type 3 asymptomatic: 1.4-1.5% annual risk of intracranial haemorrhage and 0% annual risk of death. Recommendation: elective treatment to prevent haemorrhage or neurological deficit. ";
                        }
                        break;
                    }
            }
            this.results.push({
                name: "Zipfel",
                visible: false,
                ref: "Zipfel GJ, Shah MN, Refai D, et al. Cranial dural arteriovenous fistulas: modification of angiographic classification scales based on new natural history data. Neurosurg Focus. 2009 May;26(5):E14. doi: 10.3171/2009.2.FOCUS0928.",
                summary: text
            });
        }
    }
}

//////////////
// AVM      //
//////////////
avm_risk = {
    title: "Arteriovenous Malformation",
    results: [],
    selected: ["Spetzler-Martin", "Pollock Flickinger"], // Default selected scores
    types: [{
            value: "Spetzler-Martin", // Types of scores
            text: "Spetzler-Martin" // Same as above
        },
        {
            value: "Pollock Flickinger", // Types of scores
            text: "Pollock Flickinger" // Same as above
        },
        {
            value: "Buffalo", // Types of scores
            text: "Buffalo" // Same as above
        },
        {
            value: "Willinsky", // Types of scores
            text: "Willinsky" // Same as above
        },
        {
            value: "Feliziano", // Types of scores
            text: "Feliziano" // Same as above
        }
    ],
    variables: [{
            name: "Nidal size", // Internal name
            score: "Spetzler-Martin/Willinsky", // separated by "/"
            type: "select",
            options: [{
                    value: 0,
                    text: 'Fistulous only'
                },
                {
                    value: 1,
                    text: '< 1 cm'
                },
                {
                    value: 2,
                    text: '1-3 cm'
                }, {
                    value: 3,
                    text: '3-6 cm'
                }, {
                    value: 4,
                    text: '> 6 cm'
                }
            ],
            text: "Nidal size", // Presented to user
            selected: null,
            spetzler_score: function() { // Function returns to calculate score
                var total = this.selected - 1;
                if (total < 1) total = 1;
                return total;
            },
            willinsky_score: function() { // Function returns to calculate score
                var total = this.selected;
                if (total > 2) total = 2;
                return total;
            },
            feliziano_score: function() { // Function returns to calculate score
                var total = 0;

                return total;
            }
        },
        {
            name: "Fistulae", // Internal name
            score: "Feliziano", // separated by "/"
            type: "radio",
            options: [{
                    value: 0,
                    text: 'No'
                },
                {
                    value: 1,
                    text: 'Yes'
                }
            ],
            text: "Presence of arteriovenous fistula(e)", // Presented to user
            selected: null,
            feliziano_score: function() {
                return this.selected;
            }
        },
        {
            name: "Venous drainage", // Internal name
            score: "Spetzler-Martin", // separated by "/"
            type: "select",
            options: [{
                    value: 0,
                    text: 'Superficial'
                },
                {
                    value: 1,
                    text: 'Deep'
                }
            ],
            text: "Venous drainage", // Presented to user
            selected: null,
            spetzler_score: function() { // Function returns to calculate score
                return this.selected;
            },
            buffalo_score: function() { // Function returns to calculate score
                var total = 0;
                return total;
            },
            willinsky_score: function() { // Function returns to calculate score
                var total = 0;
                return total;
            },
            feliziano_score: function() { // Function returns to calculate score
                var total = 0;
                return total;
            },
            pollock_score: function() { // Function returns to calculate score
                var total = 0;
                return total;
            }
        },
        {
            name: "Eloquence", // Internal name
            score: "Spetzler-Martin/Buffalo/Feliziano", // separated by "/"
            type: "radio",
            options: [{
                value: 0,
                text: 'No'
            }, {
                value: 1,
                text: 'Yes'
            }],
            text: "Eloquence", // Presented to user
            selected: null,
            spetzler_score: function() {
                return this.selected;
            },
            buffalo_score: function() {
                return this.selected;
            },
            feliziano_score: function() {
                return this.selected;
            }
        },
        {
            name: "Age", // Internal name
            score: "Spetzler-Martin/Pollock Flickinger", // separated by "/"
            type: "number",
            text: "Age (years)", // Presented to user
            selected: null,
            spetzler_score: function() {
                var total = 0;
                if (this.selected < 20) total = 1;
                else if (this.selected >= 20 && this.selected < 40) total = 2;
                else if (this.selected >= 40) total = 3;
                return total;
            },

            pollock_score: function() {
                return this.selected;
            }
        },
        {
            name: "Bleeding", // Internal name
            score: "Spetzler-Martin", // separated by "/"
            type: "radio",
            options: [{
                value: 1,
                text: 'No'
            }, {
                value: 0,
                text: 'Yes'
            }],
            text: "Bleeding", // Presented to user
            selected: null,
            spetzler_score: function() { // Function returns to calculate score
                return this.selected;
            },
            buffalo_score: function() { // Function returns to calculate score
                var total = 0;
                return total;
            },
            willinsky_score: function() { // Function returns to calculate score
                var total = 0;
                return total;
            },
            feliziano_score: function() { // Function returns to calculate score
                var total = 0;
                return total;
            },
            pollock_score: function() { // Function returns to calculate score
                var total = 0;
                return total;
            }
        },
        {
            name: "Compactness", // Internal name
            score: "Spetzler-Martin", // separated by "/"
            type: "select",
            options: [{
                value: 1,
                text: 'Diffuse nidus'
            }, {
                value: 0,
                text: 'Compact nidus'
            }],
            text: "Compactness", // Presented to user
            selected: null,
            spetzler_score: function() { // Function returns to calculate score
                return this.selected;
            },
            buffalo_score: function() { // Function returns to calculate score
                var total = 0;
                return total;
            },
            willinsky_score: function() { // Function returns to calculate score
                var total = 0;
                return total;
            },
            feliziano_score: function() { // Function returns to calculate score
                var total = 0;
                return total;
            },
            pollock_score: function() { // Function returns to calculate score
                var total = 0;
                return total;
            }
        },
        {
            name: "Number of feeding arteries", // Internal name
            score: "Buffalo/Willinsky/Feliziano", // separated by "/"
            type: "number",
            text: "Number of feeding arteries", // Presented to user
            selected: null,
            buffalo_score: function() {
                var total = 0
                if (this.selected == 1 || this.selected == 2) { total = 1; } else if (this.selected == 3 || this.selected == 4) { total = 2; } else if (this.selected >= 5) { total = 3; }
                return total;
            },
            willinsky_score: function() { // Function returns to calculate score
                var total = 0;
                if (this.selected != 0) total = 1;
                return total;
            },
            feliziano_score: function() {
                var total = 0
                if (this.selected == 1 || this.selected == 2) { total = 1; } else if (this.selected >= 3 && this.selected < 6) { total = 2; } else if (this.selected >= 6) { total = 3; }
                return total;
            }
        },
        {
            name: "Diameter of arterial pedicles", // Internal name
            score: "Buffalo", // separated by "/"
            type: "select",
            options: [{
                value: 0,
                text: 'Most less than 1 mm'
            }, {
                value: 1,
                text: 'Most over 1 mm'
            }],
            text: "Diameter of arterial pedicles", // Presented to user
            selected: null,
            spetzler_score: function() { // Function returns to calculate score
                var total = 0;
                return total;
            },
            buffalo_score: function() {
                return this.selected;
            },
            willinsky_score: function() { // Function returns to calculate score
                var total = 0;
                return total;
            },
            feliziano_score: function() { // Function returns to calculate score
                var total = 0;
                return total;
            },
            pollock_score: function() { // Function returns to calculate score
                var total = 0;
                return total;
            }
        },
        {
            name: "Type of feeding arteries", // Internal name
            score: "Willinsky", // separated by "/"
            type: "select",
            options: [{
                value: 0,
                text: 'Cortical'
            }, {
                value: 1,
                text: 'Perforator'
            }],
            text: "Type of feeding arteries", // Presented to user
            selected: null,
            willinsky_score: function() {
                return this.selected;
            }
        },
        {
            name: "Number of draining veins", // Internal name
            score: "Willinsky", // separated by "/"
            type: "select",
            options: [{
                value: 0,
                text: 'Single'
            }, {
                value: 1,
                text: 'Multiple'
            }],
            text: "Number of draining veins", // Presented to user
            selected: null,
            willinsky_score: function() {
                return this.selected;
            }
        },
        {
            name: "Nidal volume", // Internal name
            score: "Pollock Flickinger", // separated by "/"
            type: "number",
            text: "Nidal volume (cm3)", // Presented to user
            selected: null,
            pollock_score: function() {
                return this.selected;
            }
        },
        {
            name: "Location", // Internal name
            score: "Pollock Flickinger", // separated by "/"
            type: "select",
            options: [{
                value: 0,
                text: 'Frontal or temporal'
            }, {
                value: 1,
                text: 'Parietal/occipital/intraventricular/corpus c/cerebellar'
            }, {
                value: 2,
                text: 'Basal ganglia/thalamic/brainstem'
            }],
            text: "Location", // Presented to user
            selected: null,
            pollock_score: function() {
                return this.selected;
            }
        }
    ],

    calculate: function() {
        var text = "";
        this.results = [];

        /////////
        // Spetzler Martin + Supplementary
        /////////
        suppl = [null,  null, "100% (n=24/24) improved or unchanged. ", "98% (n=59/60) improved or unchanged. ", "90% (n=182/203) improved or unchanged. ", "81% (n=237/291) improved or unchanged. ", "76% (n=176/232) improved or unchanged. ", "61% (n=84/138) improved or unchanged. ", "38% (n=18/48) improved or unchanged. ", "45% (n=5/11) improved or unchanged. ", "100% (n=2/2 NB VERY LOW NUMBERS IN SUBGROUP SUGGESTS UNLIKELY TO PROVIDE PREDICTIVE VALUE). "]


        if (this.selected.includes("Spetzler-Martin")) {
            var size = get_var("Nidal size", this.variables).spetzler_score();
            var venous = get_var("Venous drainage", this.variables).spetzler_score();
            var eloquence = get_var("Eloquence", this.variables).spetzler_score();
            var size = get_var("Nidal size", this.variables).spetzler_score();
            var age = get_var("Age", this.variables).spetzler_score();
            var bleeding = get_var("Bleeding", this.variables).spetzler_score();
            var compactness = get_var("Compactness", this.variables).spetzler_score();

            var sm = size + venous + eloquence;
            var sup = age + bleeding + compactness;

            text = "Spetzler Martin score " + sm + " and Supplementary score " + sup;
            text = text + " (size " + size + ", venous drainage " + venous + ", eloquence " + eloquence + ", age " + age + ", bleeding " + bleeding + ", compactness " + compactness + "). ";

            text = text + "Interpretation: " + suppl[sm+sup];


            /*if (sm < 4 && sup < 4) {
                text = text + "Interpretation: Low grade Spetzler-Martin and supplementary scores. 85% risk of improvement or no change in neurology and 15% worse or dead after microsurgery. ";
            } else if (sm >= 4 && sup >= 4) {
                text = text + "Interpretation: High grade Spetzler-Martin and supplementary scores. 50% risk of improvement or no change in neurology and 50% worse or dead after microsurgery. ";

            } else if (sm < 4 && sup >= 4) {
                text = text + "Interpretation: Low Spetzler-Martin and high supplementary scores. 59% risk of improvement or no change in neurology and 41% worse or dead after microsurgery. ";
            } else if (sm >= 4 && sup < 4) {
                text = text + "Interpretation: High Spetzler-Martin and low supplementary scores. 71% risk of improvement or no change in neurology and 29% worse or dead after microsurgery. ";
            }*/


            this.results.push({
                name: "Spetzler-Martin",
                visible: false,
                ref: "Spetzler RF, Martin NA. A proposed grading system for arteriovenous malformations. J. Neurosurg. 1986;65 (4): 476-83. doi:10.3171/jns.1986.65.4.0476 and Lawton MT, Kim H, McCulloch CE, Mikhak B, Young WL. A supplementary grading scale for selecting patients with brain arteriovenous malformations for surgery. (2010) Neurosurgery. 66 (4): 702-13; discussion 713. doi:10.1227/01.NEU.0000367555.16733.E1 and Kim H, Abla AA, Nelson J, McCulloch CE, Bervini D, Morgan MK, Stapleton C, Walcott BP, Ogilvy CS, Spetzler RF, Lawton MT. Validation of the supplemented Spetzler-Martin grading system for brain arteriovenous malformations in a multicenter cohort of 1009 surgical patients. Neurosurgery. 2015 Jan;76(1):25-31; discussion 31-2; quiz 32-3. doi: 10.1227/NEU.0000000000000556. PMID: 25251197; PMCID: PMC4270816.",
                summary: text
            });
        }

        /////////
        // Buffalo
        /////////
        if (this.selected.includes("Buffalo")) {
            var total = 0;
            for (var n = 0; n < this.variables.length; n++) {
                if (this.variables[n].score.includes("Buffalo")) {
                    total = total + this.variables[n].buffalo_score();
                }
            }
            text = "Buffalo: " + total + ". ";
            this.results.push({
                name: "Buffalo",
                visible: false,
                ref: "Dumont TM, Kan P, Snyder KV, Hopkins LN, Siddiqui AH, Levy EI. A proposed grading system for endovascular treatment of cerebral arteriovenous malformations: Buffalo score. Surg Neurol Int. 2015 Jan 7;6:3. doi: 10.4103/2152-7806.148847. ",
                summary: text
            });
        }

        /////////
        // Willinsky
        /////////
        if (this.selected.includes("Willinsky")) {
            var total = 0;
            for (var n = 0; n < this.variables.length; n++) {
                if (this.variables[n].score.includes("Willinsky")) {
                    total = total + this.variables[n].willinsky_score();
                }
            }
            text = "Willinsky: " + total + ". ";
            this.results.push({
                name: "Willinsky",
                visible: false,
                ref: "Willinsky, R.; Goyal, M.; Terbrugge, K.; Montanera, W.; Wallace, M.C.; Tymianski, M. (2001). Embolisation of Small (< 3 cm) Brain Arteriovenous Malformations. Interventional Neuroradiology, 7(1), 19–27. doi:10.1177/159101990100700102 ",
                summary: text
            });
        }

        /////////
        // Feliziano
        /////////
        if (this.selected.includes("Feliziano")) {
            var total = 0;
            for (var n = 0; n < this.variables.length; n++) {
                if (this.variables[n].score.includes("Feliziano")) {
                    total = total + this.variables[n].feliziano_score();
                }
            }
            text = "Feliziano: " + total + ". ";
            this.results.push({
                name: "Feliziano",
                visible: false,
                ref: "Feliciano CE, de León-Berra R, Hernández-Gaitán MS, Rodríguez-Mercado R. A proposal for a new arteriovenous malformation grading scale for neuroendovascular procedures and literature review. P R Health Sci J. 2010 Jun;29(2):117-20. ",
                summary: text
            });
        }

        /////////
        // Pollock
        /////////

        if (this.selected.includes("Pollock Flickinger")) {
            var age = get_var("Age", this.variables).pollock_score();
            var nidal_volume = get_var("Nidal volume", this.variables).pollock_score();
            var location = get_var("Location", this.variables).pollock_score();
            var total = 0.1 * nidal_volume + 0.02 * age + 0.3 * location;
            var risk = -49.6 * total + 137.2;
            if (total < 0.75) risk = 100;
            if (total > 2) risk = 38;
            risk = risk.toFixed(0);

            text = "AVM score: " + total.toFixed(2) + ". ";
            text = text + "Interpretation: " + risk + "% excellent outcome after radiosurgery. ";

            this.results.push({
                name: "Pollock Flickinger",
                image: "pollock.png",
                body: "AVM score = (0.1)(AVM volume) + (0.02)(patient age) + (0.3)(AVM location).",
                ref: "Pollock, Bruce E.; Flickinger, John C. (2002). A proposed radiosurgery-based grading system for arteriovenous malformations. Journal of Neurosurgery, 96(1), 79–85. doi:10.3171/jns.2002.96.1.0079  ",
                visible: false,
                summary: text
            });
        }
    }
}


//////////////
// Carotid stenosis      //
//////////////
carotid_stenosis = {
    title: "Carotid stenosis",
    results: [],
    selected: ["NASCET"], // Default selected scores
    types: [{
        value: "NASCET", // Types of scores
        text: "NASCET" // Same as above
    }],
    variables: [{
            name: "stenosis", // Internal name
            score: "NASCET", // separated by "/"
            type: "number",
            text: "Narrowest ICA diameter in the stenotic segment (mm)", // Presented to user
            selected: null,
            nascet_score: function() {
                return this.selected;
            }
        },
        {
            name: "normal", // Internal name
            score: "NASCET", // separated by "/"
            type: "number",
            text: "Diameter of the normal distal ICA (mm)", // Presented to user
            selected: null,
            nascet_score: function() {
                return this.selected;
            }
        }
    ],

    calculate: function() {
        var text = "";
        this.results = [];

        var stenosis = get_var("stenosis", this.variables).nascet_score();
        var normal = get_var("normal", this.variables).nascet_score();
        var ratio = (1 - (stenosis / normal)) * 100;

        text = "ICA stenosis = " + ratio.toFixed(0) + "%";
        this.results.push({
            name: "NASCET",
            visible: false,
            ref: "North American Symptomatic Carotid Endarterectomy Trial Collaborators, Barnett HJM, Taylor DW, Haynes RB, Sackett DL, Peerless SJ, Ferguson GG, Fox AJ, Rankin RN, Hachinski VC, Wiebers DO, Eliasziw M. Beneficial effect of carotid endarterectomy in symptomatic patients with high-grade carotid stenosis. N Engl J Med. 1991 Aug 15;325(7):445-53. doi: 10.1056/NEJM199108153250701. PMID: 1852179.",
            summary: text
        });
    }
}


//////////////////////////////////////////
// Intracranial hypotension             //
//////////////////////////////////////////
i_hypotension = {
    title: "Intracranial hypotension",
    results: [],

    selected: ["Dobrocky Bern"], // Default selected scores
    types: [{
        value: "Dobrocky Bern", // Types of scores
        text: "Dobrocky Bern" // Same as above
    }],
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
        bern_score: function() { // Function returns to calculate score
            return this.selected * 2;
        }
    }, {
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
        bern_score: function() { // Function returns to calculate score
            return this.selected * 2;
        }
    }, {
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
        bern_score: function() { // Function returns to calculate score
            return this.selected * 2;
        }
    }, {
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
        bern_score: function() { // Function returns to calculate score
            return this.selected;
        }
    }, {
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
        bern_score: function() { // Function returns to calculate score
            return this.selected;
        }
    }, {
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
        bern_score: function() { // Function returns to calculate score
            return this.selected;
        }
    }],

    calculate: function() {
        var text = "";
        this.results = [];

        /////////
        // Bern
        /////////

        var total = 0;
        this.results = [];

        if (this.selected.includes("Dobrocky Bern")) {
            for (var n = 0; n < this.variables.length; n++) {
                total = total + this.variables[n].bern_score();

                if (total < 3) {
                    text = "Low risk (" + total + ")";
                } else if (total > 2 && total < 5) {
                    text = "Intermediate risk (" + total + ")";
                } else if (total > 4) {
                    text = "High risk (" + total + ")";
                }
            }
            this.results.push({
                name: "Dobrocky Bern",
                visible: false,
                ref: "Dobrocky T, Grunder L, Breiding PS, et al. Assessing Spinal Cerebrospinal Fluid Leaks in Spontaneous Intracranial Hypotension With a Scoring System Based on Brain Magnetic Resonance Imaging Findings. JAMA Neurol. 2019 May 1;76(5):580-587. doi: 10.1001/jamaneurol.2018.4921. PMID: 30776059; PMCID: PMC6515981.",
                summary: text
            });
        }
    }


}

//////////////
// Late presentation Stroke      //
//////////////
/*
late_stroke = {
    title: "Late presentation stroke",
    results: [],

    selected: ["DAWN", "DEFUSE 3"], // Default selected scores
    types: [{
            value: "DAWN", // Types of scores
            text: "DAWN" // Same as above
        },
        {
            value: "DEFUSE 3", // Types of scores
            text: "DEFUSE 3" // Same as above
        }
    ],
    variables: [{
        name: "Age", // Internal name
        score: "DAWN / DEFUSE 3", // separated by "/"
        type: "number",
        text: "Age", // Presented to user
        selected: null,
        return_value: function() {
            var total = 0;
            return total;
        }
    }],

    calculate: function() {
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
            text = risk + " 5-year risk of rupture. ";
        } else {
            text = "";
        }
    }
}*/
