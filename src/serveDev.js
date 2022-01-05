
export default function serveDev() {
  if('serviceWorker' in navigator){
      const Url = `${process.env.PUBLIC_URL}/serviceWorker.js`;
      navigator.serviceWorker.register(Url).then(res=>{
          console.log('Response',res)
      })
      .catch(err=>{
          console.log('Error',err);
      })
  }
  else{
    console.warn('Sw is not supported in ur browser')
}
}
