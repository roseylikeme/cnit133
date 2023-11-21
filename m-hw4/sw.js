self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("my-pwa-cache")
      .then((cache) => {
        return cache.addAll([
          "/",
          "/app.js",
          "/icon.png",
          "/index.html",
          "/lightblue.jpg",
          "/lightgold.jpg",
          "/style.css",
          "/sw.js",
          "/manifest.json",
        ]);
      })
      .catch((error) => {
        console.error("Cache installation failed:", error);
      })
  );
});
