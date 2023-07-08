'use client';

import {
  useFrameworks,
  useLanguages,
  useTechnologies,
  useTools,
} from '@/stores/skills';

import { useAwards } from './awards';
import { useBasicDetails } from './basic';
import { useEducations } from './education';
import { useExperiences } from './experience';
import { useVoluteeringStore } from './volunteering';
import { useEffect, useState } from 'react';
import ResumeData from '@/helpers/constants/resume-data.json';

export const getResumeStore = () => {
  return {
    basics: useBasicDetails((state) => state.values),
    work: useExperiences((state) => state.experiences),
    education: useEducations((state) => state.academics),
    awards: useAwards((state) => state.awards),
    volunteer: useVoluteeringStore((state) => state.volunteeredExps),
    skills: {
      languages: useLanguages((state) => state.get()),
      frameworks: useFrameworks((state) => state.get()),
      technologies: useTechnologies((state) => state.get()),
      tools: useTools((state) => state.get()),
    },
  }
};

export const resetResumeStore = (data?: any) => {
  useBasicDetails.getState().reset(data?.basics || null);
  useLanguages.getState().reset(data?.skills.languages || null);
  useFrameworks.getState().reset(data?.skills.frameworks || null);
  useTechnologies.getState().reset(data?.skills.technologies || null);
  useTools.getState().reset(data?.skills.tools || null);
  useExperiences.getState().reset(data?.work || null);
  useEducations.getState().reset(data?.education || null);
  useVoluteeringStore.getState().reset(data?.volunteer || null);
  useAwards.getState().reset(data?.awards || null);
};

export const useResumeStore = (userId: number) => {
  const resumeData = {
    basics: useBasicDetails((state) => state.values),
    work: useExperiences((state) => state.experiences),
    education: useEducations((state) => state.academics),
    awards: useAwards((state) => state.awards),
    volunteer: useVoluteeringStore((state) => state.volunteeredExps),
    skills: {
      languages: useLanguages((state) => state.get()),
      frameworks: useFrameworks((state) => state.get()),
      technologies: useTechnologies((state) => state.get()),
      tools: useTools((state) => state.get()),
    },
  }

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchResumeData = async () => {
    setErrorMessage(null);
    setLoading(true);
    try {
      const response = await fetch(`/api/builder?id=${userId}`);
      const data = await response.json();
      if (data?.status === 200) {
        localStorage.setItem('resumeId', data.data.id);
        resetResumeStore(data.data);
        setLoading(false);
      } else {
        // POST data terbaru
        fetch('/api/builder', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ data: ResumeData, userId })
        })
          .then((res) => res.json())
          .then((res) => {
            if (res?.status === 201) {
              localStorage.setItem('resumeId', res.data.id);
              resetResumeStore(res.data);
            } else {
              setErrorMessage(`Error with status: ${res?.status}`);
            }
          })
          .catch((error) => {
            setErrorMessage((error as Error)?.message);
            console.log(`Error fetching resume data: ${(error as Error)?.message}`);
          })
          .finally(() => {
            setLoading(false);
          })
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage((error as Error)?.message);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchResumeData();
    }
  }, [userId]);

  return {
    resumeData: loading || errorMessage ? null : resumeData,
    loading,
    errorMessage
  }
};