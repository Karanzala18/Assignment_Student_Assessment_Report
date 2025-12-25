const reportData = {
    student: {
        name: "Karan Zala",
        reportDate: "Dec 25, 2025"
    },


    overall: {
        score: {
            value: 7,
            max: 9
        },
        feedback:"Good overall speaking performance. Shows strong fluency and pronunciation with minor inaccuracies in vocabulary and grammar.",
        skills: {
            pronunciation: {
                score: 8.3,
                maxScore: 9,
                feedback:"Uses a wide range of pronunciation features with minimal impact from native accent."
            },
            fluency: {
                score: 9,
                maxScore: 9,
                feedback:"Speaks fluently with rare hesitation and strong coherence."
            },
            vocabulary: {
                score: 6.2,
                maxScore: 9,
                feedback:"Uses adequate vocabulary to convey meaning but lacks flexibility at times."
            },
            grammar: {
                score: 6.2,
                maxScore: 9,
                feedback:"Uses a mix of simple and complex grammar with some frequent errors."
            }
        }
    },

    exams: {
        ielts: {
            overall: {
                score: 7,
                maxScore: 9,
                feedback:"Meets IELTS Band 7 requirements with good fluency and pronunciation."
            },

            skills: {
                pronunciation: { 
                    score: 7,
                    maxScore: 9,
                    feedback:"Clear pronunciation with strong control of features."
                },
                fluency: {
                    score: 9,
                    maxScore: 9,
                    feedback:"Speaks effortlessly with natural pacing."
                },
                vocabulary: {
                    score: 8,
                    maxScore: 9,
                    feedback:"Vocabulary range is adequate but occasionally repetitive."
                },
                grammar: {
                    score: 6,
                    maxScore: 9,
                    feedback:"Uses complex grammar with some noticeable errors."
                }
            }
        },

        toefl: {
            overall: {
                score: 8,
                maxScore: 9,
                feedback:"Good TOEFL speaking performance with clear delivery and coherent responses."
            },

            skills: {
                pronunciation: {
                    score: 9,
                    maxScore: 9,
                    feedback:"Pronunciation is clear with minimal listener effort required."
                },
                fluency: {
                    score: 9,
                    maxScore: 9,
                    feedback:"Speech is smooth and well-paced with effective organization."
                },
                vocabulary: {
                    score: 7,
                    maxScore: 9,
                    feedback:"Vocabulary is appropriate but occasionally lacks precision."
                },
                grammar: {
                    score: 8,
                    maxScore: 9,
                    feedback:"Grammar control is generally good with some noticeable errors."
                }
            }
        },

        pte: {
            overall: {
                score: 7,
                maxScore: 9,
                feedback:"Demonstrates strong speaking ability suitable for academic and professional contexts."
            },

            skills: {
                pronunciation: {
                    score: 8,
                    maxScore: 9,
                    feedback:"Pronunciation is clear and natural with consistent stress and intonation."
                },
                fluency: {
                    score: 9,
                    maxScore: 9,
                    feedback:"Speaks smoothly with strong rhythm and flow."
                },
                vocabulary: {
                    score: 7,
                    maxScore: 9,
                    feedback:"Vocabulary range is sufficient but sometimes repetitive."
                },
                grammar: {
                    score: 8,
                    maxScore: 9,
                    feedback:"Grammar is mostly accurate with some complex structure errors."
                }
            }
        },

        toeic: {
            overall: {
                score: 8,
                maxScore: 9,
                feedback:"Communicates effectively in workplace speaking situations."
            },

            skills: {
                pronunciation: {
                    score: 7,
                    maxScore: 9,
                    feedback:"Pronunciation is understandable with minor clarity issues."
                },
                fluency: {
                    score: 9,
                    maxScore: 9,
                    feedback:"Maintains steady speech flow with appropriate pauses."
                },
                vocabulary: {
                    score: 7,
                    maxScore: 9,
                    feedback:"Vocabulary is sufficient for everyday professional communication."
                },
                grammar: {
                    score: 7,
                    maxScore: 9,
                    feedback:"Grammar accuracy is reasonable with some recurring mistakes."
                }
            }
        }
    }

};

module.exports = reportData;
