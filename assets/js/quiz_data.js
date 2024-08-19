// The Structure of this Object was created and suggested by an AI.
// It is my Challenge to use this structure and implement it in my Quiz. 

/* jshint esversion: 11 */


const quizData = {
    relaxation: {
        question: 'What type of relaxation environment do you prefer?',
        options: {
            spa: {
                question: 'What type of spa treatments are you most interested in?',
                options: {
                    traditional: {
                        answer: "Here's your ideal spa destination:",
                        destination: 'Ras Kutani',
                        link: 'https://www.exploretanzania.nl/en/destinations/ras-kutani/'
                    },
                    wellness: {
                        answer: "Here's your ideal spa destination:",
                        destination: 'One Nature Nyaruswiga in Serengeti',
                        link: 'https://onenaturehotels.com/nyaruswiga/'
                    },
                    beauty: {
                        answer: "Here's your ideal spa destination:",
                        destination: 'The Spa at The Residence Zanzibar',
                        link: 'https://www.cenizaro.com/theresidence/zanzibar/spa-wellness/spa-programmes'
                    }
                },
                image: { alt: 'A close-up of an oil burner with a lit candle', src: 'assets/images/oil-burner.jpg' }
            },
            beach: {
                question: 'What is your preferred climate?',
                options: {
                    warm: {
                        answer: "Here's your ideal beach destination:",
                        destination: 'Nungwi Beach, Zanzibar',
                        link: 'https://www.zanzibar.com/holidays/best-beaches-in-zanzibar/nungwi-beach/'
                    },
                    hot: {
                        answer: "Here's your ideal beach destination:",
                        destination: 'Ras Kutani',
                        link: 'https://www.exploretanzania.nl/en/destinations/ras-kutani/'
                    },
                    mild: {
                        answer: "Here's your ideal beach destination:",
                        destination: 'Mafia Island Marine Park',
                        link: 'https://www.mafiaisland.com/'
                    }
                },
                image: { alt: 'Aerial view of Zanzibar Beach', src: 'assets/images/zanzibar-beach.jpg' }
            },
            mountain: {
                question: 'What kind of activities would you like to include in your mountain retreat?',
                options: {
                    walks: {
                        answer: "Here's your ideal mountain retreat:",
                        destination: 'Ngorongoro Crater Lodge (crater rim walks)',
                        link: 'https://www.andbeyond.com/magazine/explore-the-crater-by-foot/'
                    },
                    visits: {
                        answer: "Here's your ideal mountain retreat:",
                        destination: "Arusha Coffee Lodge (nearby Ng'ireshi village)",
                        link: 'https://www.elewanacollection.com/index.php/arusha-coffee-lodge/at-a-glance'
                    },
                    relax: {
                        answer: "Here's your ideal mountain retreat:",
                        destination: "Gibb's Farm, Karatu (Ngorongoro Highlands)",
                        link: 'https://www.gibbsfarm.com/'
                    }
                },
                image: { alt: 'A panoramic mountain landscape', src: 'assets/images/green-mountains.jpg' }
            }
        },
        image: { alt: 'White hammock bed', src: 'assets/images/hammock-bed.jpg' }
    },
    adventure: {
        question: 'What level of physical activity are you comfortable with?',
        options: {
            mild: {
                question: 'What type of mild activities do you prefer?',
                options: {
                    guides: {
                        answer: "Here's your ideal mild adventure destination:",
                        destination: 'Guided safari in Tarangire National Park',
                        link: 'https://www.tanzaniaodyssey.com/blog/cadogan-guide-to-tanzanias-national-parks/'
                    },
                    tours: {
                        answer: "Here's your ideal mild adventure destination:",
                        destination: 'Cultural tour to Maasai villages in Ngorongoro Conservation Area',
                        link: 'https://www.ngorongorocratertanzania.org/ngorongoro-maasai-boma-cultural-tour/'
                    },
                    cultures: {
                        answer: "Here's your ideal mild adventure destination:",
                        destination: 'Coffee plantation experience near Moshi',
                        link: 'https://www.budget-safari-tanzania.com/tour/9-visit-a-kilimanjaro-coffee-plantation-half-day-excursion.html'
                    }
                },
                image: { alt: 'Capture of a giraffe behind bush', src: 'assets/images/giraffe-behind-bush.jpg' }
            },
            moderate: {
                question: 'What kind of moderate adventure activities do you prefer?',
                options: {
                    water: {
                        answer: "Here's your ideal moderate adventure destination:",
                        destination: 'Snorkeling and diving in Zanzibar',
                        link: 'https://zanzibaroneocean.com/snorkeling/'
                    },
                    land: {
                        answer: "Here's your ideal moderate adventure destination:",
                        destination: 'Horseback riding safaris in the Serengeti',
                        link: 'https://www.equitours.com/horseback-riding/serengeti-safari/'
                    },
                    both: {
                        answer: "Here's your ideal moderate adventure destination:",
                        destination: 'Chemka Hot Springs swimming and exploration',
                        link: 'https://www.kilimanjaroadventures.net/tour/kikuletwa-hot-springs-chemka-natural-swimming-pool/'
                    }
                },
                image: { alt: 'Camping tent in the jungle', src: 'assets/images/camping-jungle.jpg' }
            },
            intense: {
                question: 'What type of intense adventure activities do you prefer?',
                options: {
                    climbing: {
                        answer: "Here's your ideal intense adventure destination:",
                        destination: 'Mount Kilimanjaro climb',
                        link: 'https://www.adventurealternative.com/climb-mount-kilimanjaro/'
                    },
                    rafting: {
                        answer: "Here's your ideal intense adventure destination:",
                        destination: 'White water rafting on the Rufiji River',
                        link: 'https://www.eastafricasafariventures.com/discover-once-in-lifetime-experiences/river-rafting/'
                    },
                    wilderness: {
                        answer: "Here's your ideal intense adventure destination:",
                        destination: 'Wilderness expedition in Ruaha National Park',
                        link: 'https://acrosswilderness.com/destinations-tz-ruaha-national-park.html'
                    }
                },
                image: { alt: 'View of Mount Kilimanjaro', src: 'assets/images/kilimanjaro.jpg' }
            }
        },
        image: { alt: 'Giraffe spotting on safari', src: 'assets/images/giraffe-safari.jpg' }
    },
    education: {
        question: 'What subject area interests you most for this educational trip?',
        options: {
            history: {
                question: 'What specific historical and cultural aspects interest you?',
                options: {
                    archaeology: {
                        answer: "Here's your ideal history education destination:",
                        destination: 'Oldupai Gorge (Cradle of Humankind)',
                        link: 'https://www.loyaltoursandsafaris.com/olduvai-gorge-and-laetoli-tours/'
                    },
                    indigenous: {
                        answer: "Here's your ideal history education destination:",
                        destination: 'Lake Eyasi (Hadzabe and Datoga tribes)',
                        link: 'https://www.safarisafricaunited.com/english/activities-during-safari/hadzabe-and-datoga-tribes-at-lake-eyasi/'
                    },
                    colonial: {
                        answer: "Here's your ideal history education destination:",
                        destination: 'Stone Town, Zanzibar',
                        link: 'https://www.viator.com/tours/Zanzibar/Stone-Town-Tour/d5590-34358P3?dd_referrer=https%3A%2F%2Fwww.perplexity.ai%2F'
                    }
                },
                image: { alt: 'Stone Town Zanzibar', src: 'assets/images/stone-town.jpg' }
            },
            science: {
                question: 'What area of science and technology are you most interested in?',
                options: {
                    wildlife: {
                        answer: "Here's your ideal scientific education destination:",
                        destination: 'Serengeti National Park research center',
                        link: 'https://www.tawiri.or.tz/serengeti-center/'
                    },
                    farming: {
                        answer: "Here's your ideal scientific education destination:",
                        destination: 'Mulala village tour (coffee and banana plantations)',
                        link: 'https://vaolo.com/en/experiences/mulala-village-walking-tour-agape-mulala-cte/'
                    },
                    biology: {
                        answer: "Here's your ideal scientific education destination:",
                        destination: 'Udzungwa Mountains National Park (biodiversity hotspot)',
                        link: 'https://www.tanzaniaparks.go.tz/national_parks/udzungwa-mountains-national-park'
                    }
                },
                image: { alt: 'School books on a shelf', src: 'assets/images/school-books.jpg' }
            },
            arts: {
                question: 'What type of arts and literature experiences are you looking for?',
                options: {
                    visual: {
                        answer: "Here's your ideal arts education destination:",
                        destination: 'Tingatinga painting workshops in Dar es Salaam',
                        link: 'https://www.booking.com/attractions/tz/prwiaaa13gbf-painting-workshop-to-learn-tinga-tinga-techniques.ca.html'
                    },
                    performance: {
                        answer: "Here's your ideal arts education destination:",
                        destination: 'Traditional dance performances in Bagamoyo',
                        link: 'https://www.nature-reserves.go.tz/index.php/destinations/activity/80/41'
                    },
                    literature: {
                        answer: "Here's your ideal arts education destination:",
                        destination: 'Swahili poetry and storytelling sessions in Zanzibar',
                        link: 'http://zanzibarswahiliblog.blogspot.com/2012/09/jahazi-swahili-poetry-book-about.html'
                    }
                },
                image: { alt: 'Stacks of large spools of twine and rope', src: 'assets/images/spools.jpg' }
            }
        },
        image: { alt: 'Wood sculpture on shelf', src: 'assets/images/wood-sculpture.jpg' }
    }
};