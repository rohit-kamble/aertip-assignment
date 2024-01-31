/* eslint-disable no-case-declarations */
import DropDownMenu from "../../components/dropdown"
import './style.css';
import AutocompleteSearch from "../../components/autocomplete";
import DatePickerShow from "../../components/datepicker";
import data from '../../../data.json'
import { useEffect, useState } from "react";
import ResultCard from "../../components/resultcard";
import PriceFilter from "../../components/priceFilter";

export default function Home() {
  const [showData, setData] = useState([]);
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [filterData, setFilterData] = useState([]);
  const [filterquery, setFilterQuery] = useState({});
  const [showfilterData, setShowFilterData] = useState([]);
  const [showpriceFilter, setShowPriceFilter] = useState(false);

  useEffect(()=> {
    data.data.flights[0].results.j.map((ite)=> ite.leg.map((its)=> setData(prev=> [...prev, ...its.flights])))
    setFilterQuery(data.data.flights[0].results.f[0])
  }, [])

  const resultData = showpriceFilter ? showfilterData : filterData;
 
    const options = [
        { 
          value: 1,
          label: "OneWay"
        },
        {
          value:  2,
          label: "Return"
        }
      ];
      const options2 = [
        { 
          value: 1,
          label: "Economy"
        },
        {
          value:  2,
          label: "Premium Economy"
        },
        {
            value:  3,
            label: "Buisness"
        },
        {
            value:  4,
            label: "First Class"
        }
      ];

      const options3 = [
        { 
          value: 1,
          label: "price (Low to high)"
        },
        {
          value:  2,
          label: "departure (Earliest first)"
        },
        {
            value:  3,
            label: "arrival (Earliest first)"
        }
      ];
 
      const cityData = [...new Set(showData.map((its)=> its.fr))].map((city, idx)=> {
        return {
          name: city,
          id: idx
        }
      })

      const handleOnSelect = (item, placeholder) => {
        setShowPriceFilter(false);
        if(placeholder === 'from') {
          setFromCity(item)
        }
        else {
          setToCity(item)
        }
      }

      const getPriceRange = (event) => {
        setShowPriceFilter(true);
        if(filterData.length > 0) {
          const pricefilterdata = filterData.filter((item)=> filterquery.pr.minPrice <= item.ft && item.ft >= parseInt(event.target.value) && item)
          setShowFilterData(pricefilterdata)
        }
        else {
          setShowFilterData(filterData)
        }
      }

      const onSearch =()=> {
        setShowPriceFilter(false);
        const dataFormat =  `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`;
       const result = showData.filter((item)=> item.fr === fromCity.name && item.to === toCity.name && dataFormat === item.dd && item)
       result.length > 0 ? setFilterData(result) : setFilterData([])
      }
      const filterBySort = (event) => {
          if(event[0].value === 1 && filterData.length > 0){
            setFilterData(filterData.sort((a, b)=> b.ft - a.ft ));
          }
          else if(event[0].value === 2 && filterData.length > 0) {
            setFilterData(filterData.sort((a, b)=> parseFloat(a.dt) - parseFloat(b.dt)))
          }
          else {
            filterData.length > 0 && setFilterData(filterData.sort((a, b)=> parseFloat(a.at) - parseFloat(b.at)))
          }
      }
    return (
        <div className="home-container">
            <div style={{display: 'flex'}}>
                <DropDownMenu data={options}/>
                <DropDownMenu data={options2}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex'}}>
                    <AutocompleteSearch placeholder={'from'} handleOnSelect={handleOnSelect} city={cityData}/>
                    <AutocompleteSearch placeholder={'to'} handleOnSelect={handleOnSelect} city={cityData}/>
                    <DatePickerShow setStartDate={setStartDate} startDate={startDate}/>
                </div>
                <div>
                    <button onClick={onSearch}>Search</button>
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <DropDownMenu filterBySort={filterBySort} data={options3}/>
                <div style={{marginLeft: '120px'}}><PriceFilter filterquery={filterquery} getPriceRange={getPriceRange}/></div>
            </div>
            <div>
              {resultData.map((item, idx)=>{
                return (<ResultCard key={idx} item={item}/>)
              })}
            </div>
        </div>
    )
}