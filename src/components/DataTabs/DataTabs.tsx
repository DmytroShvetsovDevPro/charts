import React, {FC} from 'react';

import './DataTabs.css';

interface Props {
  id: string;
  label: string;
  onClick?: (e: any) => void;
  isActive: boolean;
}

const Tab: FC<Props> = ({ id, label, onClick, isActive }) => {
  return (
    <button type="button" id={id} className={ isActive ? 'is-active' : '' } onClick={onClick}>
      {label}
    </button>
  );
};

export const DataTabs: FC<{ values: string[], changeTab: (tabId: string) => void; activeTab: string }> = ({ values, changeTab, activeTab }) => {
  return (
    <div className="data-tabs">
      {values.map((tab) => (
        <Tab key={tab} id={tab} label={tab} onClick={(tabId) => changeTab(tabId)} isActive={activeTab === tab} />
      ))}
    </div>
  );
};
