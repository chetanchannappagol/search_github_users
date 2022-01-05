let cacheName = 'appV1';

this.addEventListener('install',()=>{
    console.log(' Sw Installed ')
})



this.addEventListener('fetch',(e)=>{
   if(!navigator.onLine){
    e.respondWith(
        fetch(e.request).then(res=>{
            const resClone = res.clone();
            caches.open(cacheName).then(cache=>{
                cache.put(e.request,resClone)
            });
            return res;
        })
        .catch(()=>{
            caches.match(e.request).then(resp=>{
                if(resp){
                    return resp;
                }
            })
        })
    )
   }
})
