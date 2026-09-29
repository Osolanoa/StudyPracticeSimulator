(function () {
  window.COURSE_CONFIG = {
    id: 'az900',
    name: 'Microsoft Azure Fundamentals',
    shortName: 'AZ-900',
    description: 'Practice simulator for Microsoft Azure Fundamentals.',
    version: '2026-07-20',
    questionsPerPractice: 10,
    passingScore: 70,
    examDomainWeights: { cloud: 0.27, architecture: 0.38, governance: 0.35 },
    referenceLabel: 'Microsoft Learn',
    domains: [
      { id: 'cloud', name: 'Cloud Concepts' },
      { id: 'architecture', name: 'Azure Architecture and Services' },
      { id: 'governance', name: 'Azure Management and Governance' }
    ]
  };
})();
