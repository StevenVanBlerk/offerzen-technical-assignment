[LIVE SITE](https://technical-assignment-ljhiwldtc-stevenvanblerk.vercel.app/)  
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
To view the site live, click [here](https://technical-assignment-ljhiwldtc-stevenvanblerk.vercel.app/), else you can fork this repository and run the project locally.

## Getting Started
Starting up the project should be simple, but there is a [basic guide](https://nextjs.org/docs) available if needed.
[Node.js 12.0] or later is required.

Clone the repository to a local folder, then install the needed packages
```bash
npm install
```
It may be necessary to install next with ```npm install next``` but this should be handled automatically.

Run the development server:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
The bulk of the important code can be found in the ```~/pagesLibrary/```. This includes components that are specialised for this (the only) page. More generic components can be found in ```~/components/```. The styled-components library is used heavily in this project for structuring the CSS. Very minor CSS can be found in ```~/styles/globals.css```.  
All images/fonts/icons can be found in ```~/public/```. Commonly used variables, like the color palette, can be found in ```~/config.js```. The placeholder data can be found in ```~/interviewRequests.json```.  
Any other files or folders are less important and contain basic component/page exports or Next.js configuration. 
## Task D
### How long did this assignment take you and where did you spend your time?
This task took me a full day of development, totalling to at least 9 hours.
### What would you do differently or improve in your solution?
It took longer than expected to format the timestamps and compare dates. If I did this again, I would consider implementing a package that handles dates more easily than vanilla JavaScript, such as Moment.js.  
There are several places where I've deep copied arrays / objects. For the sake of time, I haven't confirmed these are all necessary or the most efficient way to alter that data. If done again, I would test these further.  
It would be nice to improve on some of the visual feedback. For example, adding a fade in/out effect when filtering data, or changing the sort icon depending on if the column is ascending or descending.  
If done again, I would focus on building the functionality of the table and buttons/inputs before any big styling to avoid undoing styling that no longer works once functionality changes.
### Do you have any feedback on this assignment? For example: What did you enjoy? What could be better? Which aspects were unclear?
Something that could be improved on in the assignment is to make the desired fonts more easily accessible. Having font files or links to the exact fonts would help in avoiding fonts that are similarly named but not quite right.
Whether or not the page needs to be responsive wasn't clear.  
To properly develop some of these components requires quite a big chunk of dev time. If the dev doesn't have many previous code samples to pull from, a 4 hour timeframe would result in a far less finished product than the desired end product. I do get that this is acknowledged somewhat in the task though.

## Final Thoughts
Thank you for the interesting task and taking the time to review my results. I am reachable at [stevenvanblerkrsa@gmail.com](mailto:stevenvanblerkrsa@gmail.com) should you have any questions. I also have a personal site currently in development [here](https://personal-portfolio-snowy.vercel.app/)!
