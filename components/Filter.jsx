'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { getDataWithQuery, geturl } from "@/utils/api"
function Filter({ products, setFilteredProducts }) {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };

    ///////////
    const [batteryRange, setBatteryRange] = useState(0);
    const [batteryfilterOptions, setbatteryFilteredProducts] = useState({
        moreThan40: false,
        between3040: false,
        lessThan30: false,
      });
   
    const [Feature, setFeature] = useState();
    const [Filter_Collection, setFilter_Collection] = useState();
    const [Filter_color, setFilter_color] = useState();
    const [checkedActivity_Filter, setCheckedActivity_Filter] = useState();


    
    // const [checkedActivity_Filter, setCheckedActivity_Filter] = useState({
    //     textValue:"Initial Value",
    //    Activity_Filter:{
    //    "All_Day_Listening":false,
    //    "At_the_Gym":false,
    //    "Focus":false,
    //    "Travel":false
    //    }
    //    });






    // console.log("checkedActivity_Filter "+JSON.stringify(checkedActivity_Filter) )
    const filterProducts = () => {

        let filteredProducts = products;
 
        const checkboxValues = Object.values(checkedActivity_Filter);
 
 

        if (!checkboxValues.every(value => value === false)) {
            // filteredProducts = products?.filter((product) => {
            filteredProducts = filteredProducts?.filter((product) => {


                // console.log("product id " + product?.id)

                //  console.log("product?.attributes?.Filters "+ JSON.stringify(product?.attributes?.Filters ))      

                if (product?.attributes?.Filters != null || product?.attributes?.Filters != undefined) {
                    ///////////////
                    //  console.log("deep")
                    if (checkedActivity_Filter) {
                        for (const [key, value] of Object?.entries(checkedActivity_Filter)) {

                            // console.log("product?.attributes?.Filters[key] "+ product?.attributes?.Filters[key])
                            // console.log("key "+key);
                            // console.log("value "+value)

                            if (product?.attributes?.Filters?.Activity_Filter != null || product?.attributes?.Filters?.Activity_Filter != undefined) {


                                if ((value == true) && product?.attributes?.Filters?.Activity_Filter[key]) {
                                    return true;
                                }
                            }
                        }

                    }



                }
            });

        }


        // ////batter fillter start/////////
  
        if (batteryfilterOptions.moreThan40) {
            
            filteredProducts = filteredProducts.filter(product =>product?.attributes?.Filters?.Battery_Life.Hours > 40);
          }
          if (batteryfilterOptions[between3040]) {
            filteredProducts = filteredProducts.filter(product =>product?.attributes?.Filters?.Battery_Life.Hours >= 30 && product?.attributes?.Filters?.Battery_Life.Hours <= 40);
          }
          
          if (batteryfilterOptions.lessThan30) {
            filteredProducts = filteredProducts.filter(product =>product?.attributes?.Filters?.Battery_Life.Hours < 30);
          }
        // }
        ///////batter fillter end




            /////////////////////

            filteredProducts = filteredProducts?.filter((product) => {


                
                if (product?.attributes?.Filters != null || product?.attributes?.Filters != undefined) {
                    ///////////////
                   
                  
    
                
                    
                    if(Feature){
                        for (const [key, value] of Object?.entries(Feature)) {
        
                            // console.log("product?.attributes?.Filters[key] "+ product?.attributes?.Filters[key])
                            // console.log("key "+key);
                            // console.log("value "+value)
                            
                            if(product?.attributes?.Filters?.Feature != null || product?.attributes?.Filters?.Feature != undefined){
        
        
                            if ((value == true) && product?.attributes?.Filters?.Feature[key]) { 
                                return true;
                            }
                         }
                        }
                         
                        }
    
                }
            });
    
            


            /////////////////////





        setFilteredProducts(filteredProducts)
        //   console.log("filteredProducts sam"+ JSON.stringify(filteredProducts))
    }



    /////////////////
    const handleActivity = (event) => {
        let state = checkedActivity_Filter;

        // console.log("state " + JSON.stringify(state))
        // console.log("event.target.value " + event.target.name)
        state[event.target.name] = event.target.checked;


        setCheckedActivity_Filter(state);
        // console.log(state);

        filterProducts();

    };


    /////////////////
    //////////////////

    const handleFeature = (event) => {
        let state = Feature;

        // console.log("state " + JSON.stringify(state))
        // console.log("event.target.value " + event.target.name)
        state[event.target.name] = event.target.checked;


        setFeature(state);
        // console.log(state);

        filterProducts();

    };

    // const handleBatteryRangeChange = (event) => {
    //     // console.log(event.target.value)
    //     setBatteryRange(parseInt(event.target.value));
        
    // };


    // const handleBatteryRangeChange = (event) => {
    //     setbatteryFilteredProducts({
    //       ...batteryfilterOptions,
    //       [event.target.name]: event.target.checked,
    //     });

    //     console.log("name "+ event.target.name+ "  value "+ event.target.checked+ " batteryfilterOptions " + JSON.stringify(batteryfilterOptions))
    //     filterProducts()
    //   };

      

      const handleBatteryRangeChange = async (event) => {
       

        


        let state = batteryfilterOptions;

        // console.log("state " + JSON.stringify(state))
        // console.log("event.target.value " + event.target.name)
        state[event.target.name] = event.target.checked;


        await setbatteryFilteredProducts(state);
        // console.log("name "+ event.target.name+ "  value "+ event.target.checked+ " batteryfilterOptions " + JSON.stringify(batteryfilterOptions))

        filterProducts()
      };
    ////////////






    const getFeature = async () => {

        const response = await getDataWithQuery(`/api/content-type-builder/components/features.features`,

            {
                // pagesize: 1000, typeId: blogId 
            });

        /////
        const initobject = {};
        for (const attributeName in response?.data?.schema?.attributes) {
            initobject[attributeName] = false;
        }
        ////////
        setFeature(initobject)
        // console.log("initobject " + JSON.stringify(initobject))
        return response;
    }
    const getActivity = async () => {

        const response = await getDataWithQuery(`/api/content-type-builder/components/activity.activity`,

            {
                // pagesize: 1000, typeId: blogId 
            });

        /////
        const initobject = {};
        for (const attributeName in response?.data?.schema?.attributes) {
            initobject[attributeName] = false;
        }
        ////////
        setCheckedActivity_Filter(initobject)
        // console.log("Activity " + JSON.stringify(initobject))
        return response;
    }
    useEffect(() => {
        getFeature();
        getActivity();

    }, []);





    //////////////// 
    return (
        <>


            <div className="filter-section">


                {/* filter-block */}
                <div className={isActive ? "filter-block " : "filter-block active"}>

                    <Accordion defaultActiveKey={['0']} alwaysOpen>


                        <Accordion.Item eventKey="0">
                            <Accordion.Header> 
                                <h3 onClick={handleToggle}>Activity 
                                {/* <span className="bladge bladge-primary">1</span> */}
                            </h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="filter-list">
                                    {checkedActivity_Filter &&
                                        <>
                                            {Object.keys(checkedActivity_Filter).map((item, index) => (
                                                <li key={"filter"+index}>
                                                    <div className="form-group">
                                                        <span>{item.replace(/_/g, ' ')}</span>
                                                        <input
                                                            onChange={handleActivity}
                                                            type="checkbox"
                                                            id={item}
                                                            name={item}



                                                        />
                                                        <label for={item} ></label>
                                                    </div>
                                                </li>
                                            ))}
                                        </>
                                    }
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="1">
                            <Accordion.Header> <h3 onClick={handleToggle}>Battery Life </h3></Accordion.Header>
                            {/* <Accordion.Body>

                            <p>Selected Battery Range: {batteryRange}</p>
                                <input
                                    type="range"
                                    min="0"
                                    max="60" // Set the maximum battery range value
                                    step="10" // Set the step size
                                    value={batteryRange}
                                    onChange={handleBatteryRangeChange}
                                />Hours
 
                            </Accordion.Body> */}

                            <Accordion.Body>
                            <ul className="filter-list">
                                    <li><div className="form-group">
                                        <span>{"<40 hrs"}</span>
                                        <input
                                            type="checkbox"
                                            id="moreThan40"
                                            name="moreThan40"
                                            onChange={handleBatteryRangeChange}
                                        />
                                        <label htmlFor="moreThan40"></label>
                                    </div>
                                    </li>
                                    <li> <div className="form-group">
                                        <span>{"30-40 hrs"}</span>
                                        <input
                                            type="checkbox"
                                            id="between3040"
                                            name="between3040"
                                            onChange={handleBatteryRangeChange}
                                        />
                                        <label htmlFor="between3040"></label>
                                    </div>
                                    </li>
                                    <li><div className="form-group">
                                        <span>{" <30 hrs"}</span>
                                        <input
                                            type="checkbox"
                                            id="lessThan30"
                                            name="lessThan30"
                                            onChange={handleBatteryRangeChange}
                                        />
                                        <label htmlFor="lessThan30"></label>
                                    </div>
                                    </li>
                            </ul>
                            </Accordion.Body>


                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header> <h3 onClick={handleToggle}>Features </h3></Accordion.Header>
                            <Accordion.Body>
                                <ul className="filter-list">
                                    {Feature &&
                                        <>
                                            {Object.keys(Feature).map((item, index) => (
                                                <li key={index}>
                                                    <div className="form-group">
                                                    <span>{item.replace(/_/g, ' ')}</span>
                                                        <input
                                                            onChange={handleFeature}
                                                            type="checkbox"
                                                            id={item}
                                                            name={item}



                                                        />
                                                        <label for={item}></label>
                                                    </div>
                                                </li>
                                            ))}
                                        </>
                                    }
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>



                    </Accordion>


                </div>
                {/* filter-block */}


            </div>
        </>
    )
}

export default Filter