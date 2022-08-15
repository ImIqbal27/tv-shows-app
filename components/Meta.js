import Head from "next/head";

const Meta= ({title , keywords , description})=>{
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name="keywords" content={keywords}/>
            <meta name="description" content={description}/>
        </Head>
        </>
    )

}

Meta.defaultProps={
    title:"  " ,
    keywords: " ",
    description:' '
}

export default Meta ;