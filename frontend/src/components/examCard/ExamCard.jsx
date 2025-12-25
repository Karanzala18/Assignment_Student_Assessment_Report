import SkillCard from "../skillCard/SkillCard";
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

const ExamCard = ({ data, displayName }) => {
  const percentage = (data.overall.score / data.overall.maxScore) * 100;
  const getScoreColor = (pct) => {
    if (pct >= 80) return '#4caf50';
    if (pct >= 60) return '#ff9800';
    return '#f44336';
  };
  
  const scoreColor = getScoreColor(percentage);
  
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '24px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        marginBottom: '24px',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: '200px' }}>
          <Award size={32} color={scoreColor} style={{ marginRight: '16px' }} />
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#333', margin: 0 }}>
              {displayName}
            </h3>
            <p style={{ fontSize: '14px', color: '#666', margin: '4px 0 0 0' }}>
              {data.overall.feedback}
            </p>
          </div>
        </div>
        <div style={{
          backgroundColor: scoreColor,
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          fontWeight: 700,
          fontSize: '20px'
        }}>
          {data.overall.score}/{data.overall.maxScore}
        </div>
      </div>

      <div style={{ height: '1px', backgroundColor: '#e0e0e0', margin: '24px 0' }} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px'
      }}>
        <SkillCard 
          title="Pronunciation"
          score={data.skills.pronunciation.score}
          maxScore={data.skills.pronunciation.maxScore}
          feedback={data.skills.pronunciation.feedback}
          icon={MessageCircle}
          color="#1976d2"
        />
        <SkillCard 
          title="Fluency"
          score={data.skills.fluency.score}
          maxScore={data.skills.fluency.maxScore}
          feedback={data.skills.fluency.feedback}
          icon={Clock}
          color="#9c27b0"
        />
        <SkillCard 
          title="Vocabulary"
          score={data.skills.vocabulary.score}
          maxScore={data.skills.vocabulary.maxScore}
          feedback={data.skills.vocabulary.feedback}
          icon={BookOpen}
          color="#ff9800"
        />
        <SkillCard 
          title="Grammar"
          score={data.skills.grammar.score}
          maxScore={data.skills.grammar.maxScore}
          feedback={data.skills.grammar.feedback}
          icon={CheckCircle}
          color="#4caf50"
        />
      </div>
    </div>
  );
};

export default ExamCard;