const cacheName = 'v1';

self.addEventListener('install',(e)=>{});

self.addEventListener('activate', (e) => {
    // REMOVE UNWANTED CACHES FROM THE SERVER CLIENT FORNT END 
        e.waitUntil(
            caches.keys().then(cacheName =>{
            return Promise.all(
                cacheName.map(cache =>{
                    if(cache !== cacheName){
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request).then(res =>{
        const resClone = res.clone();
        caches.open(cacheName).then(cache =>{
            cache.put(e.request, resClone);
        });
        return res;
    }).catch(err => caches.match(e.request).then(res => res))
    );
});
