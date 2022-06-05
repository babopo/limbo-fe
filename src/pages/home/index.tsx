import React, { useState } from 'react';
import { Tabs } from 'antd';
import { useNavigate } from 'react-router-dom';

const TabPane = Tabs.TabPane;

const Home = () => {
    const [count, setCount] = useState(0);

    const navigates = useNavigate();

    return (
        <div>
            <Tabs>
                <TabPane>Home</TabPane>
                <TabPane>About</TabPane>
            </Tabs>
        </div>
    );
};

export default Home;
