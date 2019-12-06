// MAKE REQUEST TO BROSWER

if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker
            .register('sw.js')
            .then(reg => console.log('Service worker: Registered'))
            .catch(err => console.log(`Service Worker: Error: ${err}`));
    });
}
