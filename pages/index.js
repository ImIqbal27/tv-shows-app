import Link from 'next/link';
import   '../styles/Index.module.css' ;

const Home = ({newsList}) => {
  return (
     <>
     <div className="container text-center" >
     <div className="row">
    {
      newsList.map((news) => (
        <div className="col-lg-4  col-md-6 col-sm-12 p-3 " key={news.id}>
          <img src={news.image.original} alt="img-of-tv-show" width={350}  height={450}/>
        <h3 style={{color:'#F3F3F3'}}>{news.name}</h3>
        <Link href = "/news/[id]"  as = {`/news/${news.id}`}>
          <a className='btn btn-danger col-lg-12'>Details</a>
        </Link>
        </div>
      )) };
    </div>
     </div>
    </>
  );
};

export const getServerSideProps = async () =>{
 const  res = await fetch('https://api.tvmaze.com/shows');
 const newsList =await res.json();

 return{
  props:{
    newsList,
  }
 }
}

export default Home;