
const SingleNews = ({newsItem}) => {

    return (
        <div style={{backgroundColor: 'black'}}>
        <div className="container mt-4">
            <div className="d-flex">
                <div>
                <img src={newsItem.image.original} alt="" style={{width:450 }}  />
                </div>
                <div className='ps-5'  style={{color:'#DADADA '}}>
                <a href={newsItem.officialSite} style={{textDecoration: 'none' , color:'#F0F0F0 '}}> 
                <h1>{newsItem.name}</h1>  </a>
                <strong> Genres : {newsItem.genres}</strong>  <br />
                <b>Language : {newsItem.language}</b>
                <p>Rating : {newsItem.rating.average}</p>
                <p>Time : {newsItem.runtime } min</p>
                <p>  {newsItem.summary} </p>
               </div>
            </div>
        </div>
        </div>
    );
};

export const getServerSideProps = async (context)=>{
    const  res = await fetch('https://api.tvmaze.com/shows/'+context.params.id);
    const newsItem = await res.json();
    return{
       props:{
        newsItem,
     }} }
export default SingleNews;