# :sunny:Alex's Weather Prophecy:cloud:
### https://alexweatherprophecy.netlify.app/

## Case study:

At the very beginning of the project I studied openweatherAPI documentation in order to get a better understanding of the API. After that, I knew that I have to connect to the Current Weather Data API in order to get all the necessary information about the latitude and longitude of the place selected by the user, which was a necessary thing to do in order to connect to OneCallAPI; the second API had all the crucial information included in the task’s instruction.

I didn’t want to spend too much time on CSS, so currently there’s only a few different image cases. If the city’s temperature is above 15c, the background will be sunny. If it’s below - the background will be in the snowy theme. Same for the icons - there’s currently two cases: if the cloud's indicator is above 50 - it will render a cloudy icon, otherwise - it’s gonna show a sunny icon.

I was slightly in doubt when I was doing the second part of the task - because I wasn't sure if it concerned all the days of the forecast taken together or not -  so decided to use my best judgement and show these values for different periods:

The mode value is the dominant temperature occurring during the current day (24h).
The mean value, so the average temperature, is counted for the entire week.
And last, but not least - min. and max. temperature are shown individually for each day.

(I should probably just show the min. and max. temperature occurring during the entire week, but well... I guess I would fix it after the code review... if it was necessary :D)

#### Possible improvements:

- If the application grew bigger, I would consider using Redux or ContextAPI instead of useState hook for the easier state management. Furthermore, we could store the functions in a separate place and rely more on the encapsulation in general.
- Possible improvements for the icon/background cases, depending on the rain/storm/snow/etc.
- Replacing JS with TS.
- More unit tests (also configure Jest with webpack etc.)
- CRA is certainly not the best for the SEO, so we could consider using Gatsby's hybrid nature or Next.js in order to improve the SEO optimalisation and the performance of the website overall.

-------------------


#### 'npm install'

then:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


#### 'npm test'

if you want to run the tests
