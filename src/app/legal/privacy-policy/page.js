import Link from 'next/link';
import { Metadata } from 'next';
import { type } from 'os';
const API_URL = process.env.API_URL || '';
const getData = async ()=>{  

  const response = await fetch(API_URL + "/api/privacy-policy?populate=*");
  if(!response.ok){
    throw new Error("failed to fetch Api Data");
  }
  return response.json();
}




const Page = async ({params})=> {
  const apiData = await getData();
 
 console.log(params.Heading)

  return(
    <>

      <div className="container-fluid">
      <div className="container max_container">
        <div className="row">
          <div className="col-md-12">
            <div className="skull_breadcrumbs">
              <ul>
                <li>
                  <Link href="/support/">
                    Skullcandy Support
                  </Link>
                </li>
                <li>
                  <Link href="/support/legal/">LEGAL.</Link>
                </li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="full_center_section skull_space_xtra pb-5">
      <div className="container-fluid">
        <div className="container max_container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_search_bar">
                <form
                  role="search"
                  method="get"
                  action="/"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input_box_v2 search">
                        <input
                          type="search"
                          name="s"
                          id="s"
                          defaultValue=""
                          placeholder="Search the Skullcandy Help Center"
                        />
                        <svg
                          viewBox="0 0 22.922 22.158"
                          id="search"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <g
                            id="Group_762"
                            data-name="Group 762"
                            transform="translate(-1079.439 -1360.5)"
                          >
                            {" "}
                            <circle
                              id="Ellipse_174"
                              data-name="Ellipse 174"
                              className="cls-1"
                              cx="8.084"
                              cy="8.084"
                              r="8.084"
                              transform="translate(1079.939 1361)"
                            />{" "}
                            <line
                              id="Line_224"
                              data-name="Line 224"
                              className="cls-1"
                              x2="7.571"
                              y2="7.443"
                              transform="translate(1094.44 1374.859)"
                            />{" "}
                          </g>{" "}
                        </svg>
                        <input
                          type="hidden"
                          placeholder="Search"
                          name="page"
                          id="page"
                          defaultValue="page"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="full_center_section skull_space_xtra pt-5">
      <div className='container-fluid'>
        <div className="container max_container">
          <div className="row ">
            <div className="col-md-12">
              <div className="skull_title big big_text mb-5 pb-3">
                 <h2>{apiData?.data?.attributes?.Heading} </h2> 
            
              
              </div>
            </div>
            <div className="col-md-12">
              <div className="support_content">
              <div
                dangerouslySetInnerHTML={{__html: apiData?.data?.attributes?.Content}}
              />  

              {JSON.stringify(apiData)}
            <h3>{apiData?.data?.attributes?.Seo?.Meta_Title}</h3>
        
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    </>
  )
}


export async function generateMetadata({ params }) {
  // Fetch data from the API
  const response = await fetch(API_URL + "/api/privacy-policy?populate=*");
  const apiData = await response.json();

  // Extract title and description from the API data
  const title = apiData?.data?.attributes?.Seo?.Meta_Title;
  const description = apiData?.data?.attributes?.Seo?.Meta_Description;

  return {
    title: title,
    description: description,
  };
}



export default Page
