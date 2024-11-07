import React from 'react';
import parse from 'html-react-parser';

interface ServiceTabProps {
  activeTab: any;
  data: any;
}

const ServiceTabContent: React.FC<ServiceTabProps> = ({ activeTab, data }) => {
  const tabData = data?.find((el: any, index: any) => el?.key === activeTab);
  return (
    <div>
      <div className='mt-10 grid grid-cols-1'>
        <div>{parse(tabData?.content)}</div>
      </div>
    </div>
  );
};

export default ServiceTabContent;
