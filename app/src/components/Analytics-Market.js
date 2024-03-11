import { Graph } from './Graph';
import { useState, useEffect, useMemo } from 'react';

import sourceData from "../data/sourceData.json";
import mockData from '../data/mock.json'
import Dropdown from './reusable/Dropdown';
import '../styles/Analytics-Market.css';
import { SidePanel } from './SidePanel';

import loop from '../assets/icons/search.svg'
import person from '../assets/icons/person-fill.svg'

import wideLine from '../assets/icons/Line-wide.svg'


function AnalyticsMarket() {
    const AccountName = 'vdmk'
    const headerLabels = [
        {"id": 0, "label": 'Запросы цены'},
        {"id": 1, "label": "Создание объявлений"},
        {"id": 2, "label": "Конверсия"},
        {"id": 3, "label": 'Тенденция цен'}
    ];
    const [header, setHeader] = useState(headerLabels[0]);
    const [discountMeta, setDiscountMeta] = useState({"id": 0, "label": "Общее"})
    const [regionMeta, setRegionMeta] = useState({"id": 0, "label": "Общее"})
    const [microcategoryMeta, setMicrocategoryMeta] = useState({"id": 0, "label": "Общее"})
    const [discount, setDiscount] = useState({"id": 0, "label": Math.min.apply(Math, mockData.map((item) => {return item["discount_id"]}))});
    const [region, setRegion] = useState({"id": 0, "label": Math.min.apply(Math, mockData.map((item) => {return item["region_id"]}))});
    const [microcategory, setMicrocategory] = useState({"id": 0, "label": Math.min.apply(Math, mockData.map((item) => {return item["microcategory_id"]}))});
    const [discountLabels, setDiscountLabels] = useState(applyMicrocategory(applyRegion(mockData)).map(item => item["discount_id"]).filter((value, index, self) => self.indexOf(value) === index).sort((a, b) => a - b).map((option, key) => ({ id: key, label: option })));
    const [regionLagels, setRegionLabels] = useState(applyMicrocategory(applyDiscount(mockData)).map(item => item["region_id"]).filter((value, index, self) => self.indexOf(value) === index).sort((a, b) => a - b).map((option, key) => ({ id: key, label: option })));
    const [microcategoryLabels, setMicrocategoryLabels] = useState(applyDiscount(applyRegion(mockData)).map(item => item["microcategory_id"]).filter((value, index, self) => self.indexOf(value) === index).sort((a, b) => a - b).map((option, key) => ({ id: key, label: option })));

    // console.log(Math.min.apply(Math, mockData.map((item) => {return item["microcategory_id"]})));
    // console.log(discount, discountLabels);
    
    const [metadataForGraph, setMetadataForGraph] = useState("")

    const [isOpen, setIsOpen] = useState(-1);

    const [data, setData] = useState(mockData);


    function applyDiscount(newData) {
        if (discountMeta.label == "Выбрать") return newData.filter((item) => item["discount_id"] == parseInt(discount.label));
        else return newData;
    }

    function applyRegion(newData) {
        if (regionMeta.label == "Выбрать") return newData.filter((item) => item["region_id"] == parseInt(region.label));
        else return newData;
    }

    function applyMicrocategory(newData) {
        if (microcategoryMeta.label == "Выбрать") return newData.filter((item) => item["microcategory_id"] == parseInt(microcategory.label));
        else return newData;
    }
    
    const mainLabels = [{id: 1, label: "Общее"}, {id: 2, label: "Топ-5"}, {id: 3, label: "Выбрать"}];
    const secondLabels = [{id: 1, label: "Общее"}, {id: 3, label: "Выбрать"}];


    useEffect(() => {
        // var newData = mockData;
        // if (discountMeta.label == "Выбрать") {
        //     console.log(parseInt(discount.label));
        //     newData = newData.filter((item) => item["discount_id"] == parseInt(discount.label));
        // }
        // if (regionMeta.label == "Выбрать") {
        //     newData = newData.filter((item) => item["region_id"] == parseInt(region.label));
        // }
        // if (microcategoryMeta.label == "Выбрать") {
        //     newData = newData.filter((item) => item["microcategory_id"] == parseInt(microcategory.label));
        // }
        if (header.label == 'Запросы цены') {
            setData(applyDiscount(applyMicrocategory(applyRegion(mockData))).filter((item) => (!item["is_order"])));
            // setMetadataForGraph("")
        } else if (header.label == 'Создание объявлений') {
            setData(applyDiscount(applyMicrocategory(applyRegion(mockData))).filter((item) => (item["is_order"])));
            // setMetadataForGraph("")
        } else if (header.label == 'Конверсия') {
            console.log("??")
            setData(applyDiscount(applyMicrocategory(applyRegion(mockData))));
        } else if (header.label == 'Тенденция цен') {
            setData(applyDiscount(applyMicrocategory(applyRegion(mockData))));
            // setMetadataForGraph("");
        }
        
        // setData();
        
        setDiscountLabels(applyMicrocategory(applyRegion(mockData)).map(item => item["discount_id"]).filter((value, index, self) => self.indexOf(value) === index).sort((a, b) => a - b).map((option, key) => ({ id: key, label: option })));
        setMicrocategoryLabels(applyDiscount(applyRegion(mockData)).map(item => item["microcategory_id"]).filter((value, index, self) => self.indexOf(value) === index).sort((a, b) => a - b).map((option, key) => ({ id: key, label: option })));
        setRegionLabels(applyMicrocategory(applyDiscount(mockData)).map(item => item["region_id"]).filter((value, index, self) => self.indexOf(value) === index).sort((a, b) => a - b).map((option, key) => ({ id: key, label: option })));

        // console.log(data);
        // if (discountMeta.label != "Выбрать") setDiscount(discountLabels[0]);
        setMetadataForGraph(microcategoryMeta.label == "Топ-5" ? "microcategory_id" : regionMeta.label == "Топ-5" ? "region_id" : discountMeta.label == "Топ-5" ? "discount_id" : "");

        
    }, [discount, region, microcategory, discountMeta, regionMeta, microcategoryMeta, header]);

    // useEffect(()=> {
        
    // }, [header]);
    
    return (
    <div className="App">

      <img src={wideLine} className='wide-line'></img>
       
        <SidePanel pageState="marketing_page"> </SidePanel>

        <div className='right-side'>

            <div className='header'>
                <h2>МАРКЕТИНГ</h2>
                
                <div className='top-bars'>
                    
                      <div className='form-2'>
                            {/* value={value}  onChange={(e) => handleClickLogin(e.target.value)}*/}
                            <input  className='search' placeholder="Поиск"/>
                            <img src={loop}/>
                      </div>

                      <div className='form-2'>
                            <div className='profile-button'><p>{AccountName}</p></div>
                            <img src={person}/>
                      </div>
                      
                </div>
            </div>

            <div className="Analytics">
                <div className='filters'>
                    <Dropdown id={7} label={"Общее"} selectedOption={header} setSelectedOption={setHeader} isOpen={isOpen} setIsOpen={setIsOpen} labels={headerLabels} />
                    <div className='dropdown-container'>
                        <Dropdown id={1} label={"Общее"} selectedOption={discountMeta} setSelectedOption={setDiscountMeta} isOpen={isOpen} setIsOpen={setIsOpen} labels={microcategoryMeta.label == 'Топ-5' || regionMeta.label == 'Топ-5' ? secondLabels : mainLabels} />
                        <div className={discountMeta.label != "Выбрать" ? "dropdown" : "dropdown-active"}>
                            <Dropdown id={4} label={"Льгота"} selectedOption={discount} setSelectedOption={setDiscount} isOpen={isOpen} setIsOpen={setIsOpen} labels={discountLabels} />
                        </div>
                    </div>
                    <div className='dropdown-container'>
                        <Dropdown id={2} label={"Общее"} selectedOption={regionMeta} setSelectedOption={setRegionMeta} isOpen={isOpen} setIsOpen={setIsOpen} labels={microcategoryMeta.label == 'Топ-5' || discountMeta.label == 'Топ-5' ? secondLabels : mainLabels} />
                        <div className={regionMeta.label != "Выбрать" ? "dropdown" : "dropdown-active"}>
                            <Dropdown id={5} label={"Регион"} selectedOption={region} setSelectedOption={setRegion} isOpen={isOpen} setIsOpen={setIsOpen}  labels={regionLagels} />
                        </div>
                    </div>
                    <div className='dropdown-container'>
                        <Dropdown id={3} label={"Общее"} selectedOption={microcategoryMeta} setSelectedOption={setMicrocategoryMeta} isOpen={isOpen} setIsOpen={setIsOpen} labels={discountMeta.label == 'Топ-5' || regionMeta.label == 'Топ-5' ? secondLabels : mainLabels} />
                        <div className={microcategoryMeta.label != "Выбрать" ? "dropdown" : "dropdown-active"}>
                            <Dropdown id={6} label={"Товар"} selectedOption={microcategory} setSelectedOption={setMicrocategory} isOpen={isOpen} setIsOpen={setIsOpen} labels={microcategoryLabels} />
                        </div>
                    </div>
                </div>
                <Graph mockData={data} metadata={metadataForGraph} type={header}></Graph>
        </div>
            
        </div>

        <div className='title-of-winners'>
           <strong> Avito </strong>  x <strong> MISIS </strong> x <strong> MIREA </strong>
        </div>

    </div>
        
    );
}


export default AnalyticsMarket;
