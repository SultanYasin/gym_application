export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY ||'19c8812e00msh435e9251bd2e6abp1c1d9cjsnc50473a07a23'  ,
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };

/* 
export const exerciesOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':'19c8812e00msh435e9251bd2e6abp1c1d9cjsnc50473a07a23' , // must change to .env file 
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
;

export const fetchData = async (url , options) => {
   const response = await fetch(url , options)

   const data = await response.json()
   return data;
} */