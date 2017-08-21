# cookie-stand

Store object constructor: takes the name of the store, expected minimum number of customers per hour, maximum expected customers per hour, and estimated cookies per customer as parameters.  

customerPerHr method: calculates a random number of customers per hour based on indicated minimum and maximum customers per hour for that store.

calcAvgCookiePerHr method: empties the array of hourly cookies (for that store) and then runs through the array of store hours and calculates the houly cookie sales by calling the customerPerHr function and multiplying that result by the cookies per customer value given to the store.  It then pushes these new values to the hourlyCookies array.  It also adds that stores hourly cookies total to the count of daily cookies for that store.

addYoSelf method: this method calls the createAndAppend function as it iterates through each hour the store is open and populates a row on the table for that store.  It also adds that store's totals per hour to the global variable array for each hour of operation (to track total per hour for all stores), and adds that stores total for the day for the running total for all stores.

buildHead function: takes the table element as a parameter and creates the head row of the table showing the hours of operation of the stores.

buildBody function: takes the table element and the array of Stores as parameters and calls the "addYoSelf" function on each of the stores so that it adds itself to the table.

buildFoot function: takes the table as a parameter and creates the footer row and inserts the totals for each hour and total for the day.

generateReport function: takes the array of Stores as a parameter.  Gets the div by id to build the table in, empties it and then builds the table by calling the buildHead, buildBody, and buildFoot functions.

createAndAppend function: takes the desired tag, the parent element, new tag content, new tag class, and new tag Id as parameters.  Creates the new element, checks to see if content, class, or id are present as arguments - and adds them if so. Then appends the new element to the indicated parent element.
