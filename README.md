*Architecture*
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single‑page application (SPA).
In this project, I worked with three different styles of frontend development. Express HTML was the most basic, because it served simple static pages directly from the server. 
It didn’t have much interactivity unless I added JavaScript manually. Regular JavaScript improved this by letting the page react to user actions, update elements, and make requests without reloading. 
The SPA approach, like using Angular, was the most advanced. It loaded the entire application once and then updated the screen dynamically as the user navigated. 
Compared to Express HTML, the SPA felt faster and more modern because it didn’t reload the whole page each time.

Why did the backend use a NoSQL MongoDB database?
The backend used MongoDB because it stores data in flexible JSON‑like documents instead of strict tables.
This made it easier to work with changing data structures, especially since the frontend also used JSON.
MongoDB is also fast, scalable, and works well with JavaScript‑based applications.


*Functionality*
How is JSON different from JavaScript, and how does JSON tie together the frontend and backend?
JSON is a data format, while JavaScript is a full programming language. JSON can only store data using simple structures like objects, arrays, strings, and numbers. JavaScript can run logic, functions, loops, and much more. 
JSON ties the frontend and backend together because it is the format used to send and receive data through APIs. The backend responds with JSON, and the frontend reads that JSON to update the UI.

Provide instances when you refactored code and explain the benefits of reusable UI components.
During the project, I refactored code when I moved repeated logic into shared services and cleaned up duplicated HTML by turning it into reusable components. 
Reusable UI components save time, reduce errors, and make the application easier to maintain. When one component is updated, every place that uses it benefits automatically.


*Testing*
Explain your understanding of methods, endpoints, and security in a full stack application.
Methods like GET, POST, PUT, and DELETE define what kind of action an API endpoint performs. Endpoints are the URLs that the frontend calls to request or update data. 
Security adds extra layers, such as authentication and validation, to make sure only authorized users can access or change information. 
Testing these parts is important because each method and endpoint must respond correctly, and security features must block unsafe or unauthorized requests.


*Reflection*
How has this course helped you reach your professional goals? What skills have you learned or developed?
This course helped me grow as a developer by giving me real experience building a full stack application from start to finish. 
I learned how the frontend and backend communicate, how to structure APIs, and how to work with databases.
I also improved my debugging, problem‑solving, and code‑organization skills. 
These abilities make me a stronger and more marketable candidate in the tech field. 

*References*:
Express.js. . (n.d.). Express — Node.js web application framework. https://expressjs.com/

JavaScript (ECMA‑262 Specification)
Ecma International. (2024). ECMAScript 2024 language specification (ECMA‑262). https://tc39.es/ecma262/

Angular (SPA Framework)
Angular. (n.d.). Angular documentation. https://angular.dev/

MongoDB
MongoDB. (n.d.). MongoDB manual. https://www.mongodb.com/docs/

JSON Specification
Bray, T. (2017). The JavaScript Object Notation (JSON) data interchange format (RFC 8259). Internet Engineering Task Force. https://www.rfc-editor.org/rfc/rfc8259

HTTP Methods (REST / API)
Fielding, R., & Reschke, J. (2014). Hypertext transfer protocol (HTTP/1.1): Semantics and content (RFC 7231). Internet Engineering Task Force. https://www.rfc-editor.org/rfc/rfc7231

