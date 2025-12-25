import { 
  TrendingUp, 
  Star, 
  CheckCircle, 
  School, 
  MessageCircle, 
  Clock, 
  BookOpen, 
  Award 
} from 'lucide-react';

const SkillCard = ({ title, score, maxScore, feedback, icon: Icon, color }) => {
    const percentage = (score / maxScore) * 100;

    return (
        <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            height: '80%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            cursor: 'default'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{
                    backgroundColor: color,
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '16px'
                }}>
                    <Icon size={24} color="white" />
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '18px', fontWeight: 600, color: '#333', marginBottom: '4px' }}>
                        {title}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                        <span style={{ fontSize: '32px', fontWeight: 700, color: color }}>
                            {score}
                        </span>
                        <span style={{ fontSize: '14px', color: '#666', marginLeft: '4px' }}>
                            /{maxScore}
                        </span>
                    </div>
                </div>
            </div>
                
            <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            overflow: 'hidden',
            marginBottom: '16px'
            }}>
            <div style={{
                width: `${percentage}%`,
                height: '100%',
                backgroundColor: color,
                borderRadius: '4px',
                transition: 'width 0.5s ease'
            }} />
            </div>
            
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
                {feedback}
            </p>
        </div>
    );
};

export default SkillCard;