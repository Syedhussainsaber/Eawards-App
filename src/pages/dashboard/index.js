import React from 'react';
import { Tabs } from 'antd';
import HomeDashboard from '@/components/dashboards/HomeDashboard';
import VotingDashboard from '@/components/dashboards/VotingDashboard';
import NewsDashboard from '@/components/dashboards/NewsDashboard';



const Dashboard = () => {

    const items = [
        {
          key: '1',
          label: 'News',
          children: <NewsDashboard/>
        },
        {
          key: '2',
          label: 'Home',
          children: <HomeDashboard/>
        },
        {
          key: '3',
          label: 'Voting Section',
          children: <VotingDashboard/>,
        },
      ];

    const onChange = (key) => {
        console.log(key);
      };

return (
<div style={{position:'relative', top:'160px'}}>
<div className='w-75 m-auto'>
<h2 className='text-center py-2 mt-2 fw-bold'>Dashboard</h2>
<Tabs size="large" defaultActiveKey="1" items={items} onChange={onChange} />
{/* <NewsDashboard/> */}
  </div>
</div>
  )
}



  export default Dashboard