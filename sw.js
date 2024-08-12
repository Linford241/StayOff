// Adding assets to the Cache Storage API
const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
  };
  
  // Handling the install event: the install event
  // is fired only after resources have been successfully
  // added to the cache
  self.addEventListener("install", (event) => {
    self.skipWaiting();
    event.waitUntil(
      addResourcesToCache([
        "/",
        "/App.tsx",
        "/welcomeBar.tsx",
        "/contactBar.tsx",
        "/servicesDisplay.tsx",
        "/walletInfo.tsx",
        "/dropDown.tsx",
        "/image/wallet.jpg",
      ])
    );
  });
  
  /* If the request is not already in the cache then it
  to be requested from the network.
  When the network returns the response, both the request
  and response are then stored in the cache
  so that they could be easily retrieved offline, from 
  the cache, when the same request is made by the user.
  Thus, there wouldn't be any need using the network*/
  
  const putInCache = async (request, response) => {
    const cache = await caches.open("v1");
    await cache.put(request, response);
  };
  
  // This block of code recieves a user request as the parameter
  // then checks if there is a match of that request in cache.
  // If there is a match, that request is stored in the constant,
  //`responseFromCache`.
  //This constant is returned and passed as a parameter into
  // the fetch event handler.
  //Thus, the request stored in responseFromCache will be
  // used as the response when the fetch event is fired with
  // the `event.respondWith()` function
  const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
      return responseFromCache;
    }
  
  
    //Let's use the preloaded response 
    // if it's there
    const preloadResponse = await preloadResponsePromise;
    if (preloadResponse) {
      console.info("using preload response", preloadResponse);
      putInCache(request, preloadResponse.clone());
      return preloadResponse;
    }
  
    try {
      /* If the request is not already in cache
      it is fetched from the network and both the request
      and response are saved in cache via the 
      putInCache() function.
      responseFromNetwork.clone() clones the response so we
      have a local copy in cache after the original
      response from the network is returned to the user*/
      const responseFromNetwork = await fetch(request);
      putInCache(request, responseFromNetwork.clone());
      return responseFromNetwork;
    } catch (error) {
      const fallbackResponse = await caches.match(fallbackUrl);
      if (fallbackResponse) {
        return fallbackResponse;
      }
  
      return new Response("Oops...there's a network error", {
        status: 408,
        headers: { "Content-Type": "text/plain" },
      });
    }
  };
  
  // The navigation preload can only be used
  // after it has been enabled.
  // Navigation preload refers to the automatic
  // downloading of the resources as soon as the fetch request is made
  // *As such the resources may be fully dwonloaded 
  //even if they are already in the cache(Where then
  //are these resources stored provided
  //they are already found in the cache?)
  const enableNavigationPreload = async () => {
      if (self.registration.navigationPreload) {
          await self.registration.navigationPreload.enable();
      }
  };
  
  //Activation of the service worker
  self.addEventListener("activate", (event) => {
      event.waitUntil(clients.claim(), enableNavigationPreload());
  });
  
  // Handling the fetch event: this block of code
  // fetches the corresponding resource in the cache that
  // matches the request from a client as if the request was
  // forwarded to a server and its corresponding response was
  //retuned
  
  //In this case, the cache acts as the server, returning
  // the corresponding responses for the user requests
  //The responses are fetched from the cache instead of
  // a server
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      cacheFirst({
        request: event.request,
        fallbackUrl: "/image/wallet.jpg",
      })
    );
  });
  