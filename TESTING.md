# Testing

> **Note:**  
> Return back to the [README.md](README.md) file.


## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Directory | File | Screenshot | Notes | 
| --- | --- | --- | --- |
|  | 404.html | ![screenshot](documentation/validation/404-page.png) | No Errors |
|  | index.html | ![screenshot](documentation/validation/index-page.png) | No Errors |



### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Directory | File | Screenshot | Notes |
| --- | --- | --- | --- |
| assets/css | style.css | ![screenshot](documentation/validation/css.png) | No Error Found |

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| Directory | File | Screenshot | Notes |
| --- | --- | --- | --- |
| assets/js | quiz_data.js | ![screenshot](documentation/validation/quiz-data.png) | No Warnings or Errors |
| assets/js | script.js | ![screenshot](documentation/validation/script.png) | Four Warnings but they are not game breaking |

## Browser Compatibility


I tested the live/deployed version of my site on the following browsers: 

- [Ungoogled Chrome](https://www.techspot.com/downloads/7181-ungoogled-chromium.html)
- [Firefox](https://www.mozilla.org/firefox/download/)
- [Brave](https://brave.com/download)
- [Opera](https://www.opera.com/download)

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Landing Page | Quiz Section (with options) | Filter Section (with results) | Notes |
| --- | --- | --- | --- | --- |
| Ungoogled Chromium | ![screenshot](documentation/browsers/unchrome-landing.png) | ![screenshot](documentation/browsers/unchrome-quiz.png) | ![screenshot](documentation/browsers/unchrome-filter.png) | Works as expected |
| Firefox | ![screenshot](documentation/responsiveness/landing-desktop.png) | ![screenshot](documentation/responsiveness/quiz-desktop.png) | ![screenshot](documentation/responsiveness/filter-desktop.png) | Works as expected |
| Brave | ![screenshot](documentation/browsers/brave-landing.png) | ![screenshot](documentation/browsers/brave-quiz.png) | ![screenshot](documentation/browsers/brave-filter.png) | Works as expected |
| Opera | ![screenshot](documentation/browsers/opera-landing.png) | ![screenshot](documentation/browsers/opera-quiz.png) | ![screenshot](documentation/browsers/opera-filter.png) | minor visual differences on buttons (as expected) |


## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Landing Page | Quiz Section (with options) | Filter Section (with results) | Notes |
| --- | --- | --- | --- | --- | 
| Mobile (DevTools) | ![screenshot](documentation/responsiveness/landing-mobile.png) | ![screenshot](documentation/responsiveness/quiz-mobile.png) | ![screenshot](documentation/responsiveness/filter-mobile.png) | Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/responsiveness/landing-tablet.png) | ![screenshot](documentation/responsiveness/quiz-tablet.png) | ![screenshot](documentation/responsiveness/filter-tablet.png) | Works as expected |
| Desktop | ![screenshot](documentation/responsiveness/landing-desktop.png) | ![screenshot](documentation/responsiveness/quiz-desktop.png) | ![screenshot](documentation/responsiveness/filter-desktop.png) | Works as expected |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| index.html | ![screenshot](documentation/lighthouse/index-mobile.png) | ![screenshot](documentation/lighthouse/index-desktop.png) | performance impact due to high resource loading |
| 404.html | ![screenshot](documentation/lighthouse/404-mobile.png) | ![screenshot](documentation/lighthouse/404-desktop.png) |  performance impact due to high resource loading  | 


**Comment**:

I am using a lot of images on one page in this project. I could change all images to formats like WebP and AVIF which provide better compression than PNG or JPEG to improve performance. 


## Feature testing

This section outlines the testing procedures for the key features of the project, focusing primarly on the **Quiz** and **Filter** functionalities. The aim is to ensure these features work as intended, providing users with a seamless and engaging experience.

- **Quiz**: An interactive component that guides users through a series of questions to determine their ideal travel experience.
- **Filter**: A feature that allows users to explore all potential travel options and refine their choices based on specific criteria.

## Testing Procedures

### Quiz 

> [!NOTE] Please don't miss the < details > elements to see a Table of Proof for both Quiz Functionality and Final Quiz Results

**Navigation to Quiz**:

- I verifed that the quiz can be accessed via the "Find Your Perfect Trip" button on the landing  page and the header navigation link.

- It's important to point out that clicking these options reveals the quiz section without resetting it, allowing users to switch between the quiz and filter sections seamlessly.

**Quiz Functionality**:

- I confirmed that clicking "Take the Test!" starts the quiz and reveals the first set of options (relaxation, adventure, education) along with a new image.
- I verified that each option (relaxation, adventure, education) generates three new buttons and updates the image accordingly.
- I made sure that each subsequent button press continues to reveal new options and images without any console errors.

**TABLE OF PROOF**
<details>
    <summary>See Table of Proof</summary>  

| Button | Expectation | Result | Screenshot |
| --- |--- | --- | --- |
| 'Take the Test!' | Reveals 3 buttons: relaxation, adventure, education & reveals new image: airplane on sky during golden hour | Pass  | ![screenshot](documentation/testing/buttons/quiz-start.png) | 
| relaxation |  Reveals 3 buttons: spa, beach, mountain & reveals new image: a white hanging bed | Pass | ![screenshot](documentation/testing/buttons/relaxation.png) | 
| spa |  Reveals 3 buttons: traditional, wellness, beauty & reveals new image: close-up of an oil burner with a lit candle | Pass | ![screenshot](documentation/testing/buttons/spa.png) | 
| beach |  Reveals 3 buttons: warm, hot, mild & reveals new image: Zanzibar Beach Image | Pass | ![screenshot](documentation/testing/buttons/beach.png) | 
| mountain |  Reveals 3 buttons: walks, visits, relax & reveals new image: panoramic mountain landscape | Pass | ![screenshot](documentation/testing/buttons/mountain.png) | 
| adventure |  Reveals 3 buttons: mild, moderate, intense & reveals new image: giraffe spotting out of safari car | Pass | ![screenshot](documentation/testing/buttons/adventure.png) | 
| mild |  Reveals 3 buttons: guides, tours, cultures & reveals new image: a giraffe poking its head out | Pass | ![screenshot](documentation/testing/buttons/mild.png) | 
| moderate |  Reveals 3 buttons: water, land, both & reveals new image: camping tent in the jungle | Pass | ![screenshot](documentation/testing/buttons/moderate.png) | 
| intense |  Reveals 3 buttons: climbing, rafting, wilderness & reveals new image: mount Kilimanjaro | Pass | ![screenshot](documentation/testing/buttons/intense.png) | 
| education |  Reveals 3 buttons: history, science, arts & reveals new image: statue sitting on top of wooden table | Pass | ![screenshot](documentation/testing/buttons/education.png) | 
| history |  Reveals 3 buttons: archaeology, indigenous, colonial & reveals new image: Stone Town Zanzibar | Pass | ![screenshot](documentation/testing/buttons/history.png) | 
| science |  Reveals 3 buttons: wildlife, farming, biology & reveals new image: a book shelf filled with science books | Pass | ![screenshot](documentation/testing/buttons/science.png) | 
| arts |  Reveals 3 buttons: visual, performance, literature & reveals new image: a bunch of different colored twine on display | Pass | ![screenshot](documentation/testing/buttons/arts.png) | 

</details>

<br>

**Final Quiz Results**:

- I confirmed that the final stage of the quiz provides accurate content with the correct corresponding external link.

**TABLE OF PROOF**

> [!NOTE] 'Ras Kutani' is, in fact, both a "hot beach" destination, as well as a traditional spa destination.  

<details>
    <summary>See Table of Proof </summary>

| Button | Expected Link content | Result | Screenshot |
| --- | --- | --- | --- | 
| traditional | Ras Kutani | Pass | ![screenshot](documentation/testing/link/traditional.png) | 
| wellness | luxury safari lodge 'one nature Nyaruswiga' in Serengeti | Pass | ![screenshot](documentation/testing/link/wellness.png) | 
| beauty |  the spa at the Residence Zanzibar | Pass | ![screenshot](documentation/testing/link/beauty.png) | 
| warm | Nungwi Beach, Zanzibar | Pass | ![screenshot](documentation/testing/link/warm.png) | 
| hot | Ras Kutani | Pass |![screenshot](documentation/testing/link/hot.png) | 
| mild |  Mafia Island | Pass | ![screenshot](documentation/testing/link/mild.png) | 
| walks | Ngorongoro Crater Lodge | Pass | ![screenshot](documentation/testing/link/walks.png) | 
| visits | Arusha Coffee Lodge  | Pass | ![screenshot](documentation/testing/link/visits.png) | 
| relax | Gibb's Farm | Pass | ![screenshot](documentation/testing/link/relax.png) | 
| guides | Guided safari in Tarangire National Park | Pass | ![screenshot](documentation/testing/link/guide.png) | 
| tours | Cultural tour to Maasai villages in Ngorongoro Conservation Area | Pass | ![screenshot](documentation/testing/link/tour.png) | 
| cultures | Coffee plantation experience near Moshi | Pass | ![screenshot](documentation/testing/link/culture.png) | 
| water | Snorkeling and diving in Zanzibar | Pass | ![screenshot](documentation/testing/link/water.png) | 
| land | Horseback riding safaris in the Serengeti | Pass | ![screenshot](documentation/testing/link/land.png) | 
| both | Chemka Hot Springs swimming and exploration | Pass | ![screenshot](documentation/testing/link/both.png) | 
| climbing | Mount Kilimanjaro climb | Pass | ![screenshot](documentation/testing/link/climbing.png) | 
| rafting | White water rafting on the Rufiji River | Pass | ![screenshot](documentation/testing/link/rafting.png) | 
| wilderness  | Wilderness expedition in Ruaha National Park | Pass | ![screenshot](documentation/testing/link/wilderness.png) | 
| archaeolgy |   Oldupai/Olduvai Gorge | Pass | ![screenshot](documentation/testing/link/archaeology.png) | 
| indigenous |   Lake Eyasi | Pass | ![screenshot](documentation/testing/link/indigenous.png) | 
| colonial |   Stone Town, Zanzibar | Pass | ![screenshot](documentation/testing/link/colonial.png) | 
| wildlife | Serengeti National Park research center | Pass | ![screenshot](documentation/testing/link/wildlife.png) |
| farming | Mulala village tour | Pass | ![screenshot](documentation/testing/link/farming.png) |
| biology | Udzungwa Mountains National Park (biodiversity hotspot) | Pass | ![screenshot](documentation/testing/link/biology.png) |
| visual | Tingatinga painting workshops in Dar es Salaam | Pass | ![screenshot](documentation/testing/link/visual.png) |
| performance | Traditional dance performances in Bagamoyo | Pass | ![screenshot](documentation/testing/link/performance.png) |
| literature | Swahili poetry and storytelling sessions in Zanzibar | Pass | ![screenshot](documentation/testing/link/literature.png) |

</details>

<br>

- The result links open in a new tab, as hardcoded in JavaScript. See image below.

![screenshot](documentation/testing/link/target-blank-hard-code.png)


###  Filter

**Accessing the Filter**:

- After completing the quiz, I navigated successfully to the filter section with the 'Search all Results' Option. 

**Filter Options**:

- I checked that the buttons for popular destinations 'Serengeti' and 'Zanzibar' are working.  
- I tested the "Clear Text" and "All Options" buttons to ensure they facilitate easy filtering and enhance the user experience.
- I checked that clicking the filter results button for 'Relaxation', 'Adventure', and 'Education' are working and providing accurete results, matching the Quiz Final Results. 
- I tested each button with multiple clicks to ensure that bug free buttons. 

**Filter Results counter**:

- I tested the results counter function with various terms to check that the text display would update dynamically. 
- I made sure that the results counter would reset to 0 when clearing the the text input or pressing the 'Clear Text' button option. 

### Additional Features for Testing

#### Navigation Features
        
**Call to Action**: 

I tested that the landing page's call-to-action options effectively starts the quiz.
        
**Menu Navigation**:

I can verify that the menu allows easy switching between the quiz and the filter section on desktop and tablet devices.
        
**Mobile Dropdown**:

I tested the mobile menu dropdown, it is working. 

**Home Button**:

I confirmed that the logo functions as a home button, allowing users to return to the homepage or refresh the site.

**Up-Button**:

- I verified that the "Go up!" option successfully apears at a certain time when scrolling. I tested it on mobile and desktop devices.
- I tested the 'Go up!' button to sucessfully take the user to the top of the page. 

#### Error Page

- I tested the custom error page by entering an incorrect URL, ensuring it displays the intended image and provides a hyperlink back to the homepage.
- I tested that the hyperlink takes the user back to index.html page. 

![screenshot](documentation/features/error-page.png)

### Conclusion

I ensure that all interactive elements and navigation features are thoroughly evaluated for functionality and user experience

## Bugs

### Text Input Field Page Reset 

Initially, I used a form element in HTML to implement an easy reset button for the text input area. However, this became redundant when JavaScript was introduced.

The bug was that, due to the form elements, hitting enter in the text input area caused the site to reset, redirecting the user back to the landing page. This was particularly frustrating for mobile users, who would press enter to exit the input box and view results. Replacing the redundant form elements with div elements resolved the issue. Now, the form does not reset because there is no form anymore.

I tested the filtering functionality after the replacement to ensure it worked as expected. 

### Unexpected Filtering Results 

The filtering functioned similarly for all search input buttons. They were, in fact, written with the same switch statement, as shown below:

![screenshot](documentation/bugs/insertValue.png)

However, for some reason, the filtering options for 'Education,' 'Relaxation,' and 'Adventure' behaved differently. When a user clicked one of these buttons twice, the output would toggle between two different results.

See the table of comparison: 

| Button | First Click | Second Click | 
| --- | --- | --- | 
| Relaxation | ![screenshot](documentation/bugs/filter/relaxation-one.png) | ![screenshot](documentation/bugs/filter/relaxation-two.png) | 
| Education | ![screenshot](documentation/bugs/filter/education-one.png) | ![screenshot](documentation/bugs/filter/education-two.png) | 
| Adventure | ![screenshot](documentation/bugs/filter/adventure-one.png) | ![screenshot](documentation/bugs/filter/adventure-two.png) | 


The reason for this behavior was unclear, even after fixing it, but it might have been related to the HTML. I previously used 'hidden' span elements with the words 'Relaxation,' 'Education,' or 'Adventure' to reveal these results with the search function. The search function initially revealed each div element with the class 'destination' that included the searched word. I later modified my HTML to remove all spans, adding classes to each destination with the corresponding name and path, and refactored the search function to reveal destinations with the included class. This resolved the issue. However, the input did not change, so theoretically, it should not have behaved as it did. Because the switch statement overrides the input text value, if the word 'Education' is included in the innerHTML of the div 'destination,' it should reveal these destinations. Clicking it again should not cause it to disappear completely, as the input value does not change. It was impossible to trace this bug with a console.log statement, so it remains a mystery.

## Unfixed Bugs

> **NOTE**  
> There are no remaining bugs that I am aware of.
