# Workings of Browser

The browser goes through a sequence of stages when a user enters a URL (Uniform Content Locator) in order to fetch and show the user the desired resource. These actions entail translating the URL's domain name to an IP address, requesting the resource from the server at that address, and displaying the response to the user.

Resolving the domain name in the URL to an IP address is the first stage in this procedure. To do this, the browser makes use of the Domain Name System (DNS). The browser asks the DNS to translate a domain name to an IP address when a user enters a URL.

The IP address connected to the domain name is looked up by the DNS server and provided to the browser. DNS resolution is the term for this procedure.

After learning the IP address, the browser contacts the server at that address to request the resource listed in the URL. The format of the request depends on the protocol, such as HTTP or HTTPS, that is used in the URL. For instance, the browser sends an HTTP request if the URL begins with **http://** and an HTTPS request if it begins with **https://**. The request contains details like the request's type, request status code, the resource being sought, and any extra headers or parameters. 

The request is received by the server, which processes it. The server replies to the browser if the requested resource is available. The answer contains details about the request's status, the kind of resource, and the information contained in the resource itself.
After receiving the response, the browser begins displaying the resource so the user can view it. The way a resource is rendered by a browser depends on its type, such as HTML, CSS, or JavaScript. In the case of an HTML file as a resource, the browser will parse the HTML code and generate a Document Object Model (DOM) to represent the page's structure. The page's layout and interactivity are then applied using CSS styles and JavaScript scripts.

![Working of Browsers.png](Working%20of%20Browsers.png)

It's also important to note that the browser stores some of the resources it downloads, including images, stylesheets, and scripts, in its cache in order to speed up subsequent operations. When a browser submits a request for a resource, it also adds a "cache-control" header that informs the server of the cached copy of the resource that the browser currently possesses and whether it is fresh or not. If a "304 Not Modified" response code is returned by the server, the browser knows it can utilize the cached version rather than making a new request for the resource.