import React, { useState, useEffect } from 'react';
import { TrendingUp, Star, CheckCircle, School, MessageCircle, Clock, BookOpen,BarChart3 } from 'lucide-react';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import SkillCard from '../../components/skillCard/SkillCard';
import ExamCard from '../../components/examCard/ExamCard';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{
                backgroundColor: 'white',
                padding: '12px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                border: '1px solid #e0e0e0'
            }}>
                <p style={{ fontWeight: 600, color: '#333', margin: 0 }}>
                    {payload[0].payload.name}
                </p>
                <p style={{ color: '#666', margin: '4px 0 0 0' }}>
                    Score: {payload[0].payload.score} / {payload[0].payload.maxScore}
                </p>
                <p style={{ color: '#666', margin: '4px 0 0 0' }}>
                    {payload[0].payload.percentage.toFixed(1)}%
                </p>
            </div>
        );
    }
    return null;
};

const SpeakingReportDashboard=()=> {
    const [reportData, setReportData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState(0);
    const [showChart, setShowChart] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/api/speaking-report')
        .then(res => {
            if (!res.ok) throw new Error('Failed to fetch report data');
            return res.json();
        })
        .then(data => {
            setReportData(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f5f5f5'
        }}>
            <div style={{ textAlign: 'center' }}>
            <div style={{
                width: '60px',
                height: '60px',
                border: '4px solid #e0e0e0',
                borderTop: '4px solid #667eea',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 16px'
            }} />
            <p style={{ color: '#666', fontSize: '16px' }}>Loading report...</p>
            </div>
            <style>{`
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
            `}</style>
        </div>
        );
    }

    if (error) {
        return (
        <div style={{ padding: '32px', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
            backgroundColor: '#ffebee',
            border: '1px solid #f44336',
            borderRadius: '8px',
            padding: '16px',
            color: '#c62828'
            }}>
            <strong>Error:</strong> {error}
            </div>
        </div>
        );
    }

    if (!reportData) return null;

    const exams = [
        { key: 'ielts', label: 'IELTS', data: reportData.exams.ielts },
        { key: 'toefl', label: 'TOEFL', data: reportData.exams.toefl },
        { key: 'pte', label: 'PTE', data: reportData.exams.pte },
        { key: 'toeic', label: 'TOEIC', data: reportData.exams.toeic }
    ];

    const chartData = [
        { 
            name: 'Pronunciation', 
            score: reportData.overall.skills.pronunciation.score,
            maxScore: reportData.overall.skills.pronunciation.maxScore,
            percentage: (reportData.overall.skills.pronunciation.score / reportData.overall.skills.pronunciation.maxScore) * 100
        },
        { 
            name: 'Fluency', 
            score: reportData.overall.skills.fluency.score,
            maxScore: reportData.overall.skills.fluency.maxScore,
            percentage: (reportData.overall.skills.fluency.score / reportData.overall.skills.fluency.maxScore) * 100
        },
        { 
            name: 'Vocabulary', 
            score: reportData.overall.skills.vocabulary.score,
            maxScore: reportData.overall.skills.vocabulary.maxScore,
            percentage: (reportData.overall.skills.vocabulary.score / reportData.overall.skills.vocabulary.maxScore) * 100
        },
        { 
            name: 'Grammar', 
            score: reportData.overall.skills.grammar.score,
            maxScore: reportData.overall.skills.grammar.maxScore,
            percentage: (reportData.overall.skills.grammar.score / reportData.overall.skills.grammar.maxScore) * 100
        }
    ];

    const COLORS = ['#1976d2', '#9c27b0', '#ff9800', '#4caf50'];

    return (
        <div style={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        padding: '32px 16px'
        }}>
            <div style={{ maxWidth: '100vw', margin: '0 auto' }}>
                <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '16px',
                padding: '32px',
                marginBottom: '32px',
                color: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '16px'
                    }}>
                        <div style={{
                        backgroundColor: 'white',
                        color: '#667eea',
                        borderRadius: '50%',
                        width: '64px',
                        height: '64px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                        }}>
                        <School size={32} />
                        </div>

                        <div style={{ flex: 1, minWidth: '200px' }}>
                            <h1 style={{ fontSize: '36px', fontWeight: 700, margin: '0 0 8px 0' }}>
                                {reportData.student.name}
                            </h1>
                            <p style={{ fontSize: '18px', margin: '0 0 8px 0', opacity: 0.9 }}>
                                Speaking Assessment Report • {reportData.student.reportDate}
                            </p>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '48px', fontWeight: 700 }}>
                                {reportData.overall.score.value}
                            </div>
                            <div style={{ fontSize: '16px', opacity: 0.9 }}>
                                out of {reportData.overall.score.max}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overall Performance */}
                <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '32px',
                marginBottom: '32px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.1)'
                }}>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '16px',
                        marginBottom: '8px'
                    }}>
                        <h2 style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            color: '#333',
                            margin: 0,
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <TrendingUp size={28} style={{ marginRight: '8px' }} />
                            Overall Performance
                        </h2>
                        
                        <button
                            onClick={() => setShowChart(!showChart)}
                            style={{
                                backgroundColor: '#667eea',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '10px 20px',
                                fontSize: '14px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 4px rgba(102, 126, 234, 0.3)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#5568d3';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(102, 126, 234, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#667eea';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 4px rgba(102, 126, 234, 0.3)';
                            }}
                        >
                            <BarChart3 size={18} />
                            {showChart ? 'Hide Chart' : 'View Chart'}
                        </button>
                    </div>
                    
                    <p style={{ fontSize: '16px', color: '#666', marginBottom: '24px' }}>
                        {reportData.overall.feedback}
                    </p>

                    {/* Bar Chart Section */}
                    {showChart && (
                        <div style={{
                            backgroundColor: '#f9fafb',
                            borderRadius: '12px',
                            padding: '24px',
                            marginBottom: '32px',
                            animation: 'slideDown 0.4s ease-out'
                        }}>
                            <style>{`
                                @keyframes slideDown {
                                    from {
                                        opacity: 0;
                                        transform: translateY(-20px);
                                    }
                                    to {
                                        opacity: 1;
                                        transform: translateY(0);
                                    }
                                }
                            `}</style>
                            
                            <h3 style={{
                                fontSize: '18px',
                                fontWeight: 600,
                                color: '#333',
                                marginBottom: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                <BarChart3 size={20} />
                                Skills Performance Chart
                            </h3>

                            <div style={{ width: '100%', height: '400px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                                        <XAxis 
                                            dataKey="name" 
                                            tick={{ fill: '#666', fontSize: 14 }}
                                            axisLine={{ stroke: '#e0e0e0' }}
                                        />
                                        <YAxis 
                                            domain={[0, 9]}
                                            tick={{ fill: '#666', fontSize: 14 }}
                                            axisLine={{ stroke: '#e0e0e0' }}
                                            label={{ value: 'Score', angle: -90, position: 'insideLeft', style: { fill: '#666' } }}
                                        />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Legend 
                                            wrapperStyle={{ paddingTop: '20px' }}
                                            iconType="circle"
                                        />
                                        <Bar 
                                            dataKey="score" 
                                            fill="#667eea"
                                            radius={[8, 8, 0, 0]}
                                            animationDuration={1000}
                                        >
                                            {chartData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    )}

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '24px'
                    }}>
                        <SkillCard 
                        title="Pronunciation"
                        score={reportData.overall.skills.pronunciation.score}
                        maxScore={reportData.overall.skills.pronunciation.maxScore}
                        feedback={reportData.overall.skills.pronunciation.feedback}
                        icon={MessageCircle}
                        color="#1976d2"
                        />
                        <SkillCard 
                        title="Fluency"
                        score={reportData.overall.skills.fluency.score}
                        maxScore={reportData.overall.skills.fluency.maxScore}
                        feedback={reportData.overall.skills.fluency.feedback}
                        icon={Clock}
                        color="#9c27b0"
                        />
                        <SkillCard 
                        title="Vocabulary"
                        score={reportData.overall.skills.vocabulary.score}
                        maxScore={reportData.overall.skills.vocabulary.maxScore}
                        feedback={reportData.overall.skills.vocabulary.feedback}
                        icon={BookOpen}
                        color="#ff9800"
                        />
                        <SkillCard 
                        title="Grammar"
                        score={reportData.overall.skills.grammar.score}
                        maxScore={reportData.overall.skills.grammar.maxScore}
                        feedback={reportData.overall.skills.grammar.feedback}
                        icon={CheckCircle}
                        color="#4caf50"
                        />
                    </div>
                </div>

                {/* Exam Breakdown */}
                <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.1)'
                }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        color: '#333',
                        marginBottom: '24px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Star size={28} style={{ marginRight: '8px' }} />
                        Exam-Specific Breakdown
                    </h2>

                    <div style={{
                        display: 'flex',
                        borderBottom: '2px solid #e0e0e0',
                        marginBottom: '24px',
                        overflowX: 'auto'
                    }}>
                        {exams.map((exam, index) => (
                        <button
                            key={exam.key}
                            onClick={() => setActiveTab(index)}
                            style={{
                            padding: '12px 24px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            borderBottom: activeTab === index ? '3px solid #667eea' : '3px solid transparent',
                            color: activeTab === index ? '#667eea' : '#666',
                            fontWeight: activeTab === index ? 600 : 400,
                            fontSize: '16px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            whiteSpace: 'nowrap'
                            }}
                        >
                            {exam.label}
                        </button>
                        ))}
                    </div>

                    <div>
                        <ExamCard 
                        data={exams[activeTab].data} 
                        displayName={exams[activeTab].label} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpeakingReportDashboard;