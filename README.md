# Ombori Code Test


Technologies
 In this app, you will see some basic concepts of JavaScript for implementing the functions as well as the typescript used in the files. some basic concepts of react for state management, such as Context and state lifting up... lazy  Loading, and Error Bandari .used some regular hooks such as useNavigate, useContext useffect, and some libraries such as react-icons and react-router and etc. Finally for the styling used some basic CSS like canvas and grid and mostly bootstrap.
solution
The issue is that we want to fetch some information from the server and show it on screen and when the client scroll to the end of the page program must show a loading animation for 3 seconds, fetch the next group of data and add it to the previous list and show it to screen again.
so clearly we are talking about a scroll event.
so I started whit adding a customer scroll bar and forcing it to all the pages to make sure that the scroll bar is visible on all devices.
in this part, we have 2 unknown parameters, the first one is the limit of the page which is equal to the number of users included in the data list and the second is the point at end of the page!
when the sum of pageYoffcet and innerHeight cross form offsetHeight value it means we are at end of the page.
To avoid errors in different devices I rounded the page offset and subtracted 2 from the offsetHeight.
now everything is ready for implementation of logic.
during the first render of the User.tsx page, useEffect fetches data from the server and modifies and stores it in a row variable which makes the row of our user list a simple map.
user.tsx pass the row and page limit and also an event handler to the UserList.tsx as props where an EvenListener within a  useEffect is waiting for an onScroll event until the client scroll.
this listener checks if the received data length is more than the current data list  then he invokes the scroll handler and if there is no more user shows " No More User"s on the screen.
ScrollHandler checks the condition to make sure the client scrolled to the end of the page, if yes the user seter set the null value to users, and this condition runs the loading component for 3 counts and at the same time, he fetches new data from the second group and add it to the rest of the current list and show on the screen. now if the client scroll on the page and there is now more data he or she faces whit this message:" No More User".
during the fetch operation if any error occurs Errorboundary returns an error and shows on the screen .so you never see the empty white page in this app. You can navigate and move different pages from the navBar and in the New user page, you can create new users and see their profiles edited and remove them from the list. 
problems
-To avoid the extra renders add a memo to the header but it is not so effective.
-for holding the performance I tried to avoid accessing the main DOM which is why I didn't use useRef but I am still not sure if using the window object was the best choice!
-This morning I note that I forgot to implement User navBar so I did it with a combination of grid flex and some CSS and bootstrap unfortunately I didn't have enough time to make it responsive for all devices but this at least works for medium desktops but no worry the main page is to respond but not new user page! I have to submit my solution today but if there is more time I can complete it and resend you again. no problem!



