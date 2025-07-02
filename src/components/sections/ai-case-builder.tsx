'use client';

import React, { useState, useRef } from 'react';
import { 
  Upload, 
  Camera, 
  FileText, 
  Download, 
  CheckCircle, 
  AlertCircle,
  Brain,
  Car,
  Shield,
  Calculator,
  Clock,
  Plus,
  X,
  Eye,
  Share,
  Star,
  TrendingUp,
  FileCheck,
  Image as ImageIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface UploadedFile {
  id: string;
  name: string;
  type: 'image' | 'document';
  size: string;
  uploadDate: Date;
  category: 'accident-scene' | 'vehicle-damage' | 'medical' | 'insurance' | 'police-report' | 'other';
  preview?: string;
}

interface CaseAnalysis {
  strengthScore: number;
  estimatedValue: {
    min: number;
    max: number;
  };
  keyFactors: string[];
  nextSteps: string[];
  urgentActions: string[];
}

export function AICaseBuilder() {
  const [activeStep, setActiveStep] = useState<'upload' | 'analyze' | 'review' | 'export'>('upload');
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [caseDetails, setCaseDetails] = useState({
    accidentDate: '',
    location: '',
    description: ''
  });
  const [caseAnalysis, setCaseAnalysis] = useState<CaseAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const steps = [
    { id: 'upload', name: 'Upload Evidence', icon: Upload, description: 'Add photos, documents, and records' },
    { id: 'analyze', name: 'AI Analysis', icon: Brain, description: 'AI reviews your case details' },
    { id: 'review', name: 'Review Results', icon: FileCheck, description: 'See case strength and insights' },
    { id: 'export', name: 'Export Report', icon: Download, description: 'Download professional case file' }
  ];

  const fileCategories = [
    { id: 'accident-scene', name: 'Accident Scene Photos', icon: Camera, color: 'blue' },
    { id: 'vehicle-damage', name: 'Vehicle Damage', icon: Car, color: 'red' },
    { id: 'medical', name: 'Medical Records', icon: FileText, color: 'green' },
    { id: 'insurance', name: 'Insurance Documents', icon: Shield, color: 'purple' },
    { id: 'police-report', name: 'Police Report', icon: FileCheck, color: 'orange' },
    { id: 'other', name: 'Other Documents', icon: FileText, color: 'gray' }
  ];

  const handleFileUpload = (files: FileList | null, category: string) => {
    if (!files) return;

    Array.from(files).forEach(file => {
      const newFile: UploadedFile = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: file.type.startsWith('image/') ? 'image' : 'document',
        size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
        uploadDate: new Date(),
        category: category as any,
        preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined
      };

      setUploadedFiles(prev => [...prev, newFile]);
    });
  };

  const runAIAnalysis = async () => {
    setIsAnalyzing(true);
    setActiveStep('analyze');

    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Mock AI analysis results
    const mockAnalysis: CaseAnalysis = {
      strengthScore: 78,
      estimatedValue: {
        min: 15000,
        max: 45000
      },
      keyFactors: [
        'Clear evidence of other party fault',
        'Documented medical treatment',
        'Property damage exceeds $5,000',
        'Police report filed within 24 hours'
      ],
      nextSteps: [
        'Obtain complete medical records',
        'Get vehicle repair estimates',
        'Contact insurance companies',
        'Consult with attorney within 30 days'
      ],
      urgentActions: [
        'Schedule follow-up medical appointment',
        'Preserve evidence (photos, documents)',
        'Avoid giving recorded statements to insurance'
      ]
    };

    setCaseAnalysis(mockAnalysis);
    setIsAnalyzing(false);
    setActiveStep('review');
  };

  const exportCaseFile = () => {
    const reportData = {
      caseDetails,
      uploadedFiles,
      caseAnalysis,
      generatedDate: new Date()
    };

    // Mock download trigger
    const dataStr = JSON.stringify(reportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `car-accident-case-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();

    setActiveStep('export');
  };

  const getStepStatus = (stepId: string) => {
    const stepIndex = steps.findIndex(s => s.id === stepId);
    const currentIndex = steps.findIndex(s => s.id === activeStep);
    
    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'current';
    return 'upcoming';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Brain className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Case Builder
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Upload your accident evidence and get AI-powered case analysis with professional reports you can share with attorneys
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const status = getStepStatus(step.id);
              
              return (
                <div key={step.id} className="flex flex-col items-center flex-1">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-200
                    ${status === 'completed' ? 'bg-green-500 text-white' :
                      status === 'current' ? 'bg-blue-500 text-white' :
                      'bg-gray-200 text-gray-500'}
                  `}>
                    {status === 'completed' ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      <Icon className="h-6 w-6" />
                    )}
                  </div>
                  <div className="text-center">
                    <div className={`font-semibold text-sm ${
                      status === 'current' ? 'text-blue-600' : 'text-gray-600'
                    }`}>
                      {step.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {step.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-6xl mx-auto">
          
          {/* Step 1: Upload Evidence */}
          {activeStep === 'upload' && (
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Upload Your Evidence</h3>
                
                {/* File Categories */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {fileCategories.map((category) => {
                    const Icon = category.icon;
                    const filesInCategory = uploadedFiles.filter(f => f.category === category.id);
                    
                    return (
                      <div key={category.id} className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-400 transition-colors duration-200">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">{category.name}</h4>
                          <p className="text-sm text-gray-600 mb-4">
                            {filesInCategory.length} file{filesInCategory.length !== 1 ? 's' : ''} uploaded
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              if (fileInputRef.current) {
                                fileInputRef.current.accept = category.id === 'accident-scene' || category.id === 'vehicle-damage' ? 'image/*' : '*/*';
                                fileInputRef.current.dataset.category = category.id;
                                fileInputRef.current.click();
                              }
                            }}
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Files
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Hidden File Input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e) => {
                    const category = e.target.dataset.category || 'other';
                    handleFileUpload(e.target.files, category);
                  }}
                />

                {/* Uploaded Files List */}
                {uploadedFiles.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Uploaded Files ({uploadedFiles.length})</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {uploadedFiles.map((file) => {
                        const categoryInfo = fileCategories.find(c => c.id === file.category);
                        const CategoryIcon = categoryInfo?.icon || FileText;
                        
                        return (
                          <div key={file.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                            {file.preview ? (
                              <img src={file.preview} alt={file.name} className="w-12 h-12 object-cover rounded" />
                            ) : (
                              <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                                <CategoryIcon className="h-6 w-6 text-gray-500" />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-gray-900 truncate">{file.name}</div>
                              <div className="text-sm text-gray-500">{file.size} • {categoryInfo?.name}</div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setUploadedFiles(prev => prev.filter(f => f.id !== file.id))}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Quick Case Details Form */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Basic Case Information</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Accident Date</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={caseDetails.accidentDate}
                        onChange={(e) => setCaseDetails(prev => ({ ...prev, accidentDate: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        placeholder="Street address or intersection"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={caseDetails.location}
                        onChange={(e) => setCaseDetails(prev => ({ ...prev, location: e.target.value }))}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Accident Description</label>
                      <textarea
                        rows={3}
                        placeholder="Briefly describe what happened..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={caseDetails.description}
                        onChange={(e) => setCaseDetails(prev => ({ ...prev, description: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>

                {/* Continue Button */}
                <div className="mt-8 text-center">
                  <Button
                    size="lg"
                    onClick={runAIAnalysis}
                    disabled={uploadedFiles.length === 0 || !caseDetails.accidentDate}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  >
                    <Brain className="h-5 w-5 mr-2" />
                    Analyze My Case with AI
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {/* Step 2: AI Analysis */}
          {activeStep === 'analyze' && (
            <div className="text-center">
              <Card className="p-12">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className={`h-10 w-10 text-white ${isAnalyzing ? 'animate-pulse' : ''}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isAnalyzing ? 'AI is Analyzing Your Case...' : 'Analysis Complete!'}
                </h3>
                <p className="text-gray-600 mb-8">
                  {isAnalyzing 
                    ? 'Our AI is reviewing your evidence, analyzing case strength, and generating insights.'
                    : 'Your case has been thoroughly analyzed. Click below to review the results.'
                  }
                </p>
                
                {isAnalyzing && (
                  <div className="space-y-3">
                    <div className="bg-blue-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full animate-pulse" style={{ width: '75%' }}></div>
                    </div>
                    <div className="text-sm text-gray-500">
                      Analyzing evidence quality, case strength, and legal factors...
                    </div>
                  </div>
                )}

                {!isAnalyzing && (
                  <Button
                    size="lg"
                    onClick={() => setActiveStep('review')}
                    className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                  >
                    <Eye className="h-5 w-5 mr-2" />
                    View Analysis Results
                  </Button>
                )}
              </Card>
            </div>
          )}

          {/* Step 3: Review Results */}
          {activeStep === 'review' && caseAnalysis && (
            <div className="space-y-8">
              
              {/* Case Strength Score */}
              <Card className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Case Strength Analysis</h3>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="3"
                      />
                      <path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        strokeDasharray={`${caseAnalysis.strengthScore}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">{caseAnalysis.strengthScore}</div>
                        <div className="text-sm text-gray-500">Score</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${
                          i < Math.floor(caseAnalysis.strengthScore / 20) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-lg font-semibold text-gray-700 ml-2">
                      {caseAnalysis.strengthScore >= 80 ? 'Excellent' :
                       caseAnalysis.strengthScore >= 60 ? 'Good' :
                       caseAnalysis.strengthScore >= 40 ? 'Fair' : 'Needs Work'}
                    </span>
                  </div>
                </div>

                {/* Estimated Value */}
                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <Calculator className="h-8 w-8 text-green-600 mr-3" />
                    <h4 className="text-xl font-bold text-green-800">Estimated Case Value</h4>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-700 mb-2">
                      ${caseAnalysis.estimatedValue.min.toLocaleString()} - ${caseAnalysis.estimatedValue.max.toLocaleString()}
                    </div>
                    <p className="text-green-600">
                      Based on similar cases and your evidence quality
                    </p>
                  </div>
                </div>

                {/* Key Factors */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Strengths in Your Case</h4>
                    <div className="space-y-3">
                      {caseAnalysis.keyFactors.map((factor, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{factor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Urgent Actions Needed</h4>
                    <div className="space-y-3">
                      {caseAnalysis.urgentActions.map((action, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Export Button */}
              <div className="text-center">
                <Button
                  size="lg"
                  onClick={exportCaseFile}
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Export Professional Report
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Export Complete */}
          {activeStep === 'export' && (
            <div className="text-center">
              <Card className="p-12">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Report Generated Successfully!</h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Your comprehensive case file has been downloaded and is ready to share with attorneys.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" onClick={() => {
                    setActiveStep('upload');
                    setUploadedFiles([]);
                    setCaseAnalysis(null);
                  }}>
                    Start New Case
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    asChild
                  >
                    <a href="/find-attorney">
                      Find an Attorney Now
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>

        {/* Features Highlight */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Why Use Our AI Case Builder?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Maximize Your Settlement</h4>
              <p className="text-gray-600">
                AI analysis helps identify all factors that could increase your compensation and strengthen your case.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Save Critical Time</h4>
              <p className="text-gray-600">
                Organize everything attorneys need in minutes, not hours. Get faster responses and better preparation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Expert-Level Analysis</h4>
              <p className="text-gray-600">
                Get insights typically available only after hiring an attorney, helping you make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 