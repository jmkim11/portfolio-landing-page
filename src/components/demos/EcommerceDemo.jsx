import React, { useState } from 'react';
import { ShoppingCart, Package, TrendingUp, Users } from 'lucide-react';
import './Demos.css';

const EcommerceDemo = () => {
    const [stats] = useState([
        { title: '총 매출', value: '₩12,450,000', change: '+12%', icon: <TrendingUp /> },
        { title: '주문 수', value: '1,240', change: '+5%', icon: <ShoppingCart /> },
        { title: '신규 고객', value: '340', change: '+18%', icon: <Users /> },
        { title: '재고', value: '450', change: '-2%', icon: <Package /> },
    ]);

    return (
        <div className="demo-container">
            <div className="demo-header">
                <h3>대시보드 미리보기</h3>
                <p>실시간 데이터 시각화 및 재고 관리 시스템</p>
            </div>

            <div className="dashboard-grid">
                {stats.map((stat, idx) => (
                    <div key={idx} className="stat-card">
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-info">
                            <h4>{stat.title}</h4>
                            <p className="stat-value">{stat.value}</p>
                            <span className={`stat-change ${stat.change.includes('+') ? 'positive' : 'negative'}`}>
                                {stat.change} 지난달 대비
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="demo-chart-placeholder">
                <div className="bar" style={{ height: '60%' }}></div>
                <div className="bar" style={{ height: '80%' }}></div>
                <div className="bar" style={{ height: '45%' }}></div>
                <div className="bar" style={{ height: '90%' }}></div>
                <div className="bar" style={{ height: '70%' }}></div>
                <div className="bar" style={{ height: '30%' }}></div>
                <div className="bar" style={{ height: '65%' }}></div>
            </div>
        </div>
    );
};

export default EcommerceDemo;
