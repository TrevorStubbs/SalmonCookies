# Salmon Cookies

## Overall requirements:
- Calculate the number of cookies each location must make every day.
    - HOws of operation 0600-2000 (14 hours a day)

- Given info:
    - Minimum number of customers per hour
    - maximum number of customers per hour
    - average number of cookies purchased per customer

- Pat will need to be able to add and remove locations from the daily projections report.
- Pat will need to be able to easily modify the input numbers for each location based on day of the week, special event and other factors.
- Pat wants nice formatting for the numbers

- Pat wants a public-facing page
- Use the logo provided
- I need to design the docs, color scheme, font, and any additional images for the public site

- sales.html (for daily sales projections)
- index.html (public facing site)

## Sales Data:
create separate JS object literals for each shop location:
1. Stores the min/max hourly customers, and average cookies per customer, in object properties--
1. Uses a method of that object to generate a random number of customers per hour.--
1. Calc and store the simulated amounts of cookies purchased for each hour at each locations using average cookies purchased and the random number of customers generated.-
1. Store the results for each location in a separate array (object property).
1. Display the values of each array as `<ul>` in browser
1. Calc the sum of these hourly totals.--

Display the lists on sales.html.--

## Home Page:
**Stretch Goals for day 6**
- In addition to the provided pic of the fish, index.html should contain:
1. A custom **Google** font for **highlights**--
1. A specified standard **sans-serif** web font for **Data**--
1. A specified **serif** web font for **text**--
1. Specified different font colors for all three font usages
1. A background color for the default page background (make sure font colors have good contrast and are readable on the background).-
1. A different background color for elements such as boxes and tables (check contrast)
1. Anything else you'd like to add related to style. But remember: simplicity, clarity, and consistency.
1. Be thoughtful about layout and overall organization of the page
1. Include all of the typical stuff that you'll find on the home page of a business: locations, hours, contact info, some text about the business. be creative.

## Developer Style Guide:
1. For every lab within this project, you will be creating a new branch for every day. In this format `class##-feature`. (ie `class06-objects)
1. Make sure I have the lintr and the gitignore
1. ACP regularly on the branch
1. Clean Code
    1. good names
    1. functions and methods should do 1 thing
    1. use template literals
  
## Stretch Goals:
1. differences between 'low-fidelity' and 'high-fidelity' wireframes.
    - create a low-fid
    - create a high-fid
  

# Day 2
1. Create a new branch for today's lab class07-constructor
1. Replace all of th the object literals with a single constructor function. Create instances of the object for each location
1. replace the lists of your data for each stor anb build a single table of data instead.
1. each location should have a separate render() method.
1. the header and footer should be their own standalone function

- Stretch Goals
1. continue to work on design for the public facing site
1. make a style guide 
1. create a second table that will help Pat manage staffing. Using the basic rubic that single a 1 employee can serve **20 customers per hour** should have a min of 2 employees at a time. calc how many emp needed at each location per hour
1. There are more customers at 8, 11, 15. least custmoers at 13, 18. Apply a control curve to the projeccted sales number to reflect those dailiy ebbs and flows.