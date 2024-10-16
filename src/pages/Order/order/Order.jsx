import { useState } from "react";
import ordercover from "../../../assets/shop/banner2.jpg"
import Ourmenucover from "../../Home/shared/over/Ourmenucover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from "../../../Hoks/usehoks/UseMenu";
import OrderTab from "../../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categorys =['salad','pizza','soup','dessert','offered'];
    const {category}=useParams();
    const initilgeindex = categorys.indexOf(category);
    const [tabsindex,settabindex]= useState(initilgeindex);
    const [menus] = UseMenu();
    const salad = menus.filter(item => item.category === 'salad')
    const pizza = menus.filter(item => item.category === 'pizza')
    const soup = menus.filter(item => item.category === 'soup')
    const dessert = menus.filter(item => item.category === 'dessert')
    const offered = menus.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet><title>Order</title></Helmet>
            <Ourmenucover img={ordercover} title='OUR SHOP'></Ourmenucover>
            <Tabs defaultIndex={tabsindex} onSelect={(index) => settabindex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>offered</Tab>
                    
                </TabList>
                
                <TabPanel>
                <OrderTab items={salad}></OrderTab>
                </TabPanel>

                <TabPanel>
                <OrderTab items={pizza}></OrderTab>
                </TabPanel>

                <TabPanel>
                <OrderTab items={soup}></OrderTab>
                </TabPanel>

                <TabPanel>
                <OrderTab items={dessert}></OrderTab>
                </TabPanel>

                <TabPanel>
                <OrderTab items={offered}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;