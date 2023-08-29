import React, { Component } from 'react'
import Newsitem from './Newsitem'
export default class News extends Component {
    articles = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "Tropical Storm Idalia heading toward Florida, US NHC says - Reuters",
            "description": "Tropical Storm Idalia has formed in the Gulf of Mexico and could strengthen into a hurricane, bringing high winds and storm surges to Cuba and Florida later this week.",
            "url": "https://www.reuters.com/world/us/tropical-storm-idalia-heading-toward-florida-us-nhc-says-2023-08-27/",
            "urlToImage": "https://www.reuters.com/resizer/1K8rV1wNsUEi1TIJJSQgwO601-s=/1194x625/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VKF5IJ2WWZBG5LHUGEHRMHLEGY.png",
            "publishedAt": "2023-08-27T15:44:25Z",
            "content": "Aug 27 (Reuters) - Tropical Storm Idalia has formed in the Gulf of Mexico and could strengthen into a hurricane, bringing high winds and storm surges to Cuba and Florida later this week.\r\nThe storm h… [+983 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Wccftech"
            },
            "author": "Hassan Mujtaba",
            "title": "AMD FSR 3 & HYPR-RX Explained: Frame Gen For All Is A Win-Win For Gamers - Wccftech",
            "description": "AMD FSR 3 & HYPR-RX are two upcoming technologies that gamers are looking forward to the most & with the recent announcements,",
            "url": "https://wccftech.com/amd-fsr-3-hypr-rx-explained-frame-gen-for-all-is-a-win-win-for-gamers/",
            "urlToImage": "https://cdn.wccftech.com/wp-content/uploads/2023/08/AMD-FSR-3-HYPR-RX-1.png",
            "publishedAt": "2023-08-27T15:00:00Z",
            "content": "AMD FSR 3 &amp; HYPR-RX are two upcoming technologies that gamers are looking forward to the most &amp; with the recent announcements, we got to learn more about them &amp; how they will help not jus… [+12354 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motorsport.com"
            },
            "author": "Filip Cleeren",
            "title": "F1 Dutch GP red-flagged after Zhou crashes in downpour - Motorsport.com",
            "description": "Formula 1's Dutch Grand Prix has been red-flagged following a torrential downpour with seven laps remaining.",
            "url": "https://www.motorsport.com/f1/news/f1-dutch-gp-red-flagged-after-zhou-crashes-in-downpour/10512364/",
            "urlToImage": "https://cdn-5.motorsport.com/images/amp/2GzaOol0/s6/formula-1-dutch-gp-2023-a-mars-3.jpg",
            "publishedAt": "2023-08-27T14:42:47Z",
            "content": "On lap 61 of 72 anticipated heavy showers hit the Zandvoort track, prompting the entire field to change to intermediates of full wets.\r\nBut even on rain tyres, drivers struggled to navigate the Turn … [+2081 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": ", USA TODAY",
            "title": "Russia confirms death of Prigozhin, war czar who turned on Putin: Live Ukraine updates - USA TODAY",
            "description": "DNA testing on human remains from the crash of a private plane outside Moscow confirmed the death of mercenary leader Yevgeny Prigozhin. Live updates.",
            "url": "https://www.usatoday.com/story/news/world/ukraine/2023/08/27/ukraine-russia-war-live-updates/70694504007/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2023/08/27/USAT/457e5bb4-d17d-4513-a2ed-43ef8d1fc5b2-AP_Russia_Obit_Prigozhin.jpg?auto=webp&crop=3941,2217,x0,y226&format=pjpg&width=1200",
            "publishedAt": "2023-08-27T14:26:15Z",
            "content": "DNA testing on human remains from the crash of a private plane northwest of Moscow that killed all 10 people last week has confirmed the death of Wagner Group mercenary leader Yevgeny Prigozhin, Russ… [+3671 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "The science of sweat - CBS Sunday Morning",
            "description": "Humans are rare among animals in that we possess sweat glands all over our bodies, which can produce moisture, and even embarrassment. But what exactly does ...",
            "url": "https://www.youtube.com/watch?v=pVtucrI-1Cw",
            "urlToImage": "https://i.ytimg.com/vi/pVtucrI-1Cw/maxresdefault.jpg",
            "publishedAt": "2023-08-27T14:08:00Z",
            "content": null
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "Ramaswamy doubles down on calling Pressley part of 'modern KKK' - POLITICO",
            "description": "The Massachusetts Democrat said Saturday that \"a line was crossed\" by the GOP presidential contender.",
            "url": "https://www.politico.com/news/2023/08/27/ramaswamy-pressley-modern-kkk-00113122",
            "urlToImage": "https://static.politico.com/3b/c2/0c10095a4a13ba9f05266c5cf207/election-2024-debate-57229.jpg",
            "publishedAt": "2023-08-27T13:53:09Z",
            "content": "During his Friday appearance in Iowa, Ramaswamy accused Pressley, the first Black woman elected to represent Massachusetts in Congress, of racism and compared her to modern grand wizards of the Ku Kl… [+1089 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marine Corps Times"
            },
            "author": "Irene Loewenson",
            "title": "At least 3 Marines killed, more injured in Osprey crash in Australia - Marine Corps Times",
            "description": "Five others were in serious condition, and others unaccounted for, after an MV-22 Osprey crashed with 23 service members aboard.",
            "url": "https://www.marinecorpstimes.com/news/your-marine-corps/2023/08/27/at-least-3-marines-killed-more-injured-in-osprey-crash-in-australia/",
            "urlToImage": "https://www.marinecorpstimes.com/resizer/jb__pL70a4Fui9MiEe8kbfkT5h0=/1024x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/archetype/HE5WHWIQ2RCKXBJR3BV5VIP33E.jpg",
            "publishedAt": "2023-08-27T13:07:44Z",
            "content": "Three Marines have been confirmed dead after a Marine Corps MV-22 Osprey carrying 23 service members crashed in Australia on Sunday.\r\nFive others in serious condition were transported to Royal Darwin… [+2816 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "Credit Suisse posted $4 billion loss in second quarter, Sonntagszeitung reports - Reuters",
            "description": "Credit Suisse, which is now a subsidiary of UBS <a href=\"https://www.reuters.com/markets/companies/UBSG.S\" target=\"_blank\">(UBSG.S)</a>, posted a loss of 3.5 billion Swiss francs ($4.0 billion) in the second quarter of 2023, according to a report in the Sonnt…",
            "url": "https://www.reuters.com/business/finance/credit-suisse-posted-4-billion-loss-2q-sonntagszeitung-2023-08-27/",
            "urlToImage": "https://www.reuters.com/resizer/rGeyn-uNNnPE9VB7_j5BnKjTEeE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CE5JKFOSLJIATAXVUU6W4XKS3E.jpg",
            "publishedAt": "2023-08-27T12:39:00Z",
            "content": "BERLIN, Aug 27 (Reuters) - Credit Suisse, which is now a subsidiary of UBS (UBSG.S), posted a loss of 3.5 billion Swiss francs ($4.0 billion) in the second quarter of 2023, according to a report in t… [+534 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Tierney Sneed, Jeremy Herb",
            "title": "The Fulton County charges against Donald Trump face a major test Monday. Here's what to watch for - CNN",
            "description": "Fulton County District Attorney Fani Willis will lay out the first details of her sprawling anti-racketeering case against former President Donald Trump, his White House chief of staff Mark Meadows and 17 other co-defendants at a federal court hearing on Mond…",
            "url": "https://www.cnn.com/2023/08/27/politics/trump-meadows-georgia-hearing/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230816164804-mark-meadows-donald-trump-split.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-08-27T12:31:00Z",
            "content": "Fulton County District Attorney Fani Willis will lay out the first details of her sprawling anti-racketeering case against former President Donald Trump, his White House chief of staff Mark Meadows a… [+7387 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Cut"
            },
            "author": "Claire Comstock-Gay",
            "title": "Weekly Horoscopes for the Week of August 28 by the Cut - The Cut",
            "description": "A list of all the zodiac signs (Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces) and their weekly horoscopes, by the Cut’s astrologer, Madame Clairevoyant.",
            "url": "http://www.thecut.com/2023/08/weekly-horoscopes-for-the-week-of-august-28-by-the-cut.html",
            "urlToImage": "https://pyxis.nymag.com/v1/imgs/e79/a39/d9baa894e18beb0262684c847be9462553-23-virgo-Ava-DuVernay-weekly.1x.rsocial.w1200.jpg",
            "publishedAt": "2023-08-27T12:30:23Z",
            "content": "On Sunday, Mars enters Libra, where it will stay until mid-October. During this time, expect to feel even more indecisive than usual, wavering between multiple options or struggling to commit to a pl… [+6900 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Bryan Alexander",
            "title": "'DWTS' judge Derek Hough marries partner Hayley Erbert in fairytale redwood forest wedding - USA TODAY",
            "description": "\"Dancing With the Stars\" judge Derek Hough and dance dancer Hayley Erbert have been dating since 2015, and tied the knot Saturday amid redwood trees.",
            "url": "https://www.usatoday.com/story/entertainment/celebrities/2023/08/27/derek-hough-hayley-erbert-married/70616101007/",
            "urlToImage": "https://www.usatoday.com/gcdn/presto/2022/06/02/USAT/22d364e6-1ce6-4717-a3b4-184e0557ef5d-AFP_AFP_1OV3FZ.JPG?crop=4615,2596,x0,y371&width=3200&height=1801&format=pjpg&auto=webp",
            "publishedAt": "2023-08-27T12:23:12Z",
            "content": "\"Dancing With the Stars\" judge Derek Hough and Hayley Erbert, longtime partners in life and on the ballroom dance floor, are married.\r\nHough, 38, and \"DWTS\" pro dancer Erbert, 28, married Saturday in… [+2658 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBCSports.com"
            },
            "author": "Josh Alper",
            "title": "Aaron Rodgers: Jets debut a \"special moment,\" will be \"electric\" in Week 1 - NBC Sports",
            "description": "Quarterback Aaron Rodgers had pretty simple criteria for determining that his first game action with the Jets was a success.",
            "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/aaron-rodgers-jets-debut-a-special-moment-will-be-electric-in-week-1",
            "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/d223b88/2147483647/strip/true/crop/4643x2612+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.amazonaws.com%2Fbrightspot%2F26%2F23%2F8d9e0ac946e8a3ec2282d762cfdb%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1641099150",
            "publishedAt": "2023-08-27T12:18:07Z",
            "content": "Quarterback Aaron Rodgers had pretty simple criteria for determining that his first game action with the Jets was a success. \r\nRodgers played two series against the Giants on Saturday and left the ga… [+954 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Stefan Sykes",
            "title": "These four trends are shaping the gun industry - CNBC",
            "description": "The gun industry is finding its footing after a post-pandemic sales slump forced some of the largest manufacturers roll back production.",
            "url": "https://www.cnbc.com/2023/08/27/trends-shaping-gun-industry.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107250602-1685884471079-gettyimages-1495746299-guns172066_tdawadp7.jpeg?v=1693137601&w=1920&h=1080",
            "publishedAt": "2023-08-27T12:00:01Z",
            "content": "People fire an assortment of guns at the annual Machine Gun Shoot sponsored by Shooters Gauntlet on June 03, 2023 in Monroe, Pennsylvania. The shoot, which has been held since 2016, lets gun enthusia… [+8257 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GoodHousekeeping.com"
            },
            "author": "Luisa Colón",
            "title": "COVID EG.5 Variant Symptoms Experts Say You Need to Watch For - Yahoo Life",
            "description": "It has an edge over other variants we've seen...",
            "url": "https://www.goodhousekeeping.com/health/a44913133/eris-eg5-covid-symptoms/",
            "urlToImage": "https://hips.hearstapps.com/hmg-prod/images/sad-and-depressed-woman-sitting-on-sofa-at-home-royalty-free-image-1692995035.jpg?crop=1.00xw:0.752xh;0,0.178xh&resize=1200:*",
            "publishedAt": "2023-08-27T12:00:00Z",
            "content": "<ul><li>The symptoms of Eris are similar to previous strains of the virus, but Eris can more easily elude antibodies that people have developed from previous infection or vaccines. </li><li>An update… [+5418 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Nouran Salahieh, Andy Rose",
            "title": "Jacksonville gunman was turned away from historically Black university before racist shooting that killed 3 at nearby store, authorities say - CNN",
            "description": "The gunman who killed three people Saturday at a Dollar General store in Jacksonville, Florida, had earlier been turned away from the campus of a historically Black university, just blocks away from the site of the shooting authorities said was a targeted att…",
            "url": "https://www.cnn.com/2023/08/27/us/jacksonville-florida-shooting-sunday/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230826163114-02-jacksonville-shooting-082623-still.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-08-27T11:45:00Z",
            "content": "The gunman who killed three people Saturday at a Dollar General store in Jacksonville, Florida, had earlier been turned away from the campus of a historically Black university, just blocks away from … [+6137 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Foxweather.com"
            },
            "author": "Chris Oberholtz, Aaron Barker, Scott Sistek",
            "title": "Franklin to rapidly intensify into season’s first major hurricane; East Coast to see dangerous rip currents - Fox Weather ",
            "description": "Hurricane Franklin is continuing to strengthen as it spins across the Atlantic Ocean and is expected to rapidly intensify into the season’s first major hurricane over the warm waters between the East Coast and Bermuda.",
            "url": "https://www.foxweather.com/weather-news/tracking-hurricane-franklin",
            "urlToImage": "https://images.foxweather.com/static.foxweather.com/www.foxweather.com/content/uploads/2023/08/1024/512/Franklin-_StoryImage_AM_0f8272023.png?ve=1&tl=1",
            "publishedAt": "2023-08-27T11:44:00Z",
            "content": "Hurricane Franklin is continuing to strengthen as it spins across the Atlantic Ocean and is expected to rapidly intensify into the season’s first major hurricane over the warm waters between the East… [+2382 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Michael Wayland, Leslie Josephs",
            "title": "Labor unions are pushing hard for double-digit raises and better hours. Many are winning - CNBC",
            "description": "UPS workers and airline pilots have won rich labor deals. Hollywood writers and actors as well as auto workers could be next.",
            "url": "https://www.cnbc.com/2023/08/27/labor-unions-winning-better-pay-hours.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107270787-1689201521205-gettyimages-1538026140-mt_18265_wmar0u3q.jpeg?v=1693134001&w=1920&h=1080",
            "publishedAt": "2023-08-27T11:00:01Z",
            "content": "Members of the United Auto Workers union hold a rally and practice picket near a Stellantis plant in Detroit, Aug. 23, 2023.\r\nFrom writers' rooms to car factories, workers are pressing companies for … [+9740 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "Minnesotans Love Third-Party Candidates. Will They Vote for Joe Biden? - POLITICO",
            "description": "If Democrats anywhere would peel off for a third-party candidate, it might be in Minnesota.",
            "url": "https://www.politico.com/news/magazine/2023/08/27/minnesota-third-party-democrats-00112946",
            "urlToImage": "https://static.politico.com/08/39/995062004dfbbca1f7610e86fed5/duluthlede3.jpg",
            "publishedAt": "2023-08-27T11:00:00Z",
            "content": "At the Democrats election night watch party, Sipress, a former Duluth City Council member and DSA member, said Larson would have won if she was running against Donald Trump. The political left, he ad… [+1875 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Trump campaign raises $7.1m following historic Georgia mugshot - BBC",
            "description": "Merchandise bearing the ex-president's scowling face at his arrest on Thursday is flying off the shelves.",
            "url": "https://www.bbc.com/news/world-us-canada-66632882",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/134C1/production/_130914097_mediaitem130913620.jpg",
            "publishedAt": "2023-08-27T10:35:26Z",
            "content": "Donald Trump's election campaign says it has raised $7.1m (£5.6m) since his police mugshot was taken at a prison in Atlanta, Georgia, on Thursday.\r\nMuch of the money comes from merchandise such as mu… [+1423 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Foreign Policy"
            },
            "author": "Alan Chin",
            "title": "How Ukraine's Trains Are Adapting to War - Foreign Policy",
            "description": "From wheelchair accessibility to better tea, the national railway service aims not just to keep trains running but to improve.",
            "url": "https://foreignpolicy.com/2023/08/27/ukraine-railway-infrastructure-war-russia/",
            "urlToImage": "https://foreignpolicy.com/wp-content/uploads/2023/08/1-Ukraine-Hospital-Train-Kyiv-Wounded-Alan-Chin-230704-7731.jpg?w=1000",
            "publishedAt": "2023-08-27T10:01:41Z",
            "content": "Nights in Ukraine are short in summer. So at twilight on a July evening, the lights of the main railroad station in the capital were still off as stretchers of the wounded were unloaded from a hospit… [+16702 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className="parentcontainer">
                {this.state.articles.map((element) => {
                    console.log(element)
                    return <div className='newscontent' key={element.url}>
                        <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.newsUrl} ReadMore={element.url}></Newsitem>
                    </div>
                })}
            </div>

        )
    }
}
